# Purpose

This script allows you to rename downloaded assignments from Blackboard into slightly shorter and 'human-readable' format.

By default, when you download all files, the name of each file is usually **Assignment Folder Name_Admin[at]mymail.nyp.edu.sg_attempt_date_FileName.FileExtension**. 

The script will remove *Assignment Folder Name*, *@mymail.nyp.edu.sg_attempt* and replace the admin number with the student's name. 

The outcome of this script will rename all the individual assignments to look like this: **StudentName_date_FileName.FileExtension**.

# Preparation (only do once!)
1. Click the green color "Code" button to download the zip version of this project. Unzip it. Let's call this folder "FileRename Folder" for the purpose of this tutorial.
1. Download and install the current version of [Node.js](https://nodejs.org/en/)
1. Save your student admin numbers and names in an excel file. It should look something like this.
    ```
    Row 1: Admin1  Admin2  Admin3
    Row 2: Name1   Name2   Name3
    ```
    *Tips: You can do this by copy and pasting from your namelist and using the paste with transpose in excel*
1. Click [this link](http://beautifytools.com/excel-to-json-converter.php) to open the converter.
    * Browse for the excel file that you did in step 2. 
    * Then click the "Convert" button. You will see the converted data in the output.
        ```
        {
            "Sheet 1": [
                {
                    "Admin1": "Name1",
                    "Admin2": "Name2",
                    "Admin3": "Name3"
                }
            ]
        }
        ```
1. Copy and paste the contents from `{"Admin1":"Name1", "Admin2":"Name2",.....}` into a file *students.json* (for eg). Save this file in the "FileRename" folder.
1. Open *students.json* in any text editor. Remove special characters from student's name. For eg, / or '
1. Repeat the above few steps for different module groups, probably just name the json file as some unique name. 


# Steps you need for each assignment
1. Download your assignments as one zip file from BB. 
1. Unzip the zip file into a folder, remove all the default **attempt_date.txt** files. For the purpose of this tutorial, let's call this folder the "Assignment" folder.
1. Open "FileRename" folder in command prompt. Type the following command.
    ```
    node . "name of student json file" "absolute path to assignment folder" "name of the assignment you set on BB" 
    ```

    For example, if your json file is called **m1Students.json**, your assignment folder is at **C:\users\abc\eg1234\Assignment1** and your assignment name on Blackboard is **Assignment1(M1)**, then the command you need to type is
    ```
    node . m1Students.json "C:\users\abc\eg1234\Assignment1" "Assignment1(M1)"
    ```
1. "Debugging" steps in case you have errors renaming these.
    * Your json file should be {"admin1:"name1", "admin2:"name2", .... etc}
