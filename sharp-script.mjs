import sharp from "sharp"

const file = "dias"
for (let i = 0; i < 3; i++) {
    await sharp(`./src/assets/images/projects/${file}${i}.png`).toFile(`./src/assets/images/projects/${file}${i}.webp`)
}