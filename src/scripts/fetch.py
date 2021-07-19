import base64
import requests
import os
from datetime import datetime
from pytz import timezone
from google.cloud import storage

def fetchstats(event, context):


     class stat:
          def __init__(self, id, name, value):
               self.id = id
               self.name = name
               self.value = value


     stats = []

     # authentication token
     key = os.environ.get('KEY')

     # fetch repos list
     response = requests.get(
          "https://api.github.com/users/jmorofsky/repos", headers={'authorization': key})
     repos = response.json()
     stats.append(stat(0, 'GitHub Projects', len(repos)))

     commits = 0
     adds = 0
     dels = 0
     # calculate number of commits for each repo
     for x in range(0, len(repos)):
          url = repos[x]['commits_url'][:-6]

          commitsresponse = requests.get(url, headers={'authorization': key})
          result = commitsresponse.json()
          commits += len(result)

          # calculate number of additions and deletions
          for y in range(0, len(result)):
               adresponse = requests.get(result[y]['url'], headers={
                                   'authorization': key})
               adresult = adresponse.json()

               for z in range(0, len(adresult['files'])):
                    adds += adresult['files'][z]['additions']
                    dels += adresult['files'][z]['deletions']

     stats.append(stat(1, 'GitHub Commits', commits))
     stats.append(stat(2, 'GitHub Deletions', dels))
     stats.append(stat(3, 'GitHub Additions', adds))

     # calculate total size of repos
     size = 0
     for x in range(0, len(repos)):
          size += repos[x]['size']
     stats.append(stat(4, 'KB of Code in Repos', size))

     # fetch number of languages in repos
     langs = 0
     for x in range(0, len(repos)):
          url = repos[x]['languages_url']
          langresponse = requests.get(url, headers={'authorization': key})
          langresult = langresponse.json()
          langs += len(list(langresult.keys()))
     stats.append(stat(5, 'Languages used in Repos', langs))

     stats.append(stat(6, 'Programming Languages', 10))
     stats.append(stat(7, 'Agile Certification', 1))

     # get date and time
     tz = timezone('US/Eastern')
     today = datetime.now(tz)
     formattedDate = today.strftime("%m/%d/%Y %H:%M")
     stats.append(stat(8, "Last update: ", formattedDate))

     # write stats data to file
     i = 0
     with open('/tmp/stats.csv', 'w') as f:
          f.write('{\n')
          f.write('\t"stats": [')
          for item in stats:
               i += 1

               f.write('\n\t\t{')
               f.write(' "id": ')
               f.write(str(item.id))
               f.write(', "name": "')
               f.write(item.name)
               f.write('", "value": ')
               if i == 9:
                    f.write('"')
                    f.write(str(item.value))
                    f.write('"')
               else:
                    f.write(str(item.value))
               
               if i == 9:
                    f.write(' }')
               else:
                    f.write(' },')
          f.write('\n\t]')
          f.write('\n}')

     # upload stats data to gcloud bucket
     def upload_blob(bucket_name, source_file_name, destination_blob_name):
          """Uploads a file to the bucket."""
          # The ID of your GCS bucket
          # bucket_name = "your-bucket-name"
          # The path to your file to upload
          # source_file_name = "local/path/to/file"
          # The ID of your GCS object
          # destination_blob_name = "storage-object-name"

          storage_client = storage.Client()
          bucket = storage_client.bucket(bucket_name)
          blob = bucket.blob(destination_blob_name)

          blob.upload_from_filename(source_file_name)

          print(
               "File {} uploaded to {}.".format(
                    source_file_name, destination_blob_name
               )
          )


     upload_blob('jasonmorofsky', '/tmp/stats.csv', 'statsData.json')
     os.remove('/tmp/stats.csv')
     print('finished')