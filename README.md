# Boring Club Hosted Website Documentation
For the firmware, Raspberry Pi server configuration, and project report, please see the [Pi\-Server Repository](https://github.com/TBC-Projects/Pi-Server)  

### Purpose 
These are the HTML and CSS files that define the website.
Whenever the main branch is updated, a script can be run on the server to upload the changes. For that reason, please test your changes in a separate branch and then make a pull/merge request when you are satisfied with the changes. Also, since this repository is set to private, you can test changes and input new information without worrying about leaks.  

### Structure
- /Images \- All images on the website should be stored directly in this directory. You can then call an image by using a relative path, like the example shown below:  
`
    <img class="img" src="Images/motorboat.jpg" alt="First Picture for Project">
`  
- index.html \- This is the home page. Visitors will likely land here first before going to other pages. If you mess with the structure of other html files just make sure not to touch this one.  
- styles.css \- This is what adds visual elements to the website. Colors, cards, buttons... anything that is not plaintext is configured by this file. Be very careful when touching this file; you could break the website!
