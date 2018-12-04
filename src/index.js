import program from 'commander'
import fs from 'fs-extra'
import path from 'path'

const deleteNodeModules = async (target, files) => {
  for (let i = 0; i < files.length; i++) {
    try {
      let file = path.resolve(target, files[i])
      let stat = await fs.stat(file)
      if (stat.isDirectory()) {
        if (file.indexOf('node_modules') > -1) {
          await fs.remove(file)
        } else {
            let _files = await fs.readdir(file)
            deleteNodeModules(file,_files)
        }
      }
    } catch (e) {
        console.error(e.message)
    }
  }
}

const delDir = async dir => {
  try {
    const files = await fs.readdir(dir)
    await deleteNodeModules(dir, files)
  } catch (e) {
    console.error(e.message)
  }
}

program.action(async dir => {
  await delDir(path.resolve(process.cwd(), dir))
})

program.parse(process.argv)
