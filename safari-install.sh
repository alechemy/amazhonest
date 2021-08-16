#!/bin/bash
# Credit to https://github.com/rohanb10/snoozz-tab-snoozing for the inspiration for this script.

# https://developer.apple.com/documentation/safariservices/safari_web_extensions/converting_a_web_extension_for_safari
xcrun safari-web-extension-converter . --app-name "amazhonest-safari"  --bundle-identifier com.aleccuster.amazhonest --swift --force --no-open;

cd amazhonest-safari

# https://developer.apple.com/documentation/safariservices/safari_web_extensions/updating_a_safari_web_extension/#3744531
xcodebuild -scheme amazhonest-safari build

echo Succesfully built Amazhonest for Safari
echo Next Steps:
echo "1. Enable the Develop menu in Safari > Preferences > Advanced"
echo "2. In the Develop menu, click Allow Unsigned Extensions"
echo "3. In Safari > Preferences > Extensions, enable Amazhonest"
echo ""
