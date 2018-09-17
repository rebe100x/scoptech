# scoptech

Scoptech is the website of the scoptech group.

This website is under construction and a robots.txt prevents from being indexed.


# Contribute

Required :

- node > v6

To install the code localy, you need to
 - clone this repo to your hard drive :
 ```sh
 git clone https://github.com/rebe100x/scoptech.git
 cd scoptech
 git pull origin develop
 ```
- install the dependencies
```sh
npm install
```

- launch the webpack compiler in dev :
```sh
npm run build:dev
```

- make your changes, build the production bundle and commit to the develop branch
```sh
npm run build:prod
git add .
git commit -m 'please do not forget the comment !'
git push origin master
```

Note : if you want to change only html and text you don't need to launch the webpack compiler

# Deploy on production


 - checkout master branch and merge the develop branch
 ```sh
 git checkout master
 git merge develop
 ```

- pushing on master will release the code on production
 ```sh
 git push origin master
 ```

