chrome.storage.onChanged.addListener(function(changes, areaName) {
    if (areaName === "sync") {
        for (var key in changes) {
            var location = milestones.indexOf(key);
            if (location !== -1) {
                updateMilestone(location, changes[key].newValue);
            }
        }
    }
})

$(document).ready(function() {

    $("#clearButton").click(function() {
        chrome.storage.sync.clear();
        for (var index in milestones) {
            updateDeletedMilestone(index);
        }
    })

    $("#setCustomKeys").click(function() {
        var key = $("#key").val();
        var value = $("#value").val();
        var set_obj = {};
        set_obj[key] = value;
        chrome.storage.sync.set(set_obj);
    })
    for (var i = 0; i < milestones.length; i++) {
        $("#info-table>tbody").append("<tr><td><img class=\"status-image\" src=\"Img/x.png\"></td>" +
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
                    updateMilestone(index, results[milestones[index]]);
                }
            }
        }

    })
}

window.onload = retrieveProgress;

// If new_val is false, the milestone will be turned off
function updateMilestone(index, new_val) {
    if (new_val) {
        $("#status" + index).text(new_val);
        $(".status-image").eq(index).attr('src', 'Img/check.png');
    } else {
        $("#status" + index).text('N/A');
        $(".status-image").eq(index).attr('src', 'Img/x.png');
    }
}
function updateDeletedMilestone(index) {
    updateMilestone(index, null);
}
