defaultString="⭐️ update"

# npm run build

git add .

echo "\033[32m Input your commit content(default: '$defaultString')\033[0m" 

read content

git commit -m $content

