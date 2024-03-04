## Working with Common Files

### Starter Docs

It's a best practice to include common files when you begin a new repository. These are typically found at the top level (root) of your repository. Here are some common files you may see in project repositories...

- [README.md](https://guides.github.com/features/wikis/) - A README is commonly used to provide instruction or explain what a repository is all about. Markdown Syntax is used to format the README file. This syntax is automatically presented to the GitHub user as HTML. Sometime a README will include a Table of Contents.
- [License](https://choosealicense.com/) (if applicable)
- [.gitignore](https://help.github.com/articles/ignoring-files/) - A .gitignore file tells git which files you never want to upload to your repository online. This is important to set-up because you never want to upload [.DS_Store files](https://www.jeffgeerling.com/blogs/jeff-geerling/stop-letting-dsstore-slow-you). You may have other files or folders in your local repository folder that you also don't want to upload. In this course, your project repository already has a .gitignore file setup and configured. Feel free to check it out and see which files and folders are being ignored.

<br>

## Using Markdown

Documentation on GitHub is written in markdown syntax. GitHub will recognize a markdown file and render it as HTML for the user. The easiest way to work in markdown is to use a text editor that can preview what that will look like. Visual Studio Code is recommended.

**Resources:**

- [Mastering Markdown](https://guides.github.com/features/mastering-markdown/) | Learn the fundamentals of writing Markdown.
- [Markdown Badges](https://github.com/Ileriayo/markdown-badges) | Add badges to enhance show that you know what code bases, tech, social, etc you're using.
- [Mastering Markdown Course](https://masteringmarkdown.com/) | Take this course to quickly get up to speed on the Markdown language
  <br>

## Working with Invisible Files

On a Mac, any file that begins with a dot "." is invisible. To locate and work with a .gitignore file (which is invisible in Mac's Finder), you can use Terminal...

**Step 1.** CD to the root level of your repository, e.g.: `cd ~/Desktop/RepoName`  
**Step 2.** List all files, including invisible: `ls -a`  
**Step 3.** Open and edit the .gitignore file...

`open .gitignore`

This will open the file in a text editor. You can then easily edit and save your changes.

**Power User Trick:** To quickly show invisible files on a Mac...

1. From the [Finder](https://support.apple.com/en-us/HT201732), type `command n` to open a new window
2. Type `command shift .` to show invisible files
3. Type the command again to hide invisible files

> **Important Note!** Always turn back on invisibility after you are done working with files like .gitignore. Unless you are editing the .gitignore file or know what you are doing with other invisible files, never edit these type of files. The Mac uses invisible files to store user settings and other system level information. To be safe, keep invisible files invisible, and only edit .gitignore files when necessary.
