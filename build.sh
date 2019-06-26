defaultString="⭐️ update"

echo "\033[32m Start disting...\033[0m"

echo "\033[32m Start building...\033[0m"

npm run build

echo "\033[32m End building...\033[0m"

echo "\033[32m Start sync to github...\033[0m"

git add .

echo "\033[32m Input your commit content(default: '$defaultString')\033[0m" 

read content

git commit -m $content

echo "\033[32m End sync to github...\033[0m"

# git push origin master

# npm login

# npm publish