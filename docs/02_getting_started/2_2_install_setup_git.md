## Install Git

Check to see if you have git installed. In Terminal, type...

```
git --version
```

If you don't have git installed, visit the [git-scm](https://git-scm.com/) site and download the most recent git release. It is ok if you have an older version of git running, but you can always install a newer version and will most likely want to update the application every now-and-then.

> **Note:** You do not need to install XCode. When checking to see if you have git, Terminal may prompt you to install XCode. Instead of installing XCode, visit the official git-scm site link listed above, download, and then run the latest installer.

<br>

## Customize Settings

To effectively use Git, configure the following basic settings in Terminal

| Setting     | Terminal Command                                    |
| :---------- | :-------------------------------------------------- |
| Username    | git config --global user.name "John Doe"            |
| Email       | git config --global user.email johnDoe@fullsail.com |
| Text Editor | git config --global core.editor nano                |

Username and email information is essential. It identifies who made changes to a repository.

**Custom Text Editor**  
The example above sets the default text editor to Nano. Without setting your preferred text editor, Git may attempt to use the less friendly [Vim](https://opensource.com/resources/what-vim). You are welcome to customize the text editor setting to your preference. If you're just getting started with Git, [Nano](https://medium.com/linode-cube/emacs-nano-or-vim-choose-your-terminal-based-text-editor-wisely-8f3826c92a68) is recommended.

- You can check your settings at any time with this command: `git config --list`
- To check an individual setting type: `git config <setting>`
- For example: `git config user.name`

<br>
 
## Detailed Settings

Outside of customizing your name, eMail, and preferred text editor, there are many other settings you can customize into the future.

[Details on Customization](2_2a_install_setup_git_details.md): Not required reading, but helpful to know.
