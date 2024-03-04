# Cloning Your Repo

Jump to a step:

1.  [Copy the HTTPS URL](#step-1-copy-the-https-url)
2.  [Clone the Repo to your Desktop](#step-2-clone-the-repo-to-your-desktop)
3.  [Navigate into the Desktop Repo](#step-3-navigate-into-the-desktop-repo)

<br>

## **Step 1: Copy the HTTPS URL**

After you create your course repository by clicking on the link in the Environment Setup activity on FSO, you will need to clone it down to your computer. A clone is a copy of your online repository that you can edit locally on your computer. You can then push your edits back to the online version of the repository to make sure the two repositories (local and GitHub) have the same edits. The easiest way to clone a repository is to use the HTTPS protocol.

While viewing your GitHub class repository, you will see a green button that you can use to clone your repository to your computer. Click the icon next to the HTTPS URL. This will copy the HTTPS address to your clipboard.

![clone_https_sm](https://drive.google.com/uc?id=1LNgtZGsGvi3ndgE6SDVrRpkD4M3it1lR)

<br>

> 🚨 **Use HTTPS!** It is strongly recommended that you clone with HTTPS, not SSH. If you have a reason for using SSH please reach out to your instructor for approval.

**Why HTTPS is preferred**

1. Easier to setup (than SSH)
2. Works better behind a firewall
3. Works with Mac OSX credential helper

<br>

## **Step 2: Clone the Repo to your Desktop**

Open the Terminal application on your Mac. Navigate to your desktop, and paste in the "Clone with HTTPS" url along with the git clone command. Make sure the URL looks like the example below, replace the hash (#) symbols with your own repo address.

```
cd ~/Desktop
git clone https://github.com/ePortfolios/wdv119-#####.git
```

<br>

## Providing your GitHub Credentials

When using the HTTPS protocol with Git in Terminal for the first time, you may be asked for your GitHub username and password.

> ⚠️ **BEFORE** you provide this information, there's a few important things to know. Read this entire step to become familiar with the GitHub login process, and then go ahead and login with your Username and Password.

### Personal Access Tokens

As of July, 2021, GitHub requires a "_Personal Access Token_" instead of using a password in Terminal. This [blog article](https://github.blog/2020-12-15-token-authentication-requirements-for-git-operations/) explains why GitHub is now requiring Token Authentication. If you haven't already setup a Personal Access Token, follow the steps outlined in this article: [Creating a Personal Access Token](https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)

**Warning:** Once you have a token, be sure to not share it with anyone and keep the information secret. You can always recreate a Personal Access Token, but just be aware that it is considered a password. You will need to enter it instead of your normal GitHub password when performing Git operations in Terminal for the first time.

For example, on the command line you would enter the following...

```
$ git clone https://github.com/username/repo.git
Username: your_username
Password: your_token
```

### Password Security in Terminal

When entering passwords in Terminal, it may appear as though nothing is happening. That's a security feature! Terminal is actually capturing your keystrokes or pasted in text, but to protect you from any nearby eyes it won't show the password back to you in the console.

### Cached Logins

Terminal will cache the login information for future use. In other words, you should no longer need to provide your user name and password in Terminal when performing git operations with GitHub.

If you happen to already have a GitHub account and have been using it in Terminal (instead of your student account), then you may need to remove that account from Terminal's cache so you can login using your student account. Terminal works with the Apple Keychain app behind the scenes to store login information. To reset and force Terminal to request a username and password the next time you attempt to use git with GitHub, follow the instructions outlined in this article: [Updating Credentials from the macOS Keychain](https://docs.github.com/en/get-started/getting-started-with-git/updating-credentials-from-the-macos-keychain).

### Logins not Caching in Terminal

If you continue to be asked for a username and password every time you run git commands, the recommendation is to install the _OSX Keychain Helper_. Once installed, your username and password will be stored after the first successful login to a repository.

[GitHub Article](https://help.github.com/articles/caching-your-github-password-in-git/): Explains how to setup the OSX Keychain Helper. Only necessary if you are continually asked to enter your username and password when connecting to GitHub.

<br>

## **Step 3: Navigate into the Desktop Repo**

After cloning the repository to your desktop, navigate inside the folder using Terminal. Replace the hash symbols below with the correct folder title. This folder is your local copy of the repository.

```
cd ~/Desktop/wdv119-####
```

Once you have navigated inside the folder you can begin to use Git commands. Git commands only work if you are currently inside a repository folder. You can confirm Terminal is "inside" the correct location by using the `pwd` command which stands for "print the working directory." In other words, it will tell you where Terminal is currently pointing. If it looks like this...

```
/Users/YourMacUserName/Desktop/wdv119-####
```

...then you are inside your repository and ready to start using Git commands!
