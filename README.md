# amazhonest

A simple extension that replaces Amazon.com propaganda banners with facts worth knowing about the company.

I built this using [webextension-toolbox](https://github.com/HaNdTriX/webextension-toolbox).

**Before**:

![Before](/assets/before.png)

**After**:

![After](/assets/after.png)

## Installation

### Chrome

- Navigate to `chrome://extensions` in Chrome and enable Developer Mode.
- Download `amazhonest.<version>.chrome.crx.zip` from the Releases page and unzip it.
- Drag the file into the Extensions page in Chrome.

### Firefox

- Download `amazhonest.<version>.firefox.xpi.zip` from the Releases page and unzip it.
- Navigate to `about:debugging#/runtime/this-firefox` in Firefox.
- Click "Load Temporary Add-on...", then select the `.xpi.zip` file.

### Safari

- Enable "Show Developer menu" in Safari > Preferences > Advanced
- Enable "Allow Unsigned Extensions" in the Develop menu
- Download `amazhonest.<version>.safari.zip` AND `safari-install.sh` from the Releases page, then unzip the former.
- Run `safari-install.sh` from the Terminal
- Open Safari and navigate to amazon.com. You'll need to click "Enable this extension" in the toolbar.
