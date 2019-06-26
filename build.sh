defaultString="⭐️ update"

echo "\033[32m Start building...\033[0m"

npm run build

echo "\033[32m Finish building\033[0m"

echo "\033[32m Start sync to github...\033[0m"

git add .

echo "\033[33m Input your commit content(default: '$defaultString')\033[0m" 

read content

commit=${content:-$defaultString}

echo $commit

git commit -m $content

echo "\033[32m Finish sync to github\033[0m"

echo "\033[32m Start publishing on npm...\033[0m"
git push origin master

npm login

npm publish

echo "\033[32m ⭐️ Finish publishing on npm\033[0m"