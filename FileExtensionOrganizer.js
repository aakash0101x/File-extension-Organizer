const path = require("path")
const fs = require("fs")

fs.readdir(__dirname, (err, files) => {
    for (const iterator of files) {
        let f = path.extname(iterator).slice(1)
        if (f) {
            let nextPath = path.join(__dirname, f)
            let sourcePath = path.join(__dirname, iterator)
            let destinationPath = path.join(nextPath, iterator)
            if (!fs.existsSync(nextPath)) {

                fs.mkdir((nextPath), (e) => {
                    if (e) { console.log("Error creating directory ", e) }
                    else {

                        console.log(`CREATED DIRECTORY  ${f}`)
                    }
                })
            }
            fs.rename(sourcePath, destinationPath, (e) => {
                if (e) { console.log(e) }
                else { console.log(`MOVED ${f} file\n`) }
            })
        }
    }
}
)



