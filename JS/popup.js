var milestones = ['Login Page URL', 'Login Page Regex', 'Invalid Creds Regex']

$(document).ready(function() {

    $(".clearButton").click(function() {
        chrome.storage.sync.set({
            'Login Page URL': 'hey',
            'Login Page Regex': 'wow',
            'Invalid Creds Regex': 'woawko'
        })
    })
    for (var i = 0; i < milestones.length; i++) {
        $("#info-table>tbody").append("<tr><td><img class = \"status-image\" src=\"Img/x.png\"></td>" +
                                      "<td>" + milestones[i] + "</td>" +
                                      "<td id=status" + i + ">N/A</td></tr>");
    }
})


function retrieveProgress() {
    chrome.storage.sync.get(milestones, function(results) {
        if (chrome.extension.lastError) {
            alert("No saved data");
        } else if (!results) {
            alert("No saved data 2");
        } else {
            for (var index in milestones) {
                if (milestones[index] in results) {
                    $("#status" + index).text(results[milestones[index]]);
                }
            }
        }

    })
}

window.onload = retrieveProgress;
