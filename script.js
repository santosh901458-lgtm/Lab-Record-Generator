function generateRecord() {
    let exp = document.getElementById("experiment").value.trim();
    let lang = document.getElementById("language").value;

    if (exp === "") {
        alert("Please enter experiment name!");
        return;
    }

    let code = "";

    if (lang === "Java") {
        code = `
class Example {
    public static void main(String[] args) {
        System.out.println("${exp} executed successfully");
    }
}`;
    } 
    else if (lang === "Python") {
        code = `
print("${exp} executed successfully")
`;
    } 
    else if (lang === "C") {
        code = `
#include <stdio.h>
int main() {
    printf("${exp} executed successfully");
    return 0;
}`;
    }

    let output = `
<h2>📘 Experiment: ${exp}</h2>

<h3>🎯 Aim</h3>
<p>To implement <b>${exp}</b> using <b>${lang}</b>.</p>

<h3>📖 Theory</h3>
<p>${exp} is an important concept in programming used to solve problems efficiently and improve logical thinking.</p>

<h3>📝 Algorithm</h3>
<ol>
<li>Start the program</li>
<li>Take input if required</li>
<li>Apply logic for ${exp}</li>
<li>Display the result</li>
<li>Stop the program</li>
</ol>

<h3>💻 Code (${lang})</h3>
<pre>${code}</pre>

<h3>📊 Output</h3>
<p>${exp} executed successfully</p>

<h3>❓ Viva Questions</h3>
<ul>
<li>What is ${exp}?</li>
<li>Explain how ${exp} works.</li>
<li>Where is ${exp} used?</li>
<li>What are its advantages?</li>
</ul>
`;

    document.getElementById("result").innerHTML = output;
}
