
	// Function send Reset command (clear EEPROM) to ESP. Triggered after pushing the red 'Reset' button from the modal popup
	function DoReset(){
		$("#header").hide();
		$("#reboot").show();
		WaitForReboot = 1;
		$.ajax
		({type: "GET",url: "/api",data: {action:"reset",value:"true"},cache: false})
	};

	// When a link to the modal-dialog is pressed, configure text and buttons. This is for reset
	$("#DoReset").click(function(event){
		event.preventDefault();
		$(".modal-title1").html("Confirm factory reset");
		$("#modal-body-text").html("Are you sure you want to reset?<br>This will erase all settings, including wifi. This option is irreversible.");
		$("#DoFunction").html("Reset");
		$("#DoFunction").attr("title", "DoReset");
	});

	// When a link to the modal-dialog is pressed, configure text and buttons. This is for reset
	$("#DoReboot").click(function(event){
		event.preventDefault();
		$(".modal-title1").html("Confirm Reboot");
		$("#modal-body-text").html("Are you sure yout want to reboot?");
		$("#DoFunction").html("Reboot");
		$("#DoFunction").attr("title", "DoReboot");
	});
	
	// Function to figure out what exactly is confirmed in the modal-dialog, redirect to corresponding function
	$("#DoFunction").click(function(){
		$("#modal-dialog").modal("hide");
		var linkTitle = $("#DoFunction").attr("title");
		if (linkTitle == "DoReboot") { DoReboot(); }
		if (linkTitle == "DoReset") { DoReset(); }
	});

	// When the 'Refresh' button is pressed, refresh all data from ESP
	$("#refresh").click(function(){RefreshData();});

