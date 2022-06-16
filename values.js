function value(obj)
{
    let text = "";
    for (let x in obj) 
    {
      text += testObject[x]+ ", ";
    }
    return text;
}

module.exports = value;

