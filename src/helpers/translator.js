import translate from 'translate'

async function translator(text, lang) {
    translate.engine = "google"
    if (lang === 'JA') {
        return await translate(text, { to: "ja" })
    }
    return text
}

export const contentTranslator = async ({staticContent, setContent, language}) => {
    if (language === 'JA') {
        const transalteContent = { ...staticContent }
        const keys = Object.keys(transalteContent)

        for (let i = 0; i < keys.length; i++) {
            const name = await translator(transalteContent[keys[i]], language)
            name && (transalteContent[keys[i]] = name)
        }
        setContent(transalteContent)
    } else {
        setContent(staticContent)
    }

}

export default translator
