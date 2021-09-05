const getQuestions = async (id_category, difficulty) => {
    const url = `https://opentdb.com/api.php?amount=10&category=${id_category}&difficulty=${difficulty}&type=multiple`;
    console.log("URL" + url);
    const res = await fetch(url);
    const questions = await res.json();
    return questions;
}

export default getQuestions;