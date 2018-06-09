# wms

## The Tools
1. Vagrant (with plugin vagrant-fsnotify)
2. VirtualBox
3. Git
4. Visual Studio Code

## The Steps to Launch the Environment
1. Clone the Git repository: https://github.com/chandab0/wms.git
3. Go to the directory: wms
4. Run `vagrant up`
5. Once the `vagrant up` is complete, run `vagrant ssh` to log into the vistual box using the password vagrant. Change the directory to /vagrant and run the command `npm run watch`
6. Open another terminal, go to the same directory and run `vagrant fsnotify`

NB. To install fsnotify plugin run `vagrant plugin install vagrant-fsnotify`

Note: Now as we make changes in the code, the fsnotify plugin will detect the changes, replay the changes in the virtual box, webpack will detect the changes and rebuild the app automatically. Refresh the browser to see the change.

## The steps to build for production
1. Run the command `npm run build` to generate the production code in the dist folder
