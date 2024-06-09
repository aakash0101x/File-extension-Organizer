# File Organizer

This script organizes files in the current directory based on their file extensions.

## Prerequisites

- Node.js installed on your machine

## Usage

1. Clone the repository or download the script file.
2. Open your terminal and navigate to the directory containing the script.
3. Run the following command:

    ```
    node FileExtensionOrganizer.js
    ```

4. The script will create directories for each file extension found in the current directory and move corresponding files into their respective directories.

## Explanation

- The script utilizes Node.js `fs` (file system) module to read the contents of the directory and organize the files.
- It iterates through each file in the directory.
- For each file, it extracts the file extension using `path.extname()` function.
- If a file extension is found, it creates a directory corresponding to the extension if it doesn't already exist.
- It then moves the file to the directory based on its extension using `fs.rename()` function.

## License

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
