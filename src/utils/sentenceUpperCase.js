export const handleCapitalizeSentence = sentence => {
    return sentence.split(' ').map(word => word[0].toUpperCase()+word.slice(1)).join(' ')
}