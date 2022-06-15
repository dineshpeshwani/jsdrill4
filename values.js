function value(obj)
{
    let text = "";
    for (let x in obj) 
    {
      text += obj[x]+ ", ";
    }
    return text;
}

module.exports = value;

