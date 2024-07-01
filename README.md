# Convention Guide

plan design Dairy Web-Application

# **Development Tools :**

VScode , Git-Lab , Figma , Notion

- **Visual Studio Code (VSCode):** A powerful and versatile code editor that provides an excellent development environment with features like syntax highlighting, debugging support, and extensions for enhanced productivity.
- **GitLab:** A web-based Git repository manager that offers version control, issue tracking, and continuous integration/continuous deployment (CI/CD) pipelines, facilitating collaborative software development.
- **Figma:** An innovative design tool used for creating user interfaces, prototypes, and collaborative design projects.
- Notion: A platform to organize team progress and sprint report. Note down the thing that we stuck on and the things that we learn.

# Figma Design Convention :

- **Frame naming:** Frames must have proper names corresponding to their responsible pages that they represent.
- **Element naming:** Elements inside frames must have proper names corresponding to their purpose and usage.
- **Frame alignment:** Frames must have proper alignment and all have the exact same spacing and gap which is 100px gap between each frame.
- **Frame placement:** All frames must follow their placement, the frames containing the components for each resolution must be on the right, whereas, the frames that contain the UI clone of each page is on the left.

Resolution for :
- Phone (iphone 12 pro max) : 390 x 844
- Tablet (Ipad pro) :1024 x 1366
- Desktop : 1920 x 1080

Grid system for (iphone 12 pro): 
- Grid width: 390px
- Gutter: 10px
- Total columns: 5

Grid system for (Ipad pro): 
- Grid width: 1024px
- Gutter: 30px
- Total columns: 9

Grid system for (Desktop): 
- Grid width: 1920px
- Gutter: 60px
- Total columns: 12.

# Fonts Families :

- **Anton**
- Cabin

# Wireframe-color :

- **wireframe-primary:** #545F71
- **wireframe-secondary:** #9BA5B7
- **pure-white:** #FFFFFF
- light grey: #EEEEEE

# Style Guide :

### Color :

- **#158C94** = Teal Blue
- **#FFFFFF** = White
- **#000000** = Black
- **#142421** = Dark Slate Gray
- **#167278** = Deep Aqua
- **#222831** = Charcoal
- **#023A02** = Dark Green
- **#00FF00** = Green
- **#563DED** = Medium Slate Blue
- **#BD0000** = Dark Red
- linear-gradient(140deg, #f0f0f0, #00ced1)

### box-shadow :

- box-shadow: 0 5px 5px rgba(0, 0, 0, 0.3), 0 5px 5px rgba(0, 0, 0, 0.2), 0 5px 5px rgba(0, 0, 0, 0.1)

### Border :

- button = border-radius: 40px - 50px
- box =  border-radius: 5px or 10px
- border size = 2px
- border = solid

### Padding & Margin :

- element in footer and footer =   padding-left: 40px  and  padding-right: 40px
- footer margin-top = 50px

### font :

- font-size = 14px - 20px - 30px - 40px - 64px - 128px
- font-weight = default and bold

### Transition :

- transition = 0.2s - 0.3s

### Media screen :

- Break point = 500px - 576px - 720px - 851px

# CSS styling framework :

- none

# HTML & CSS Convention:

- file that create in Html/Css should name lowercase letter all and if the name has space should put dash -

Example :

home-page.html

home-page.css

- In html and css code in one block should put note what is that block mean

Example :

```html
  <!-- header  -->
  <header-nike></header-nike>
```

```css
/* header  */
.header-top {
    background-color: #F5F5F5;
}
```

# JavaScript  Convention:

- file that create in javascript should name as camel case .

Example :

HomePage.js 

- in the block of code should put note that what does this block do

### Description :

- components:  a folder to store reusable components.
- pages: stores each page about html.
- src: stores each page about css.
- scrip: store each page about javascript.
- index.html: the file that represents the landing page of the website.
- Json: store data.

### Peer Review :

- General comments: inline comments made must be specified in the general comment 
e.g: Please check my comment on file-name.ext( css, js, html ) on line :
- 112
- 321
- or if the code clean without any error comments ship it!

### Version control :

Issue naming convention : 

- Issue naming : The issues must have the issue name followed by ‘:’ and then a description of the issue at hand
- Always commit after completely adding sth to the code

# Merge Request :

- Title: The issue name must be put in the title part.
- Description: The issue name must be followed by a description of what the issue is and how it should be fixed.  e.g: homepage: Create the homepage with responsiveness. 
Commit Message :
- Common commit rules: Commits must be detailed stating the changes made along with a short and meaningful description of the changes.
Commit prefixes:
- Init: when you initialize the workspace on a new branch.
- Add: when adding a new functionality on a branch.
- Finish: when the entire branch is finished (the last commit before merging the branch).
- Fix: when fixing something on the bugfix/hotfix branch.
- Merge: when merging your branch into a parent branch. e.g : Merge: merging into the release branch with the bugfix/homepage branch