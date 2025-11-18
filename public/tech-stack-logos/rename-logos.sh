#!/bin/bash

# Navigate to the tech-stack-logos directory
cd "/Users/atikrahman/DevProjects/own-multilat/bst/site/public/tech-stack-logos" || exit

# Loop through all files matching the pattern
for file in Brand=*.svg; do
    # Extract the brand name and style from the filename
    # Example: "Brand=adobe, Style=Dark.svg" -> brand="adobe", style="Dark"

    # Remove "Brand=" prefix and extract everything before ", Style="
    brand=$(echo "$file" | sed 's/Brand=//' | sed 's/, Style=.*//')

    # Extract style (Dark or Light)
    style=$(echo "$file" | sed 's/.*Style=//' | sed 's/.svg//')

    # Convert style to lowercase
    style_lower=$(echo "$style" | tr '[:upper:]' '[:lower:]')

    # Create new filename
    new_name="${brand}-${style_lower}.svg"

    # Rename the file
    mv "$file" "$new_name"

    echo "Renamed: $file -> $new_name"
done

echo "Renaming Complete!"
