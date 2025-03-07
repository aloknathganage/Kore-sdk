(function (factory) {
    // if (typeof define === 'function' && define.amd) { // AMD
    //    define(factory);
    //  } else if (typeof module !== 'undefined') {      // CommonJS
    //    module.exports = factory();
    //  } else {                                         // browser globals
    window.koreBotChat = factory();
    //}
})(function () {
    // hoonartek customization starts Done : button and for checkboxes template None of the above - ALok
    //  $(document).on('click', '.listTmplContent', function() {
    //     let sdcVal= Number(sessionStorage.getItem('sdc'))
    //     var checkboxes = document.querySelectorAll('.checkInput');
    //     const noneOfTheAboveValue = "None of the above";
    //     // Get the checked checkboxes and their values
    //     var checkedValues = Array.prototype.filter.call(checkboxes, function(checkbox) {
    //         return checkbox.checked;
    //     }).map(function(checkedCheckbox) {
    //         return checkedCheckbox.getAttribute('text');  //customization  // Get the value of the checked checkbox
    //     });
    //     console.log('checkedValuess at begining - : ' + checkedValues);

    //     if(sdcVal){
    //         checkedCount = checkedCount - sdcVal
    //     }
    //     // customization
    //     if (checkedValues.includes(noneOfTheAboveValue)) {
    //         // "None of the Above" is selected, disable all other checkboxes
    //         checkboxes.forEach(checkbox => {
    //             if (checkbox.value !== noneOfTheAboveValue) {
    //                 checkbox.checked = false;  // Uncheck other checkboxes
    //                 checkbox.disabled = true;  // Disable other checkboxes
    //                 // checkbox.style.pointerEvents = 'none';  // Prevent interaction
    //             }
    //         });
    //         // Recalculate `checkedValues` after unchecking other checkboxes
    //             checkedValues = [noneOfTheAboveValue];  // Set checkedValues to only include "None of the Above"
    //             checkedCount = 1;  // Update checkedCount accordingly

    //         // Disable the Done button if "None of the Above" is selected
    //         document.querySelectorAll('.checkboxBtn').forEach(function(button) {
    //             button.style.pointerEvents = 'none';
    //         });
    //     } else {
    //         // "None of the Above" is not selected, enable all other checkboxes
    //         checkboxes.forEach(checkbox => {
    //             checkbox.disabled = false;  // Enable all checkboxes
    //             checkbox.style.pointerEvents = 'auto';  // Reset pointer events
    //         });
    //     }
    //     // customization
    //      // Calculate the number of checked checkboxes
    //      var checkedCount = checkedValues.length;

    //     if (checkedCount > 0) {
    //         document.querySelectorAll('.checkboxBtn').forEach(function(checkbox) {
    //             checkbox.style.pointerEvents = 'auto';
    //         });
    //     } else {
    //         document.querySelectorAll('.checkboxBtn').forEach(function(checkbox) {
    //             checkbox.style.pointerEvents = 'none';
    //         });
    //     }
    //     console.log('Number of checked checkboxes: ' + checkedCount);
    //     console.log('checkedValuess - : ' + checkedValues);
    // });
// hoonartek customization starts Done : button and for checkboxes template None of the above - ends

//manasi healthaddon template
	$(document).on('click', '.listTmplContent', function () {
        let sdcVal = Number(sessionStorage.getItem('sdc'));
        var checkboxes = document.querySelectorAll('.checkInput');
        var dropdowns = document.querySelectorAll('.styledDropdown');
        const noneOfTheAboveValue = "None of the above";
	
    //manasi 13/02
	checkboxes.forEach(checkbox => {
            if (checkbox.hasAttribute('checked')) {  
                checkbox.addEventListener('click', function (event) {
                    if (!checkbox.checked) {
                        event.preventDefault(); // Prevent unchecking
                        checkbox.checked = true; // Keep it checked
                    }
                });
            }
        });
 	//manasi 13/02

    // Get the checked checkboxes and their values
    var checkedValues = Array.prototype.filter.call(checkboxes, function (checkbox) {
        return checkbox.checked;
    }).map(function (checkedCheckbox) {
        return checkedCheckbox.getAttribute('text'); // Get the value of the checked checkbox
    });

    // Get the dropdown selections and their values
    var dropdownValues = Array.prototype.map.call(dropdowns, function (dropdown) {
        const selectedOption = dropdown.options[dropdown.selectedIndex];
        return {
            dropdownId: dropdown.id, // Dropdown ID
            selectedValue: selectedOption.value, // Selected Value
            selectedLabel: selectedOption.text, // Selected Label
        };
    });

    console.log('Checked Values:', checkedValues);
    console.log('Dropdown Values:', dropdownValues);
    
    if (sdcVal) {
        checkedCount = checkedCount - sdcVal;
    }

    // Handle the "None of the Above" functionality
    if (checkedValues.includes(noneOfTheAboveValue)) {
        checkboxes.forEach(checkbox => {
            if (checkbox.value !== noneOfTheAboveValue) {
                checkbox.checked = false; // Uncheck other checkboxes
                checkbox.disabled = true; // Disable other checkboxes
            }
        });

        checkedValues = [noneOfTheAboveValue]; // Set checkedValues to only include "None of the Above"
        checkedCount = 1; // Update checkedCount accordingly

        // Disable the Done button if "None of the Above" is selected
        document.querySelectorAll('.checkboxBtn').forEach(function (button) {
            button.style.pointerEvents = 'none';
        });
    } else {
        checkboxes.forEach(checkbox => {
            checkbox.disabled = false; // Enable all checkboxes
            checkbox.style.pointerEvents = 'auto'; // Reset pointer events
        });
    }

    // Calculate the number of checked checkboxes
    var checkedCount = checkedValues.length;

    if (checkedCount > 0) {
        document.querySelectorAll('.checkboxBtn').forEach(function (button) {
            button.style.pointerEvents = 'auto';
        });
    } else {
        document.querySelectorAll('.checkboxBtn').forEach(function (button) {
            button.style.pointerEvents = 'none';
        });
    }

    // Log the collected data
    console.log('Number of checked checkboxes:', checkedCount);
    console.log('Checked Values:', checkedValues);
    console.log('Dropdown Values:', dropdownValues);

    // Combine both checkedValues and dropdownValues into one object for further processing
    const combinedData = {
        checkedValues,
        dropdownValues,
    };

    console.log('Combined Data:', combinedData);

    // Use the combinedData object for further processing (e.g., sending to API, etc.)
    });
 
//manasi healthaddon template
	
// hoonartek customization starts for the health template Done : and for None of the above
    $(document).on('click', '.insurance-options-container', function() {
        let sdcVal= Number(sessionStorage.getItem('sdc'))
        var checkboxes = document.querySelectorAll('.insurance-option-checkbox');
        const noneOfTheAboveValue = "None of the above";

        var checkedValues = Array.prototype.filter.call(checkboxes, function(checkbox) {
            return checkbox.checked;
        }).map(function(checkedCheckbox) {
            return checkedCheckbox.getAttribute('text');  // hoonartek customization  // Get the value of the checked checkbox
        });


        if(sdcVal){
            checkedCount = checkedCount - sdcVal
        }

        // customization
        if (checkedValues.includes(noneOfTheAboveValue)) {
            // "None of the Above" is selected, disable all other checkboxes
            checkboxes.forEach(checkbox => {
                if (checkbox.value !== noneOfTheAboveValue) {
                    checkbox.checked = false;  // Uncheck other checkboxes
                    checkbox.disabled = true;  // Disable other checkboxes
                }
            });
            // Recalculate `checkedValues` after unchecking other checkboxes
                checkedValues = [noneOfTheAboveValue];  // Set checkedValues to only include "None of the Above"
                checkedCount = 1;  // Update checkedCount accordingly

            // Disable the Done button if "None of the Above" is selected
            document.querySelectorAll('.checkboxBtn').forEach(function(button) {
                button.style.pointerEvents = 'none';
            });
        } else {
            // "None of the Above" is not selected, enable all other checkboxes
            checkboxes.forEach(checkbox => {
                checkbox.disabled = false;  // Enable all checkboxes
                checkbox.style.pointerEvents = 'auto';  // Reset pointer events
            });
        }
        // customization
        // Calculate the number of checked checkboxes
        var checkedCount = checkedValues.length;

        if (checkedCount > 0) {
            document.querySelectorAll('.done-button').forEach(function(checkbox) {
                checkbox.style.pointerEvents = 'auto';
            
            });
        } else {
            document.querySelectorAll('.done-button').forEach(function(checkbox) {
                checkbox.style.pointerEvents = 'none';
            });
        }
        // console.log('Number of checked checkboxes: ' + checkedCount);
        // console.log('checkedValuess - : ' + checkedValues);
    });
    // kore customization ends for the health template None of the above

// hoonartek customization starts for the country selection template for enable done after any one checkbox selected
    $(document).on('click', '.buttonTmplContent', function() {
        let sdcVal= Number(sessionStorage.getItem('sdc'))
        var checkboxes = document.querySelectorAll('.dropdownTemplatesValues');
        var checkedCount = Array.prototype.filter.call(checkboxes, function(checkbox) {
            return checkbox.checked;
        }).length;
        if(sdcVal){
            checkedCount = checkedCount - sdcVal
        }
        if (checkedCount > 0) {
            document.querySelectorAll('.doneBtn').forEach(function(checkbox) {
                checkbox.style.pointerEvents = 'auto';
                
            });
        } else {
            document.querySelectorAll('.doneBtn').forEach(function(checkbox) {
                checkbox.style.pointerEvents = 'none';
            });
        }
        console.log('Number of checked checkboxes: ' + checkedCount);
    });
// hoonartek customization starts for country selection template for enable done after any one checkbox selected ends


    return function koreBotChat() {
	// hoonartek kore Customization for mic starts
	        window.micAutoOnOff = false;
	        window.enableMicAutoOnOff = function enableMicAutoOnOff(){
	            window.micAutoOnOff = !window.micAutoOnOff;
	            if (window.micAutoOnOff){
	                document.getElementById("mic-auto-btn").style.backgroundColor = "lightgreen";
	                document.getElementById('notRecordingMicBtn').click();
	            }else{
	                document.getElementById("mic-auto-btn").style.backgroundColor = "gray";
	            }
	        }
	// hoonartek kore Customization for mic
        var koreJquery;
        if (window && window.KoreSDK && window.KoreSDK.dependencies && window.KoreSDK.dependencies.jQuery) {
            //load kore's jquery version
            koreJquery = window.KoreSDK.dependencies.jQuery;
        } else {
            //fall back to clients jquery version
            koreJquery = window.jQuery;
        }

        var KRPerfectScrollbar;
        if(window.PerfectScrollbar && typeof PerfectScrollbar ==='function'){
          KRPerfectScrollbar=window.PerfectScrollbar;
        }
        
        var returnFun =(function ($,KRPerfectScrollbar) {

            //Actual  chatwindow.js koreBotChat function code starts here

            var bot = requireKr('/KoreBot.js').instance();
            var _koreBotChat=this;
            var botMessages = {};
            var _botInfo = {};
            var detectScriptTag = /<script\b[^>]*>([\s\S]*?)/gm;
            var _eventQueue = {};
            var carouselEles = [];
            var prevRange, accessToken, koreAPIUrl, fileToken, fileUploaderCounter = 0, bearerToken = '', assertionToken = '', messagesQueue = [], historyLoading = false;
            var speechServerUrl = '', userIdentity = '', isListening = false, isRecordingStarted = false, speechPrefixURL = "", sidToken = "", carouselTemplateCount = 0, waiting_for_message = false, loadHistory = false;
            var EVENTS={
                //chat window exposed events   
                OPEN_OVERRIDE:"cw:open:override",
                MESSAGE_OVERRIDE:"cw:message:override"
            };
            var sendFailedMessage={
                messageId:null,
                MAX_RETRIES:3,
                retryCount:0
            };
            /******************* Mic variable initilization *******************/
            var _exports = {},
                _template, _this = {};
            var navigator = window.navigator;
            var mediaStream, mediaStreamSource, rec, _connection, intervalKey, context;
            var _permission = false;
            var _user_connection = false;
            var CONTENT_TYPE = "content-type=audio/x-raw,+layout=(string)interleaved,+rate=(int)16000,+format=(string)S16LE,+channels=(int)1";

            var recorderWorkerPath = "../libs/recorderWorker.js";
            var INTERVAL = 250;
            var _pingTimer, _pingTime = 30000;
            /***************** Mic initilization code end here ************************/

            /******************************* TTS variable initialization **************/
            var _ttsContext = null, _ttsConnection = null, ttsServerUrl = '', ttsAudioSource = null, _txtToSpeak = "", optionIndex = 65; audioMsgs = []; speechSyn = null; audioPlaying = false;   // Audio context
            /************************** TTS initialization code end here **************/

            /*************************** file upload variable *******************************/
            var appConsts = {};
            var attachmentInfo = {};
            // var allowedFileTypes = ["m4a", "amr", "aac", "wav", "mp3", "mp4", "mov", "3gp", "flv", "png", "jpg", "jpeg", "gif", "bmp", "csv", "txt", "json", "pdf", "doc", "dot", "docx", "docm"
            //     , "dotx", "dotm", "xls", "xlt", "xlm", "xlsx", "xlsm", "xltx", "xltm", "xlsb", "xla", "xlam", "xll", "xlw", "ppt", "pot", "pps", "pptx", "pptm", "potx", "potm", "ppam",
            //     "ppsx", "ppsm", "sldx", "sldm", "zip", "rar", "tar", "wpd", "wps", "rtf", "msg", "dat", "sdf", "vcf", "xml", "3ds", "3dm", "max", "obj", "ai", "eps", "ps", "svg", "indd", "pct", "accdb",
            //     "db", "dbf", "mdb", "pdb", "sql", "apk", "cgi", "cfm", "csr", "css", "htm", "html", "jsp", "php", "xhtml", "rss", "fnt", "fon", "otf", "ttf", "cab", "cur", "dll", "dmp", "drv", "7z", "cbr",
            //     "deb", "gz", "pkg", "rpm", "zipx", "bak", "avi", "m4v", "mpg", "rm", "swf", "vob", "wmv", "3gp2", "3g2", "asf", "asx", "srt", "wma", "mid", "aif", "iff", "m3u", "mpa", "ra", "aiff", "tiff",
            //     "log"];
	    var allowedFileTypes = ["png", "doc", "pdf", "jpg", "jpeg"]; // hoonartek customization
            appConsts.CHUNK_SIZE = 1024 * 1024;
            var filetypes = {}, audio = ['m4a', 'amr', 'wav', 'aac', 'mp3'], video = ['mp4', 'mov', '3gp', 'flv'], image = ['png', 'jpg', 'jpeg','gif'];
            filetypes.audio = audio;
            filetypes.video = video;
            filetypes.image = image;
            filetypes.file = { limit: { size: 25 * 1024 * 1024, msg: "Please limit the individual file upload size to 25 MB or lower" } };
            filetypes.determineFileType = function (extension) {
                extension = extension.toLowerCase();
                if ((filetypes.image.indexOf(extension) > -1)) {
                    return "image";
                } else if ((filetypes.video.indexOf(extension) > -1)) {
                    return "video";
                } else if ((filetypes.audio.indexOf(extension) > -1)) {
                    return "audio";
                } else {
                    return "attachment";
                }
            };

            var kfrm = {};
            kfrm.net = {};
            window.PieChartCount = 0;
            window.barchartCount = 0;
            window.linechartCount = 0;
            var available_charts = [];
            var chatInitialize;
            var recognizer;
            var customTemplateObj = {};
	    var conMicOff = false;   // hoonartek kore customization for mic on off
            window.chartColors = ['#75b0fe', '#f78083', '#99ed9e', '#fde296', '#26344a', '#5f6bf7', '#b3bac8', '#99a1fd', '#9cebf9', '#f7c7f4'];
            /**************************File upload variable end here **************************/
            var _escPressed = 0;
            chatWindow.prototype.isNotAllowedHTMLTags = function (txtStr) {
                var wrapper = document.createElement('div');
                wrapper.innerHTML = txtStr;

                var setFlags = {
                    isValid: true,
                    key: ''
                };
                try {
                    if ($(wrapper).find('script').length || $(wrapper).find('video').length || $(wrapper).find('audio').length) {
                        setFlags.isValid = false;
                    }
                    if ($(wrapper).find('link').length && $(wrapper).find('link').attr('href').indexOf('script') !== -1) {
                        if (detectScriptTag.test($(wrapper).find('link').attr('href'))) {
                            setFlags.isValid = false;
                        } else {
                            setFlags.isValid = true;
                        }
                    }
                    if ($(wrapper).find('a').length && $(wrapper).find('a').attr('href').indexOf('script') !== -1) {
                        if (detectScriptTag.test($(wrapper).find('a').attr('href'))) {
                            setFlags.isValid = false;
                        } else {
                            setFlags.isValid = true;
                        }
                    }
                    if ($(wrapper).find('img').length && $(wrapper).find('img').attr('src').indexOf('script') !== -1) {
                        if (detectScriptTag.test($(wrapper).find('img').attr('href'))) {
                            setFlags.isValid = false;
                        } else {
                            setFlags.isValid = true;
                        }
                    }
                    if ($(wrapper).find('object').length) {
                        setFlags.isValid = false;
                    }

                    return setFlags;
                }
                catch (e) {
                    return setFlags;
                }
            };

            chatWindow.prototype.escapeHTML = function (txtStr) {
                //'&': '&amp;',
                var escapeTokens = {
                    '<': '&lt;',
                    '>': '&gt;',
                    '"': '&quot;',
                    "'": '&#x27;'
                };
                var htmlTags = /[<>"']/g;
                return ('' + txtStr).replace(htmlTags, function (match) {
                    return escapeTokens[match];
                });
            };

            chatWindow.prototype.koreReplaceAll = function (str,search, replacement) {
                var target = str;
                return target.replace(new RegExp(search, 'g'), replacement);
            };
            
            if (!chatWindow.prototype.includes) {
                chatWindow.prototype.includes = function(str,search, start) {
                'use strict';

                if (search instanceof RegExp) {
                  throw TypeError('first argument must not be a RegExp');
                } 
                if (start === undefined) { start = 0; }
                return str.indexOf(search, start) !== -1;
              };
            }

            function findSortedIndex(array, value) {
                var low = 0,
                    high = array.length;
    
                while (low < high) {
                    var mid = low + high >>> 1;
                    if (array[mid] < value) low = mid + 1;
                    else high = mid;
                }
                return low;
            }
	//hoonartek kore customization for mic on off
            function readDigitsSeparately(numberString) {
                return numberString.split('').join(' '); // Splits the string into an array of characters and joins them with a space
            }
        //hoonartek kore customization for mic on off
            //hoonartek kore customization for mic on off
            // code to formate the registration number nad mobile number after send it into chat
            // function reFormatUserText(text){
            //     const phoneRegex = /^\d{10}$/;
            //     const policyRegex = /^\d{18}$/;
            //     const pincodeRegex = /^\d{6}$/;
            //     const panNumberRegex = /^[A-Z]{5}\d{4}[A-Z]$/;
		
            //     let removeSpaces = text.replace(/\s/g, "");
            //     const vehicleRegex = /\b[a-z]{2}\d{2}[a-z]{2}\d{4}\b/i;
            //       if (vehicleRegex.test(removeSpaces)) {
            //         return removeSpaces.replace(/(\w{2})(\d{2})(\w{2})(\d{4})/, "$1-$2-$3-$4");
            //       }
            //       if(phoneRegex.test(removeSpaces)){
            //           return removeSpaces
            //       }
            //       if(policyRegex.test(removeSpaces)){
            //         return removeSpaces
            //     }
            //     if(pincodeRegex.test(removeSpaces)){
            //         return removeSpaces
            //     }
            //     if(panNumberRegex.test(removeSpaces)){
            //         return removeSpaces
            //     }
            //     return text.replace(/\.$/, '');
            //   }
	function reFormatUserText(text) {
		  console.log("In reFormatUserText in chatwindow.js");
		  const phoneRegex = /^\d{10}$/; // Validates a 10-digit phone number
		  const phoneRegexInSentence = /\b\d{3}[-\s]?\d{3}[-\s]?\d{4}\b/g; // Matches a phone number in sentence 19_02_2025
		  const policyRegex = /^\d{18}$/; // Validates an 18-digit policy number
		  const pincodeRegex = /^\d{6}$/; // Validates a 6-digit pincode
		  const panNumberRegex = /^[A-Z]{5}\d{4}[A-Z]{1}$/; // Validates a PAN number
		  const passportRegex = /^[A-Z]{1}\d{7}$/; // Validates a passport number (1 letter followed by 7 digits)
		  const vehicleRegex = /\b[a-z]{2}\d{2}[a-z]{2}\d{4}\b/i; // Validates vehicle registration number
		  const vehicleRegex2 = /^\d{2}[a-zA-Z]{2}\d{4}[a-zA-Z]$/; // Validates 23BH2525C pattern // pallavi azure 13_02_2025
           	  // let removeSpaces = text.replace(/\s/g, "");
		  let removeSpaces = text.replace(/[\s,.-]/g, ""); //Navya validation for Edge Browser
		  text = text.replace(phoneRegexInSentence, (match) => match.replace(/[-\s]/g, "")); // Matches a phone number in sentence 19_02_2025
		  if (vehicleRegex.test(removeSpaces)) {
		    return removeSpaces.replace(/(\w{2})(\d{2})(\w{2})(\d{4})/, "$1-$2-$3-$4");
		  }
	          // pallavi azure 13_02_2025
	          if (vehicleRegex2.test(removeSpaces)) {
	            return removeSpaces.replace(/(\d{2})([a-zA-Z]{2})(\d{4})([a-zA-Z])/, "$1-$2-$3-$4"); //pallavi
	          }
          	  // pallavi azure 13_02_2025
		  if (phoneRegex.test(removeSpaces)) {
		    return removeSpaces;
		  }
		  if (policyRegex.test(removeSpaces)) {
		    return removeSpaces;
		  }
		  if (pincodeRegex.test(removeSpaces)) {
		    return removeSpaces;
		  }
		  if (panNumberRegex.test(removeSpaces)) {
		    return removeSpaces;
		  }
		  if (passportRegex.test(removeSpaces)) {
		    return removeSpaces;
		  }
		  return text.replace(/\.$/g, ''); // Removes a trailing period if no match
		}
            //hoonartek kore customization for mic on off
            function sortSpeakText(speakText,obj){
                let text = speakText;
                console.log("obj",obj)
                if(!speakText){
                    let payload =obj.message[0].component.payload
                    let type = payload.template_type ?? null
                    let formdata = obj.message[0].component.formData
                    text = obj.message[0].cInfo.body
                    window.formvalue = false; // pallavi azure 13_02_2025
                    // pallavi azure 13_02_2025
                    if(formdata){  
                        window.formvalue = true; 
                        console.log("window.formvalue", window.formvalue);
                        var formcounter = false;
                        if (text.includes("click on")) {
                            text = "Please click on the button and fill the form manually";
                            formcounter = true;
                        }
                        if (text.includes("click below")) {
                            text = "Please click on the button and fill the form manually";
                            formcounter = true;
                        }
                        if (text.includes("filling out the form")) {
                            text = "Please click on the button and fill the form manually";
                            formcounter = true;
                        } 
                        if(!formcounter){
                            text = "Please fill out the form manually"
                        }           
                    }
                    else{
                    switch (type) {
                        case 'quick_replies':
                            let text_quick_replies = payload.quick_replies.map(item => item.title).join(', ');
                            text += ` Options  ${text_quick_replies}`   // Pallavi added space in Options for dot issue 27_02_2025
                            break;
                        case 'button':
                            let text_button = payload.buttons.map(item => item.title).join(', ');
                            text += ` Options  ${text_button}`
                            break;
                        case 'dropdown_template':
                            // let text_dropdown_template = payload.buttons.map(item => item.title).join(', ');
                            // text += `Options  ${text_dropdown_template}`
                            text = 'Please select the value manually'
                            break;
                        case 'multi_select':
                            text = 'Please select the options manually'
                            break
                        case 'dateTemplate':
                            text = 'Please select the options manually'
                            break 
                        case 'healthAddonTemplate':
                            text = 'Please select the options manually'
                            break
                        case 'checkBoxesTemplate':
                            text = 'Please select the options manually'
                            break 
                        case 'calendarDropdown':
                            text = 'Please select the options manually'
                            break
                        case 'carousel':
                            text = 'Please select the options manually'
                            break 
                        case 'countryDropdownTemplate':
                            text = 'Please select the options manually'
                            break
                        case 'insuranceTemplate':
                            text = 'Please select the options manually'
                            break
                        default:
                            break;
                    	}
		     } //end else
                }
                else{
		//hoonartek kore customization for mic on off - enter pan card manually
		    // pallavi pan commented 07_03_2025
                    // const pancard = "PAN for KYC purpose"
                    // // const words = text.split(/\s+/); // Split by spaces
                    // if(text.includes(pancard)){
                    //     text = 'Please enter the Pan Card Number Manually'
                    // }
		    // pallavi pan commented 07_03_2025
                    console.log("This is text ")
                }
		// pallavi date 20_02_2025
                // Convert all date formats to readable format
                text = text.replace(/\b(\d{2})[\/-](\d{2})[\/-](\d{4})\b|\b(\d{4})[\/-](\d{2})[\/-](\d{2})\b/g, (match, day, month, year, y1, m1, d1) => {
                    let finalDay = day || d1;
                    let finalMonth = month || m1;
                    let finalYear = year || y1;
                    return formatDate(finalDay, finalMonth, finalYear);
                });

                function formatDate(day, month, year) {
                    const months = [
                        "January", "February", "March", "April", "May", "June",
                        "July", "August", "September", "October", "November", "December"
                    ];

                    let daySuffix = (d) => {
                        if (d > 3 && d < 21) return "th"; 
                        switch (d % 10) {
                            case 1: return "st";
                            case 2: return "nd";
                            case 3: return "rd";
                            default: return "th";
                        }
                    };

                    let formattedDay = `${parseInt(day)}${daySuffix(parseInt(day))}`;
                    let formattedMonth = months[parseInt(month) - 1];
                    let formattedYear = convertYearToWords(year);

                    return `${formattedDay} ${formattedMonth} ${formattedYear}`;
                }

                function convertYearToWords(year) {
                    const yearNum = parseInt(year);
                    if (yearNum < 2000) return numberToWords(yearNum);
                    
                    const firstPart = yearNum.toString().substring(0, 2);
                    const lastPart = yearNum.toString().substring(2, 4);
                    
                    return `two thousand ${numberToWords(parseInt(lastPart))}`;
                }

                function numberToWords(num) {
                    const ones = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
                    const teens = ["", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
                    const tens = ["", "ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

                    if (num < 10) return ones[num];
                    if (num < 20) return teens[num - 10];
                    if (num % 10 === 0) return tens[Math.floor(num / 10)];
                    return `${tens[Math.floor(num / 10)]} ${ones[num % 10]}`;
                }
                // pallavi date 20_02_2025
                // pallavi azure 13_02_2025
                if (text.includes("please provide your 10-digit registered mobile number in the following format")) {
                    text = "Dear customer, please provide your 10-digit registered mobile number in given format";
                }
		if (text.includes("PAN - XXXXXXXXXX is not valid and not found in the records")) {
                    text = "Your enter PAN is not valid and not found in the records";
                }
		if (text.includes("Cancer / Leukemia / Malignant Tumor, Cardiac ailments, COPD, HIV /AIDS, Insulin Dependent Diabetes, Kidney Ailment, Liver Disease, Neurological Disorder / Stroke /Paralysis, Thalassemia")) {
                    text = "Is any of the traveller suffering from any of following critical pre-existing medical conditions? [Cancer or Leukemia or Malignant Tumor, Cardiac ailments, COPD, HIV or AIDS, Insulin Dependent Diabetes, Kidney Ailment, Liver Disease, Neurological Disorder or Stroke or Paralysis, Thalassemia]";
                }
		if (text.includes("please share your Date of Birth (DD-MM-YYYY) to complete the KYC")) {
                    text = "Thanks! Now, please share your Date of Birth in day, month, year format to complete the KYC";
                }
		if (text.includes("Does any of the insured member/members have an existing illness or health condition")) {
                    text = "Does any of the insured member or members have an existing illness or health condition";
                }
		if (text.includes("Please provide the accident date in DD/MM/YY format")) {
                    text = "Please provide the accident date in day, month, year format";
                }
		if (text.includes("Please provide the date of admission in DD/MM/YY format")) {
                    text = "Please provide the date of admission in day, month, year format";
                }
		if (text.includes("I'm sorry, I am unable to recognize the date you entered. Please enter the date again, in the YYYY-MM-DD or MM-DD-YYYY form")) {
                    text = "I'm sorry, I am unable to recognize the date you entered. Please enter the date again, in the year, month, day or month, day, year format.";
                }
		
                // pallavi azure 13_02_2025
		// Remove bold formatting markers
                text = text.replace(/<\/?b>/g, '');  // Remove <b> and </b> tags
                text = text.replace(/\*\*(.*?)\*\*/g, '$1'); // Remove double asterisks (bold markdown)
                text = text.replace(/\*(.*?)\*/g, '$1'); // Remove single asterisk (italic markdown)

		// pallavi 07_03_2025
		// Convert "2nd" to "second" and "3rd" to "third"
    		text = text.replace(/\b2nd\b/g, "second").replace(/\b3rd\b/g, "third");
    		// Convert "DD/MM/YYYY" to "day, month, year"
    		text = text.replace(/\bDD\/MM\/YYYY\b/g, "day, month, year");
		text = text.replace(/\b(\w+)\/(\w+)\b/g, "$1 OR $2");
		// pallavi 07_03_2025
		    
                //hoonartek kore customization for mic on off new
                text = text.replace(/₹\s?(\d{1,3}(?:,\s?\d{3})*)\/-/g, (match, p1) => { 	// for rupees
                        return `rupees ${p1.replace(/,\s*/g, '')}`;
                        }).replace(/<\/?b>/g, '')
                        // text = text.replace(/\b\d{6,7}\b/g, match => readDigitsSeparately(match));
		    	text = text.replace(/\b\d{6,7}\b|\b\d{10}\b/g, match => readDigitsSeparately(match)); //phone number reading seperately 19_02_2025
                        text = text.replace(/\b\d{18}\b/g, match => readDigitsSeparately(match)); //policy number read sep
		    	text = text.replace(/[🙂✅🧑‍🤝‍🧑⬅️😄😊✈️🚗]/g, '', match => readDigitsSeparately(match)); //for emoji prompt
                text = text.replace(/\//g, ' '); // pallavi azure 13_02_2025
                text = text.replace(/\be\.g\./gi, 'Example'); // pallavi azure 13_02_2025
		text = text.replace(/\bno\.\b/gi, 'number'); // pallavi no. number 19_02_2025
                return text;
                //hoonartek kore customization for mic on off
            }
            //hoonartek kore customization for mic on off ends
		
            function xssAttack(txtStr) {
                //   if (compObj && compObj[0] && compObj[0].componentType === "text") {

                var textHasXSS;
                if (txtStr) {
                    textHasXSS = chatInitialize.isNotAllowedHTMLTags(txtStr);
                }
                if (textHasXSS && !textHasXSS.isValid) {
                    txtStr = chatInitialize.escapeHTML(txtStr);
                }
                return txtStr;
                //return compObj[0].componentBody;

            }
            function sanitizeXSS(input) {
                var sanitizedInput = input
                                          .replace(/</g, "&lt;")
                                          .replace(/>/g, "&gt;")
                                          .replace(/"/g, "&quot;")
                                          .replace(/'/g, "&#x27;")
                                          .replace(/\//g, "&#x2F;")
                                          .replace(/\(/g, "&#40;")
                                          .replace(/\)/g, "&#41;");
                return sanitizedInput;
              }

            var helpers = {
                'nl2br': function (str, runEmojiCheck) {
                    if (runEmojiCheck) {
                        str = window.emojione.shortnameToImage(str);
                    }
                    str = str.replace(/(?:\r\n|\r|\n)/g, '<br />');
                    return str;
                },
                'br2nl': function (str) {
                    str = str.replace(/<br \/>/g, '\n');
                    return str;
                },
                // 'formatAMPM': function (date) {
                //     var hours = date.getHours();
                //     var minutes = date.getMinutes();
                //     var seconds = date.getSeconds();
                //     var ampm = hours >= 12 ? 'pm' : 'am';
                //     hours = hours % 12;
                //     hours = hours ? hours : 12; // the hour '0' should be '12'
                //     minutes = minutes < 10 ? '0' + minutes : minutes;
                //     seconds = seconds < 10 ? '0' + seconds : seconds;
                //     var strTime = hours + ':' + minutes + ':' + seconds + ' ' + ampm;
                //     return strTime;
                // },
		//Anurag - 04/02/2025
                'formatAMPM': function (date) {
                    var hours = date.getHours();
                    var minutes = date.getMinutes();
                    var seconds = date.getSeconds();
                    var ampm = hours >= 12 ? 'pm' : 'am';
                    hours = hours % 12;
                    hours = hours ? hours : 12; // the hour '0' should be '12'
                    minutes = minutes < 10 ? '0' + minutes : minutes;
                    // seconds = seconds < 10 ? '0' + seconds : seconds;
                    // var strTime = hours + ':' + minutes + ':' + seconds + ' ' + ampm;
                    var strTime = hours + ':' + minutes + ' ' + ampm;
                    return strTime;
                },
                // 'formatDate': function (date) {
                //     var d = new Date(date);
                //     if (isNaN(d.getTime())) {
                //         var _tmpDate = new Date().getTime();
                //         d = new Date(_tmpDate);
                //     }
                //     return d.toDateString() + " at " + helpers.formatAMPM(d);
                // },

		// pallavi time added on 07_02_2025
		'formatDate': function (date) {
                    var d = new Date(date);
                    if (isNaN(d.getTime())) {
                        var _tmpDate = new Date().getTime();
                        d = new Date(_tmpDate);
                    }
                    console.log("msgData", msgData);
                    firsttext = msgData.message[0].cInfo.body;
                    console.log("firsttext", firsttext);
                    if (firsttext.includes("I am your friendly assistant")) {
                        return d.toDateString() + " at " + helpers.formatAMPM(d);
                    }
                    else{
                        return helpers.formatAMPM(d);
                    }
                },
		// pallavi time added on 07_02_2025
		    
                'convertMDtoHTML': function (val, responseType,msgItem) {
                    if(typeof val==='object'){
                        try {
                            val=JSON.stringify(val);
                        } catch (error) {
                            val="";
                        }
                    }
                    var hyperLinksMap = {};
                    var mdre = {};
                    if(msgItem && msgItem.cInfo && msgItem.cInfo.ignoreCheckMark){
                        var ignoreCheckMark=msgItem.cInfo.ignoreCheckMark;
                    }
                    //mdre.date = new RegExp(/\\d\(\s*(.{10})\s*\)/g);
                    mdre.date = new RegExp(/\\d\(\s*(.{10})\s*(?:,\s*["'](.+?)["']\s*)?\)/g);
                    mdre.time = new RegExp(/\\t\(\s*(.{8}\.\d{0,3})\s*\)/g);
                    //mdre.datetime = new RegExp(/\\dt\(\s*(.{10})[T](.{12})([z]|[Z]|[+-]\d{4})\s*\)/g);
                    mdre.datetime = new RegExp(/\\(d|dt|t)\(\s*([-0-9]{10}[T][0-9:.]{12})([z]|[Z]|[+-]\d{4})[\s]*,[\s]*["']([a-zA-Z\W]+)["']\s*\)/g);
                    mdre.num = new RegExp(/\\#\(\s*(\d*.\d*)\s*\)/g);
                    mdre.curr = new RegExp(/\\\$\((\d*.\d*)[,](\s*[\"\']\s*\w{3}\s*[\"\']\s*)\)|\\\$\((\d*.\d*)[,](\s*\w{3}\s*)\)/g);

                    var regEx = {};
                    regEx.SPECIAL_CHARS = /[\=\`\~\!@#\$\%\^&\*\(\)_\-\+\{\}\:"\[\];\',\.\/<>\?\|\\]+/;
                    regEx.EMAIL = /^[-a-z0-9~!$%^&*_=+}{\']+(\.[-a-z0-9~!$%^&*_=+}{\']+)*@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,255})+$/i;
                    regEx.MENTION = /(^|\s|\\n|")@([^\s]*)(?:[\s]\[([^\]]*)\])?["]?/gi;
                    regEx.HASHTAG = /(^|\s|\\n)#(\S+)/g;
                    regEx.NEWLINE = /\n/g;
                    var _regExForLink = /((?:http\:\/\/|https\:\/\/|www\.)+\S*\.(?:(?:\.\S)*[^\,\s\.])*\/?)/gi;
                    // var _regExForMarkdownLink = /\[([^\]]+)\](|\s)+\(([^\)])+\)/g;
                    var _regExForMarkdownLink = /\[([^\]]+)\](|\s)\((?:[^)(]+|\((?:[^)(]+|\([^)(]*\))*\))*\)?/g;
                    var str = val || '';
                    var mmntns = {};
                    mmntns.sd = new RegExp(/^(d{1})[^d]|[^d](d{1})[^d]/g);
                    mmntns.dd = new RegExp(/^(d{2})[^d]|[^d](d{2})[^d]/g);
                    mmntns.fy = new RegExp(/(y{4})|y{2}/g);
                    var regexkeys = Object.keys(mdre);
                    function matchmap(regexval, stringval) {
                        var da;
                        var matches = [];
                        while ((da = regexval.exec(stringval)) !== null) {
                            var keypair = {};
                            keypair.index = da.index;
                            keypair.matchexp = da[0];
                            if (da.length > 1) {
                                for (var n = 1; n < da.length; n++) {
                                    var mstr = "matchval" + n.toString();
                                    keypair[mstr] = da[n];
                                }
                            }
                            matches.push(keypair);
                        }
                        return matches;
                    }
                    function ucreplacer(match) {
                        return match.toUpperCase();
                    }
                    for (var j = 0; j < regexkeys.length; j++) {
                        var k;
                        switch (regexkeys[j]) {
                            case 'date':
                                var strvald = str;
                                var datematcharray = matchmap(mdre.date, strvald);
                                if (datematcharray.length) {
                                    for (k = 0; k < datematcharray.length; k++) {
                                        //var fdate = moment(datematcharray[k].matchval).format('DD,dd,MM,YYY');
                                        var fdate = new Date(datematcharray[k].matchval1).toLocaleDateString();
                                        fdate = ' ' + fdate.toString() + ' ';
                                        str = str.replace(datematcharray[k].matchexp.toString(), fdate);
                                    }
                                }
                                break;
                            case 'time':
                                var strvalt = str;
                                var timematcharray = matchmap(mdre.time, strvalt);
                                if (timematcharray.length) {
                                    for (k = 0; k < timematcharray.length; k++) {
                                        var ftime = new Date(timematcharray[k].matchval1).toLocaleTimeString();
                                        ftime = ' ' + ftime.toString() + ' ';
                                        str = str.replace(timematcharray[k].matchexp.toString(), ftime);
                                    }
                                }
                                break;
                            case 'datetime':
                                var strvaldt = str;
                                var dtimematcharray = matchmap(mdre.datetime, strvaldt);
                                if (dtimematcharray.length) {
                                    for (k = 0; k < dtimematcharray.length; k++) {
                                        var ms = '';
                                        var mergekeylength = Object.keys(dtimematcharray[k]).length - 2;
                                        for (var l = 2; l < mergekeylength; l++) {
                                            var keystr = "matchval" + l.toString();
                                            ms += dtimematcharray[k][keystr];
                                        }
                                        var foptionstring = "matchval" + mergekeylength.toString();
                                        var fmtstr = dtimematcharray[k][foptionstring];
                                        fmtstr = fmtstr.replace(mmntns.fy, ucreplacer);
                                        fmtstr = fmtstr.replace(mmntns.dd, ucreplacer);
                                        fmtstr = fmtstr.replace(mmntns.sd, ucreplacer);
                                        //var fdtime = new Date(dtimematcharray[k].matchval).toLocaleString();
                                        var fdtime = moment(ms).format(fmtstr);
                                        fdtime = ' ' + fdtime.toString() + ' ';
                                        str = str.replace(dtimematcharray[k].matchexp.toString(), fdtime);
                                    }
                                }
                                break;
                            case 'num':
                                var strnumval = str;
                                var nummatcharray = matchmap(mdre.num, strnumval);
                                if (nummatcharray.length) {
                                    for (k = 0; k < nummatcharray.length; k++) {
                                        var fnum = Number(nummatcharray[k].matchval1).toLocaleString();
                                        fnum = ' ' + fnum.toString() + ' ';
                                        str = str.replace(nummatcharray[k].matchexp.toString(), fnum);
                                    }
                                }
                                break;
                            case 'curr':
                                var strcurval = str;
                                var currmatcharray = matchmap(mdre.curr, strcurval);
                                var browserLang = window.navigator.language || window.navigator.browserLanguage;
                                var curcode = new RegExp(/\w{3}/);
                                if (currmatcharray.length) {
                                    for (k = 0; k < currmatcharray.length; k++) {
                                        var currops = {}, fcode;
                                        currops.style = 'currency';
                                        if (currmatcharray[k].matchval2) {
                                            fcode = curcode.exec(currmatcharray[k].matchval2);
                                        }
                                        currops.currency = fcode[0].toString();
                                        var fcurr = Number(currmatcharray[k].matchval1).toLocaleString(browserLang, currops);
                                        //check for browser support if browser doesnot suppor we get the same value back and we append the currency Code
                                        if (currmatcharray[k].matchval1.toString() === fcurr.toString()) {
                                            fcurr = ' ' + fcurr.toString() + ' ' + currops.currency;
                                        } else {
                                            fcurr = ' ' + fcurr.toString() + ' ';
                                        }
                                        str = str.replace(currmatcharray[k].matchexp.toString(), fcurr);
                                    }
                                }
                                break;
                        }
                    }
                    function nextLnReplacer(match, p1, offset, string) {
                        return "<br/>";
                    }
                    function ignoreWords(str) {
                        var _words = ['onclick', 'onmouse', 'onblur', 'onscroll', 'onStart'];
                        _words.forEach(function (word) {
                            var regEx = new RegExp(word, "ig");
                            str = str.replace(regEx, "");
                        });
                        return str;
                    }
                    var nextln = regEx.NEWLINE;
                    function linkreplacer(match, p1, offset, string) {
                        var dummyString = string.replace(_regExForMarkdownLink, '[]');
                        dummyString = ignoreWords(dummyString);
                        if (dummyString.indexOf(match) !== -1) {
                            var _link = p1.indexOf('http') < 0 ? 'http://' + match : match, _target;
                            //_link = encodeURIComponent(_link);
                            target = "target='underscoreblank'";
                            if (hyperLinksMap) {
                                var _randomKey = "korerandom://" + Object.keys(hyperLinksMap).length;
                                hyperLinksMap[_randomKey] = _link;
                                _link = _randomKey;
                            }
                            return "<span class='isLink'><a id='linkEvent'" + _target + " href=\"" + _link + "\">" + match + "</a></span>";
                        } else {
                            return match;
                        }
                    }
                    //check for whether to linkify or not
                    // try {
                    //     str = decodeURIComponent(str);
                    // } catch (e) {
                    //     str = str || '';
                    // }
                    if(typeof str === 'number'){
                        str =  str.toString(); 
                    }
                    str = str || '';
                    
                    var newStr = '', wrapper1;
                    if (responseType === 'user') {
                        // str = sanitizeXSS(str);
                        // str = str.replace(/onerror=/gi, '');
                        // str = str.replace(/onmouseover=/gi, '');
                        str = DOMPurify.sanitize(str,{ ALLOWED_TAGS: ['a','b','br'] ,  ADD_TAGS: ['iframe']})
                        wrapper1 = document.createElement('div');
                        newStr = str.replace(/“/g, '\"').replace(/”/g, '\"');
                        newStr = newStr.replace(/</g, '&lt;').replace(/>/g, '&gt;');
                        wrapper1.innerHTML = xssAttack(newStr);
                        if ($(wrapper1).find('a').attr('href')) {
                            str = newStr;
                        } else {
                            str = newStr.replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(_regExForLink, linkreplacer);
                        }
                    } else {
                        // str = sanitizeXSS(str);
                        // str = str.replace(/onerror=/gi, '');
                        // str = str.replace(/onmouseover=/gi, '');
                        str = DOMPurify.sanitize(str,{  ALLOWED_TAGS: ['a','b','br'] , ADD_TAGS: ['iframe']})
                        wrapper1 = document.createElement('div');
                        //str = str.replace(/&lt;/g, '<').replace(/&gt;/g, '>');
                        wrapper1.innerHTML = xssAttack(str);
                        if ($(wrapper1).find('a').attr('href') || $(wrapper1).find('b') || $(wrapper1).find('br')) {
                            var linkArray = str.match(/<a[^>]*>([^<]+)<\/a>/g);
                            if (linkArray) {
                                for (var x = 0; x < linkArray.length; x++) {
                                    var _newLA = document.createElement('div');
                                    var _detectedLink=linkArray[x];
                                    _newLA.innerHTML = linkArray[x];
                                    //for mailto: links, new line character need to be repaced with %0A 
                                    if (_detectedLink.indexOf("href='mailto:") > -1 || _detectedLink.indexOf('href="mailto:') > -1) {
                                        _detectedLink = _detectedLink.split('\n').join("%0A")
    
                                    }
                                    var _randomKey = "korerandom://" + Object.keys(hyperLinksMap).length;
                                    _newLA.innerHTML = _detectedLink;
    
                                    var _aEle = _newLA.getElementsByTagName('a');
                                    if (_aEle && _aEle[0] && _aEle[0].href) {
                                        hyperLinksMap[_randomKey] = _aEle[0].href;
                                        _aEle[0].href = _randomKey;
                                    }
                                    $(_newLA).find('a').attr('target', 'underscoreblank');
                                    str = str.replace(linkArray[x], _newLA.innerHTML);
                                }
                            }
                        } else {
                            str = wrapper1.innerHTML.replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(_regExForLink, linkreplacer);
                        }
                    }
                    if(ignoreCheckMark){
                        str=val;
                    }else{
                    str = helpers.checkMarkdowns(str, hyperLinksMap);
                    }
                    var hrefRefs = Object.keys(hyperLinksMap);
                    if (hrefRefs && hrefRefs.length) {
                        hrefRefs.forEach(function (hrefRef) {
                            function customStrReplacer() { //custom replacer is used as by default replace() replaces with '$' in place of '$$'
                                return hyperLinksMap[hrefRef];
                            }
                            str = str.replace(hrefRef, customStrReplacer);
                        });
                    }
                    str = chatInitialize.koreReplaceAll(str,'target="underscoreblank"', 'target="_blank"');
                    // str = str.koreReplaceAll("target='underscoreblank'", 'target="_blank"');
                    // if (responseType === 'user') {
                        // str = str.replace(/abc-error=/gi, 'onerror=');
                    // }
                    str = DOMPurify.sanitize(str,{  ADD_TAGS: ['iframe']})
                    return helpers.nl2br(str, true);
                },
                'checkMarkdowns': function (val, hyperLinksMap) {
                    if(val===''){
                        return val;
                    }
                    var txtArr = val.split(/\r?\n/);
                    for (var i = 0; i < txtArr.length; i++) {
                        var _lineBreakAdded = false;
                        if (txtArr[i].indexOf('#h6') === 0 || txtArr[i].indexOf('#H6') === 0) {
                            txtArr[i] = '<h6>' + txtArr[i].substring(3) + '</h6>';
                            _lineBreakAdded = true;
                        } else if (txtArr[i].indexOf('#h5') === 0 || txtArr[i].indexOf('#H5') === 0) {
                            txtArr[i] = '<h5>' + txtArr[i].substring(3) + '</h5>';
                            _lineBreakAdded = true;
                        } else if (txtArr[i].indexOf('#h4') === 0 || txtArr[i].indexOf('#H4') === 0) {
                            txtArr[i] = '<h4>' + txtArr[i].substring(3) + '</h4>';
                            _lineBreakAdded = true;
                        } else if (txtArr[i].indexOf('#h3') === 0 || txtArr[i].indexOf('#H3') === 0) {
                            txtArr[i] = '<h3>' + txtArr[i].substring(3) + '</h3>';
                            _lineBreakAdded = true;
                        } else if (txtArr[i].indexOf('#h2') === 0 || txtArr[i].indexOf('#H2') === 0) {
                            txtArr[i] = '<h2>' + txtArr[i].substring(3) + '</h2>';
                            _lineBreakAdded = true;
                        } else if (txtArr[i].indexOf('#h1') === 0 || txtArr[i].indexOf('#H1') === 0) {
                            txtArr[i] = '<h1>' + txtArr[i].substring(3) + '</h1>';
                            _lineBreakAdded = true;
                        } else if (txtArr[i].length === 0) {
                            txtArr[i] = '\r\n';
                            _lineBreakAdded = true;
                        } else if (txtArr[i].indexOf('*') === 0) {
                            if (!isEven(txtArr[i].split('*').length - 1)) {
                                txtArr[i] = '\r\n&#9679; ' + txtArr[i].substring(1);
                                _lineBreakAdded = true;
                            }
                        }  else if (txtArr[i].indexOf('>>') === 0) {
                            if(txtArr[i].substring(2).indexOf('*') === 0){
                                if (!isEven(txtArr[i].substring(2).split('*').length - 1)) {
                                    txtArr[i] = '&#9679; ' + txtArr[i].substring(3);
                                    _lineBreakAdded = true;
                                }
                                txtArr[i] = '<p class="indent">' + txtArr[i] + '</p>';
                            }else{
                            txtArr[i] = '<p class="indent">' + txtArr[i].substring(2) + '</p>';
                            }
                            _lineBreakAdded = true;
                        } else if (txtArr[i].indexOf('&gt;&gt;') === 0) {
                            if(txtArr[i].substring(8).indexOf('*') === 0){ // add ">>*" for sub bullet point 
                                if (!isEven(txtArr[i].substring(8).split('*').length - 1)) {
                                    txtArr[i] = '&#9679; ' + txtArr[i].substring(9);
                                    _lineBreakAdded = true;
                                }
                                txtArr[i] = '<p class="indent">' + txtArr[i] + '</p>';
                            }else{
                                multipleIndentation(txtArr, i); // For multiple indentations Ex: >>>>>Indent = "  >Indent"
                            }
                            _lineBreakAdded = true;
                        } else if (txtArr[i].indexOf('---') === 0 || txtArr[i].indexOf('___') === 0) {
                            txtArr[i] = '<hr/>' + txtArr[i].substring(3);
                            _lineBreakAdded = true;
                        }
                        var j;
                        // Matches Image markup ![test](http://google.com/image.png)
                        if (txtArr[i].indexOf(' ![') === -1) {// replace method trimming last'$' character, to handle this adding ' ![' extra space
                            txtArr[i] = txtArr[i].replace('![', ' ![');
                        }
                        var _matchImage = txtArr[i].match(/\!\[([^\]]+)\](|\s)+\(([^\)])+\)/g);
                        if (_matchImage && _matchImage.length > 0) {
                            for (j = 0; j < _matchImage.length; j++) {
                                var _imgTxt = _matchImage[j].substring(2, _matchImage[j].indexOf(']'));
                                var remainingString = _matchImage[j].substring(_matchImage[j].indexOf(']') + 1).trim();
                                var _imgLink = remainingString.substring(1, remainingString.indexOf(')'));
                                if (hyperLinksMap) {
                                    var _randomKey = "korerandom://" + Object.keys(hyperLinksMap).length;
                                    hyperLinksMap[_randomKey] = _imgLink;
                                    _imgLink = _randomKey;
                                }
                                _imgLink = '<img src="' + _imgLink + '" alt="' + _imgTxt + '">';
                                var _tempImg = txtArr[i].split(' ');
                                for (var k = 0; k < _tempImg.length; k++) {
                                    if (_tempImg[k] === _matchImage[j]) {
                                        _tempImg[k] = _imgLink;
                                    }
                                }
                                txtArr[i] = _tempImg.join(' ');
                                txtArr[i] = txtArr[i].replace(_matchImage[j], _imgLink);
                            }
                        }
                        // Matches link markup [test](http://google.com/)
                        //var _matchLink = txtArr[i].match(/\[([^\]]+)\](|\s)+\(([^\)])+\)/g);
                        var _matchLink = txtArr[i].match(/\[([^\]]+)\](|\s)\((?:[^)(]+|\((?:[^)(]+|\([^)(]*\))*\))*\)/g);
                        if (_matchLink && _matchLink.length > 0) {
                            for (j = 0; j < _matchLink.length; j++) {
                                var _linkTxt = _matchLink[j].substring(1, _matchLink[j].indexOf(']'));
                                var remainingString = _matchLink[j].substring(_matchLink[j].indexOf(']') + 1).trim();
                                var _linkLink = remainingString.substring(1, remainingString.lastIndexOf(')'));
                                _linkLink = _linkLink.replace(/\\n/g, "%0A");
                                if (hyperLinksMap) {
                                    var _randomKey = "korerandom://" + Object.keys(hyperLinksMap).length;
                                    hyperLinksMap[_randomKey] = _linkLink;
                                    _linkLink = _randomKey;
                                }
                                _linkLink = '<span class="isLink"><a id="linkEvent" href="' + _linkLink + '" target="underscoreblank">' + helpers.checkMarkdowns(_linkTxt) + '</a></span>';
                                txtArr[i] = txtArr[i].replace(_matchLink[j], _linkLink);
                            }
                        }
                        // Matches bold markup *test* doesnot match * test *, * test*. If all these are required then replace \S with \s
                        var _matchAstrik = txtArr[i].match(/\*\S([^*]*?)\*/g);
                        if (_matchAstrik && _matchAstrik.length > 0) {
                            for (j = 0; j < _matchAstrik.length; j++) {
                                var _boldTxt = _matchAstrik[j];
                                var validBoldGroup = true;
                                if(chatInitialize.includes(_boldTxt,'*')){
                                    var _tempStr = _boldTxt.replace(/\*/g,'');
                                    // var letterNumber = /^[0-9a-zA-Z!@#$%^&()_ +\-=\[\]{};':"\\|,.<>\/?]+$/;
                                    if (!(_tempStr && _tempStr.length)) {
                                        validBoldGroup = false;
                                    }
                                }
                                if(validBoldGroup){
                                    _boldTxt = _boldTxt.substring(1, _boldTxt.length - 1);
                                    _boldTxt = '<b>' + _boldTxt.trim() + '</b>';
                                    txtArr[i] = txtArr[i].replace(_matchAstrik[j], _boldTxt);
                                }
                            }
                        }
                        //For backward compatability who used ~ for Italics
                        //Matches italic markup ~test~ doesnot match ~ test ~, ~test ~, ~ test~. If all these are required then replace \S with \s
                        var _matchItalic = txtArr[i].match(/\~\S([^*]*?)\S\~/g);
                        if (_matchItalic && _matchItalic.length > 0) {
                            for (j = 0; j < _matchItalic.length; j++) {
                                var _italicTxt = _matchItalic[j];
                                if (txtArr[i].indexOf(_italicTxt) === 0 || txtArr[i][txtArr[i].indexOf(_italicTxt) - 1] === ' ' || txtArr[i].indexOf(_italicTxt) !== -1) {
                                    _italicTxt = _italicTxt.substring(1, _italicTxt.length - 1);
                                    _italicTxt = '<i class="markdownItalic">' + _italicTxt + '</i>';
                                    txtArr[i] = txtArr[i].replace(_matchItalic[j], _italicTxt);
                                }
                            }
                        }
                        // Matches italic markup _test_ doesnot match _ test _, _test _, _ test_. If all these are required then replace \S with \s
                            var _matchItalic = txtArr[i].match(/\_\S([^*]*?)\S\_/g);
                            if (_matchItalic && _matchItalic.length > 0) {
                                for (j = 0; j < _matchItalic.length; j++) {
                                    var _italicTxt = _matchItalic[j];
                                    if ((txtArr[i].indexOf(_italicTxt) === 0) || (txtArr[i][txtArr[i].indexOf(_italicTxt) - 1] === ' ') || txtArr[i].indexOf(_italicTxt) !== -1) {
                                    var validItalicMark = true;
                                        if(txtArr[i][txtArr[i].indexOf(_italicTxt) + _italicTxt.length]){
                                            if(txtArr[i][txtArr[i].indexOf(_italicTxt) + _italicTxt.length] !== ' '){
                                            validItalicMark = false;
                                            }
                                        }
                                        if(validItalicMark){
                                        _italicTxt = _italicTxt.substring(1, _italicTxt.length - 1) + ' ';
                                        _italicTxt = '<i class="markdownItalic">' + _italicTxt + '</i>';
                                        txtArr[i] = txtArr[i].replace(_matchItalic[j], _italicTxt);
                                        }
                                    }
                                }
                            }
                        // Matches bold markup ~test~ doesnot match ~ test ~, ~test ~, ~ test~. If all these are required then replace \S with \s
                        var _matchItalic = txtArr[i].match(/\~\S([^*]*?)\S\~/g);
                        if (_matchItalic && _matchItalic.length > 0) {
                            for (j = 0; j < _matchItalic.length; j++) {
                                var _italicTxt = _matchItalic[j];
                                if (txtArr[i].indexOf(_italicTxt) === 0 || txtArr[i][txtArr[i].indexOf(_italicTxt) - 1] === ' ' || txtArr[i].indexOf(_italicTxt) !== -1) {
                                    _italicTxt = _italicTxt.substring(1, _italicTxt.length - 1);
                                    _italicTxt = '<i class="markdownItalic">' + _italicTxt + '</i>';
                                    txtArr[i] = txtArr[i].replace(_matchItalic[j], _italicTxt);
                                }
                            }
                        }
                        // Matches bold markup ~test~ doesnot match ~ test ~, ~test ~, ~ test~. If all these are required then replace \S with \s
                        var _matchPre = txtArr[i].match(/\`\`\`\S([^*]*?)\S\`\`\`/g);
                        var _matchPre1 = txtArr[i].match(/\'\'\'\S([^*]*?)\S\'\'\'/g);
                        if (_matchPre && _matchPre.length > 0) {
                            for (j = 0; j < _matchPre.length; j++) {
                                var _preTxt = _matchPre[j];
                                _preTxt = _preTxt.substring(3, _preTxt.length - 3);
                                _preTxt = '<pre>' + _preTxt + '</pre>';
                                txtArr[i] = txtArr[i].replace(_matchPre[j], _preTxt);
                            }
                            _lineBreakAdded = true;
                        }
                        if (_matchPre1 && _matchPre1.length > 0) {
                            for (j = 0; j < _matchPre1.length; j++) {
                                var _preTxt = _matchPre1[j];
                                _preTxt = _preTxt.substring(3, _preTxt.length - 3);
                                _preTxt = '<pre>' + _preTxt + '</pre>';
                                txtArr[i] = txtArr[i].replace(_matchPre1[j], _preTxt);
                            }
                            _lineBreakAdded = true;
                        }
                        if (!_lineBreakAdded && i > 0) {
                            txtArr[i] = '\r\n' + txtArr[i];
                        }
                    }
                    val = txtArr.join('');
                    return val;
                }
            };

            function isEven(n) {
                n = Number(n);
                return n === 0 || !!(n && !(n % 2));
            }
            if (typeof Array.isArray === 'undefined') {
                Array.isArray = function (obj) {
                    return Object.prototype.toString.call(obj) === '[object Array]';
                }
            };
            var previousValue;
            function multipleIndentation(txtArr, i, value) {
                var indentIndex;
                var paragraphIndex;
                var actualValue;
                if (!value) {
                    previousValue = txtArr[i].substring(8);
                    txtArr[i] = '<div class="indent">' + txtArr[i].substring(8) + '</div>';
                } else {
                    txtArr[i] = '<div class="indent">' + txtArr[i] + '</div>';
                    if (previousValue.indexOf('&gt;&gt;') === -1) {
                        indentIndex = txtArr[i].indexOf("&gt;&gt;");
                        paragraphIndex = txtArr[i].indexOf("</div>");
                        actualValue = txtArr[i].slice(indentIndex, paragraphIndex);
                        txtArr[i] = txtArr[i].replace(actualValue, previousValue);
                    }
                }
                if (previousValue.indexOf('&gt;&gt;') === 0) {
                    previousValue = previousValue.substring(8);
                    multipleIndentation(txtArr, i, true);
                }
            }
            function extend() {
                var rec = function (obj) {
                    var recRes = {};
                    if (typeof obj === "object" && !Array.isArray(obj)) {
                        for (var key in obj) {
                            if (obj.hasOwnProperty(key)) {
                                if (typeof obj[key] === "object") {
                                    recRes[key] = rec(obj[key]);
                                } else {
                                    recRes[key] = obj[key];
                                }
                            }
                        }
                        return recRes;
                    } else {
                        return obj;
                    }
                }
                for (var i = 1; i < arguments.length; i++) {
                    for (var key in arguments[i]) {
                        if (arguments[i].hasOwnProperty(key)) {
                            if (typeof arguments[i][key] === "object") {
                                arguments[0][key] = rec(arguments[i][key]);
                            } else {
                                arguments[0][key] = arguments[i][key];
                            }
                        }
                    }
                }
                return arguments[0];
            }

            function chatWindow(cfg) {
                this.setPrivateVarToContext(this);
                isRecordingStarted = false;
                cfg.botOptions.test = false;
                this.config = {
                    "chatTitle": "Kore.ai Bot Chat",
                    "container": "body",
                    "allowIframe": false,
                    "botOptions": cfg.botOptions
                };
                koreAPIUrl = cfg.botOptions.koreAPIUrl;
                bearerToken = cfg.botOptions.bearer;
                //speechServerUrl = cfg.botOptions.speechSocketUrl;
                speechPrefixURL = cfg.botOptions.koreSpeechAPIUrl;
                ttsServerUrl = cfg.botOptions.ttsSocketUrl;
                userIdentity = cfg.botOptions.userIdentity;
                if (cfg.botOptions.recorderWorkerPath && cfg.botOptions.recorderWorkerPath.trim().length > 0) {
                    recorderWorkerPath = cfg.botOptions.recorderWorkerPath.trim();
                }
                if (cfg && cfg.chatContainer) {
                    delete cfg.chatContainer;
                }
                this.config = extend(this.config, cfg);
                this.reWriteWebHookURL(this.config)
                window._chatHistoryLoaded = false;
                this.init();
                updateOnlineStatus();
                addBottomSlider();
                window.addEventListener('online', updateOnlineStatus);
                window.addEventListener('offline', updateOnlineStatus);
                attachEventListener();
            }
            //converts v1 webhooks url to v2 automatically
            chatWindow.prototype.reWriteWebHookURL = function (chatConfig) {
                if (chatConfig.botOptions && chatConfig.botOptions.webhookConfig && chatConfig.botOptions.webhookConfig.apiVersion && chatConfig.botOptions.webhookConfig.apiVersion === 2) {
                    if (chatConfig.botOptions && chatConfig.botOptions.webhookConfig && chatConfig.botOptions.webhookConfig.webhookURL) {
                        chatConfig.botOptions.webhookConfig.webhookURL = chatConfig.botOptions.webhookConfig.webhookURL.replace('hooks', 'v2/webhook');
                    }
                }
            }
            // iframe of child window events //
            function attachEventListener(){
                // Create IE + others compatible event handler
                var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
                var eventer = window[eventMethod];
                var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";
                // Listen to message from child window
                eventer(messageEvent, function (e) {
                    if (e.data && e.data.event) {
                        var data = e.data;
                        switch (data.event) {
                            case 'formEvent':
                                formAction(e.data);
                                break;
                            default:
                                break;
                        }
                    }
                }, false);
            }
            function postMessageToChildIframes (iframe,postPayload) {
                if(iframe && iframe.length && iframe[0] && iframe[0].contentWindow && postPayload){
                    iframe[0].contentWindow.postMessage(
                        postPayload, '*'
                  );
                }
             };
        // iframe of child window events ends//

        // inline model for iframes starts here//
        function closeChatModal() {
            if ($('#chatBodyModal').length) {
                $('#chatBodyModal').hide();
            }
            $('.kore-chat-window').removeClass('modelOpen');
            try {
                if (koreAriaUtilis) {
                    koreAriaUtilis.closeDialog(document.getElementById('closeChatBodyModal'));
                }
            } catch (e) {
            }
        }
        function openModal(template, showClose){
            var chatBodyModal=  $('#chatBodyModal');
            var close = document.getElementsByClassName("closeChatBodyModal")[0];
                close.onclick = function () {
                    $('.kore-chat-window').removeClass('modelOpen');
                    var postPayload={
                        payload:{},
                        event : 'formEvent', // need to find another way to make it common ,giving a static value due to time constrain //
                        action : 'formCancel',
                        metaData:{},
                     }
                    var iframe = chatBodyModal.find('iframe');
                    postMessageToChildIframes(iframe,postPayload);
                }
            if(template){
                chatBodyModal.find('.closeChatBodyModal').css('display','none');
                chatBodyModal.find('.loading_form').css('z-index',999);
                if(chatBodyModal && chatBodyModal.length){
                    chatBodyModal.find('#chatBodyModalContent').empty();
                    chatBodyModal.find('#chatBodyModalContent').append(template);
                    chatBodyModal.show();
                    $('.kore-chat-window').addClass('modelOpen');
                }
                setTimeout(function(){
                    chatBodyModal.find('.loading_form').css('z-index',0);
                    if(showClose){
                        chatBodyModal.find('.closeChatBodyModal').css('display','block');
                   } else {
                       chatBodyModal.find('.closeChatBodyModal').css('display','none');
                     }
                },1500);
            } else {
                $('.kore-chat-window').removeClass('modelOpen');
                chatBodyModal.find('.closeChatBodyModal').css('display','none');
                setTimeout(function(){
                    chatBodyModal.find('#chatBodyModalContent').empty();
                },1000);
                closeChatModal();
            }
            }
        // inline model for iframes starts ends//

        // form event actions starts here //
        function formAction(event){
            if(event && event.action==='formSubmit'){
               openModal();
               if($('.kore-chat-body .uiformComponent').length){
                $('.kore-chat-body .uiformComponent').closest('.inlineIframeContainer').css('display', 'none');
               }
            } else if(event.action==='formCancel'){
                closeChatModal();
                if($('.kore-chat-body .uiformComponent').length){
                    $('.kore-chat-body .uiformComponent').closest('.inlineIframeContainer').css('display', 'none');
                   }
            } else if (event.action==='formClose'){
               openModal();
               if($('.kore-chat-body .uiformComponent').length){
                $('.kore-chat-body .uiformComponent').closest('.inlineIframeContainer').css('display', 'none');
               }
            }
        }
        chatWindow.prototype.renderWebForm = function (msgData, returnTemplate) {
            var me=this;
            if (msgData.message && msgData.message[0].component && msgData.message[0].component.payload && msgData.message[0].component.payload.formData) {
                msgData.renderType = msgData.message[0].component.payload.formData.renderType;
                msgData.message[0].component.payload.template_type = 'iframe';
                if (!returnTemplate && msgData.renderType === 'inline') {
                     this.renderMessage(msgData);
                } else {
                    var popupHtml = $(this.getChatTemplate("iframe")).tmpl({
                        'msgData': msgData,
                        'helpers': me.helpers,
                        "link_url": msgData.message[0].component.payload.formData.formLink
                    });
                    if (returnTemplate) {
                        return popupHtml;
                    } else {
                        openModal(popupHtml[0], true);
                    }
                }
    
            }
        }
        // form event actions ends here //
        function addBottomSlider(){
            $('.kore-chat-window').remove('.kore-action-sheet');
            var actionSheetTemplate='<div class="kore-action-sheet hide">\
            <div class="actionSheetContainer"></div>\
            </div>';
            $('.kore-chat-window').append(actionSheetTemplate);
            }
        function updateOnlineStatus() {
            if ("boolean" === typeof(navigator["onLine"])) {
                if (navigator.onLine) {
                    this.hideError();
                    if(bot && bot.RtmClient){
                            bot.getHistory({forHistorySync:true,limit:30});                           
                    }

                } else {
                    this.showError("You are currently offline")
                }
            }
        }

            chatWindow.prototype.resetPingMessage =function(){
                var me=this;
                clearTimeout(me._pingTimer);
                me._pingTimer = setTimeout(function () {
                    var messageToBot = {};
                    messageToBot["type"] = 'ping';
                    me.bot.sendMessage(messageToBot, function messageSent() {

                    });
                    me.resetPingMessage();
                }, me._pingTime);
            }
            window.onresize = function (event) {
                var me=chatInitialize;
                if (event.target === window) {
                     chatInitialize.setCollapsedModeStyles();
                    var _width = $('#chatContainer').width() - 480;
                    //$('.kore-chat-window').attr('style','left: '+_width+'+px');
                }
                if (($('.kore-chat-window').width() > 480) || (document.getElementsByClassName('kore-chat-window').length && document.getElementsByClassName('kore-chat-window')[0].classList.contains('expanded'))) {
                    var _koreChatWindowHeight = $('.kore-chat-window').width();
                    $('.carousel').attr('style', 'width: ' + (_koreChatWindowHeight - 85) + 'px !important');
                } else {
                    $('.carousel').attr('style', 'width: 300px !important');
                }
                for (var i = 0; i < carouselEles.length; i++) {
                    carouselEles[i].computeResize();
                }

                // handling quick replies
                var quickReplyDivs = document.querySelectorAll('.quickReplies');
                for (var i = 0; i < quickReplyDivs.length; i++) {
                    var btnsParentDiv = quickReplyDivs[i].querySelectorAll('.quick_replies_btn_parent');
                    var leftScrollBtn = quickReplyDivs[i].querySelectorAll('.quickreplyLeftIcon');
                    var rightScrollBtn = quickReplyDivs[i].querySelectorAll('.quickreplyRightIcon');
                    if (btnsParentDiv[0].hasChildNodes()) {
                        if (leftScrollBtn && leftScrollBtn.length && leftScrollBtn[0] && leftScrollBtn[0].classList) {
                            if (btnsParentDiv[0].scrollLeft > 0) {
                                leftScrollBtn[0].classList.remove('hide');
                            }
                            else {
                                leftScrollBtn[0].classList.add('hide');
                            }
                        }
                        if (rightScrollBtn && rightScrollBtn.length && rightScrollBtn[0] && rightScrollBtn[0].classList) {
                            if (btnsParentDiv[0].offsetWidth < btnsParentDiv[0].scrollWidth) {
                                rightScrollBtn[0].classList.remove('hide');
                            }
                            else {
                                rightScrollBtn[0].classList.add('hide');
                            }
                        }
                    }
                }

                /* Handling for full size table */
                if ($('.kore-chat-window').width() > 490) {
                    $(".accordionTable").each(function () {
                        if ($(this).hasClass("responsive")) {
                            $(this).addClass("hide")
                        }
                    });
                    $(".tablechartDiv").each(function () {
                        if (!$(this).hasClass("regular")) {
                            $(this).removeClass("hide")
                        }
                    });
                }
                else {
                    $(".accordionTable").each(function () {
                        if ($(this).hasClass("responsive")) {
                            $(this).removeClass("hide")
                        }
                    });
                    $(".tablechartDiv").each(function () {
                        if (!$(this).hasClass("regular")) {
                            $(this).addClass("hide")
                        }
                    });
                }
                /* Handling for table ends*/
                 /* Handling expand and collapse chat-container height */
                $(".chat-container").scrollTop($(".chat-container")[0].scrollHeight);
                if(me.chatPSObj && me.chatPSObj.update){
                    me.chatPSObj.update()
                }
                /* Handling expand and collapse chat-container height */
            };
            chatWindow.prototype.handleImagePreview = function () {
                var modal = document.getElementById('myModal');

                // Get the image and insert it inside the modal - use its "alt" text as a caption
                var img = document.getElementById('myImg');
                var modalImg = document.getElementById("img01");
                var captionText = document.getElementById("caption");
                if (document.querySelectorAll('.messageBubble img').length > 0) {
                    for (var i = 0; i < document.querySelectorAll('.messageBubble img').length; i++) {
                        var evt = document.querySelectorAll('.messageBubble img')[i];
                        evt.addEventListener('click', function (e) {
                            e.stopPropagation();
                            e.stopImmediatePropagation();
                            modal.style.display = "block";
                            var image = $(modal).find('.image-preview')[0];
                            modalImg.src = this.src;
                            captionText.innerHTML = this.alt;
                            var scale = 1,
                                panning = false,
                                pointX = 0,
                                pointY = 0,
                                start = { x: 0, y: 0 },
                                zoom = document.getElementById("zoom");

                            function setTransform(type) {
                                if (type) {
                                    $(image).find('.modal-content-imagePreview').css({ 'transform': 'scale(' + scale + ')' });
                                } else {
                                    $(image).find('.modal-content-imagePreview')[0].style.transform = "translate(" + pointX + "px, " + pointY + "px) scale(" + scale + ")";
                                }
                            }

                            image.onmousedown = function (e) {
                                e.preventDefault();
                                start = { x: e.clientX - pointX, y: e.clientY - pointY };
                                panning = true;
                            }

                            image.onmouseup = function (e) {
                                panning = false;
                            }

                            image.onmousemove = function (e) {
                                e.preventDefault();
                                if (!panning) {
                                    return;
                                }
                                pointX = (e.clientX - start.x);
                                pointY = (e.clientY - start.y);
                                setTransform();
                            }

                            image.onwheel = function (e) {
                                e.preventDefault();
                                var xs = (e.clientX - pointX) / scale,
                                    ys = (e.clientY - pointY) / scale,
                                    delta = (e.wheelDelta ? e.wheelDelta : -e.deltaY);
                                (delta > 0) ? (scale *= 1.2) : (scale /= 1.2);
                                pointX = e.clientX - xs * scale;
                                pointY = e.clientY - ys * scale;

                                setTransform('onwheen');
                            }
                        });
                    }
                }


                /*img.onclick = function(){
                    modal.style.display = "block";
                    modalImg.src = this.src;
                    captionText.innerHTML = this.alt;
                }*/

                // Get the <span> element that closes the modal
                var span = document.getElementsByClassName("closeImagePreview")[0];

                // When the user clicks on <span> (x), close the modal
                span.onclick = function () {
                    modal.style.display = "none";
                    $(modal).find('.modal-content-imagePreview').css({ 'transform': 'none' })
                }
            }
            chatWindow.prototype.isMobile = function() {
                try {
                    var isMobile = (/iphone|ipod|android|blackberry|fennec/).test(navigator.userAgent.toLowerCase()) || window.screen.width <= 480;
                    return isMobile;
                }
                catch (e) {
                    return false;
                }
            }
            chatWindow.prototype.setCollapsedModeStyles = function (){
                $('.kore-chat-window').css({left:$('body').width()-480,width:'480px'});
            }
            chatWindow.prototype.setLocalStoreItem = function (key,value){
                var me=this;
                var storage=me.getStoreTypeByKey(key);
                return window[storage].setItem(key,value);
            }
            chatWindow.prototype.getLocalStoreItem = function (key){
                var me=this;
                var storage=me.getStoreTypeByKey(key);
                return window[storage].getItem(key);
            }
            chatWindow.prototype.removeLocalStoreItem = function (key){
                var me=this;
                var storage=me.getStoreTypeByKey(key);
                return window[storage].removeItem(key);
            }
            chatWindow.prototype.getStoreTypeByKey = function (key){
                var me=this;
                var storage='localStorage';
                if(key==='kr-cw-uid'){
                    storage=me.config.multiPageApp.chatWindowStateStore;
                }else if(key==='kr-cw-uid'){
                    storage=me.config.multiPageApp.userIdentityStore;
                }
                return storage; 
            }
            chatWindow.prototype.init = function () {
                var me = this;
                me.initi18n();
                me.seti18n((me.config && me.config.i18n && me.config.i18n.defaultLanguage) || 'en');
                if(me.config && me.config.sendFailedMessage && me.config.sendFailedMessage.hasOwnProperty('MAX_RETRIES')){
                    sendFailedMessage.MAX_RETRIES=me.config.sendFailedMessage.MAX_RETRIES
                }
                if (me.config && me.config.maxReconnectionAPIAttempts) {
                    me.config.botOptions.maxReconnectionAPIAttempts = me.config.maxReconnectionAPIAttempts;
                }
                window.chatContainerConfig = me;
                me.config.botOptions.botInfo.name = this.escapeHTML(me.config.botOptions.botInfo.name);
                me._botInfo = me.config.botOptions.botInfo;
                me.config.botOptions.botInfo = { chatBot: me._botInfo.name, taskBotId: me._botInfo._id, customData: me._botInfo.customData, metaTags: me._botInfo.metaTags, tenanturl: me._botInfo.tenanturl };
                var tempTitle = me._botInfo.name;
                me.config.chatTitle = me.config.botMessages.connecting;
                if(me.config.multiPageApp && me.config.multiPageApp.enable){
                    var cwState=me.getLocalStoreItem('kr-cw-state');
                    var maintainContext=cwState?true:false;
                    if(maintainContext && me.getLocalStoreItem('kr-cw-uid')){
                        me.config.botOptions.userIdentity=userIdentity =me.getLocalStoreItem('kr-cw-uid');
                    }
                    me.config.botOptions.maintainContext = maintainContext;
                }
                me.config.userAgentIE = navigator.userAgent.indexOf('Trident/') !== -1;
                var mobileBrowserOpened = me.isMobile();
                if (mobileBrowserOpened) {
                    me.config.isSendButton = false; // pallavi azure 13_02_2025
                }
                me.config.ttsInterface = me.config.ttsInterface || 'webapi';
                me.loadHistory = me.config.loadHistory || false;
                me.historyLoading = me.loadHistory ? true : false;
                me.config.botOptions.loadHistory = me.config.loadHistory;
                me.config.botOptions.chatHistory=me.config.chatHistory;
                me.config.botOptions.handleError=me.config.handleError;
                me.config.botOptions.googleMapsAPIKey=me.config.googleMapsAPIKey;
                /* autoEnableSpeechAndTTS will on if and only if both tts and mic are enabled */
                if (me.config.isTTSEnabled && me.config.isSpeechEnabled && me.config.autoEnableSpeechAndTTS) {
                    me.isTTSOn = true;
                    setTimeout(function () {
                        $('.ttspeakerDiv').removeClass('ttsOff');
                    }, 350);
                }
                var chatWindowHtml = $(me.getChatTemplate()).tmpl(me.config);
                me.config.chatContainer = chatWindowHtml;
                me.updatei18nDirection();

                me.config.chatTitle = tempTitle;
                if(!me.config.minimizeMode){
                    me.bot.init(me.config.botOptions,me.config.messageHistoryLimit);
                    if (me.config.multiPageApp && me.config.multiPageApp.enable) {
                        me.setLocalStoreItem('kr-cw-state', 'open');
                        me.setLocalStoreItem('kr-cw-uid', me.config.botOptions.userIdentity);
                        setTimeout(function () {
                            if (cwState === 'minimized') {
                                $('.kore-chat-window button.minimize-btn').trigger('click');
                            }
                        }, 500);
                    }
                    
                }else{
                    chatWindowHtml.addClass('minimize');
                    chatWindowHtml.find('.minimized-title').html("Talk to " + me.config.chatTitle);
                    me.skipedInit=true;
                    if(me.config.multiPageApp && me.config.multiPageApp.enable && maintainContext){
                        setTimeout(function () {
                            if (cwState === 'open') {
                                $('.kore-chat-window .minimized .messages').trigger('click');
                            } else if (cwState === 'minimized') {
                                $('.kore-chat-window .minimized .messages').trigger('click');
                                $('.kore-chat-window button.minimize-btn').trigger('click');
                            }
                        }, 500);

                    }
                }
                if (me.config.allowLocation) {
                    me.bot.fetchUserLocation();
                }
                me.render(chatWindowHtml);
                me.unfreezeUIOnHistoryLoadingFail.call(me);
            };
            chatWindow.prototype.initi18n = function () {
                var me = this;
                me.i18n={
                    selectedLanguage:'en',
                    rtlLanguages:[],//loads from i18n config
                    langFiles:{
                        en: {
                            message: "Type Here",	//hoonartek customization
                            connecting: "Connecting...",
                            reconnecting: "Reconnecting...",
                            entertosend: "",
                            endofchat: "End of chat history",
                            loadinghistory: "Loading chat history..",
                            sendText:"Send",
                            closeText:"Close",
                            expandText:"Expand",
                            minimizeText:"Minimize",
                            reconnectText:"Refresh",	//hoonartek customization
                            attachmentText:"Attachment"
                        }
                    }
                }
                if(me.config &&  me.config.i18n &&  me.config.i18n.languageStrings){
                    me.i18n.langFiles=extend(me.i18n.langFiles, me.config.i18n.languageStrings);
                }
                if(me.config &&  me.config.i18n &&  me.config.i18n.rtlLanguages){
                    me.i18n.rtlLanguages=extend(me.i18n.rtlLanguages, me.config.i18n.rtlLanguages);
                }
            }
            chatWindow.prototype.seti18n = function (lang) {
                var me = this;
                me.i18n.selectedLanguage=lang;
                me.config.botMessages=botMessages=me.i18n.langFiles[me.i18n.selectedLanguage];
                botMessages.availableLanguages=(me.config.i18n && me.config.i18n.availableLanguages)||false;
                botMessages.selectedLanguage=me.i18n.selectedLanguage;

                 if(me.config.chatContainer){
                    var chatEle=me.config.chatContainer;
                    chatEle.find('.endChatContainerText').html(botMessages.endofchat);

                     chatEle.find('.close-btn').attr('title',botMessages.closeText);
                    chatEle.find('.expand-btn').attr('title',botMessages.expandText);
                    chatEle.find('.minimize-btn').attr('title',botMessages.minimizeText);
                    chatEle.find('.reload-btn').attr('title',botMessages.reconnectText);
                    chatEle.find('.sdkAttachment.attachmentBtn').attr('title',botMessages.attachmentText);

                     chatEle.find('.chatInputBox').attr('placeholder',botMessages.message);
                    chatEle.find('.sendButton').html(botMessages.sendText);
                    chatEle.find('.chatSendMsg').html(botMessages.entertosend);




                 }
            }
            chatWindow.prototype.updatei18nDirection = function () {
                var me = this;
                if(me.i18n.rtlLanguages.indexOf(me.i18n.selectedLanguage)>-1){
                    me.config.chatContainer.attr('dir','rtl');
                }else{
                    me.config.chatContainer.attr('dir','ltr');
                }
            }
            chatWindow.prototype.setPrivateVarToContext = function (_this) {
                _this.messagesQueue = messagesQueue,
                _this.historyLoading = historyLoading,
                _this.loadHistory = loadHistory;
                _this.accessToken = accessToken;
                _this.bot=bot;
                //_this._chatContainer =  _this.config.chatContainer;
                _this.EVENTS=EVENTS;
                _this.chatInitialize=chatInitialize;
                _this.botMessages=botMessages;
                _this.attachmentInfo=attachmentInfo;
                _this._botInfo=_botInfo;
                _this.customTemplateObj=customTemplateObj;
                _this.helpers = helpers;
                _this._pingTimer = _pingTimer;
                _this._pingTime = _pingTime;
            }
            chatWindow.prototype.destroy = function () {
                var me = this;
                $('.kore-chat-overlay').hide();
                me.bot.close();
                if (!me.config.minimizeMode) {
                    me.bot.destroy();
                }
                me.messagesQueue=[];
                if (me.config && me.config.chatContainer) {
                    if (!me.config.minimizeMode) {
                        me.config.chatContainer.remove();
                    }else{
                        me.config.chatContainer.find('.kore-chat-header .header-title').html(me.config.botMessages.reconnecting);
                        me.config.chatContainer.addClass('minimize');
                        me.skipedInit=true;                
                    }
                }
                if (ttsAudioSource) {
                    ttsAudioSource.stop();
                }
                me.isTTSOn = false;
                if (_ttsContext) {
                    _ttsContext.close();
                    _ttsContext = null;
                }
            };

	    // Pallavi blank 26_02_2025
            // chatWindow.prototype.resetWindow = function () {
            //     var me = this;
            //     me.config.chatContainer.find('.kore-chat-header .header-title').html(me.config.botMessages.reconnecting);
            //     me.config.chatContainer.find('.chat-container').html("");        // hoonartek customization for clear history after reconnect uncommented
            //     me.bot.close();
            //     me.config.botOptions.maintainContext = false
            //     me.setLocalStoreItem('kr-cw-uid',me.config.botOptions.userIdentity);
            //     me.bot.init(me.config.botOptions);
            // };

		chatWindow.prototype.resetWindow = function (data) {
                var me = this;
                me.config.chatContainer.find('.kore-chat-header .header-title').html(me.config.botMessages.reconnecting);
                if (!data) { // don't clear for internal reconnections
                    me.config.chatContainer.find('.chat-container').html("");        // hoonartek customization for clear history after reconnect uncommented
                }
                me.bot.close();
                me.config.botOptions.maintainContext = false
                me.setLocalStoreItem('kr-cw-uid',me.config.botOptions.userIdentity);
                me.bot.init(me.config.botOptions);
            };
	    // Pallavi blank 26_02_2025

            chatWindow.prototype.bindEvents = function () {
                var me = this;
                me.bindCustomEvents();
                var _chatContainer = me.config.chatContainer;
                _chatContainer.draggable({
                    handle: _chatContainer.find(".kore-chat-header .header-title"),
                    containment: "document",
                })
                    .resizable({
                        handles: "n, e, w, s",
                        containment: "document",
                        minWidth: 480
                    });
                _chatContainer.off('keyup', '.chatInputBox').on('keyup', '.chatInputBox', function (event) {
                    // pallavi azure 13_02_2025
                    if (window.currentSpeechRecognizer) {
                        window.currentSpeechRecognizer.stopContinuousRecognitionAsync(() => {
                            console.log("Speech Recognizer Stopped.");
                            window.currentSpeechRecognizer = null;
                        });
                    }
                    $('.recordingMicrophone').css('display', 'none');
                    $('.notRecordingMicrophone').css('display', 'block');
                    // pallavi azure 13_02_2025
                    var _footerContainer = $(me.config.container).find('.kore-chat-footer');
                    var _bodyContainer = $(me.config.container).find('.kore-chat-body');
                    _bodyContainer.css('bottom', _footerContainer.outerHeight());
                    me.prevComposeSelection = window.getSelection();
                    prevRange = me.prevComposeSelection.rangeCount > 0 && me.prevComposeSelection.getRangeAt(0);
                    if (this.innerText.length > 0) {
                        _chatContainer.find('.chatInputBoxPlaceholder').css('display', 'none');
                        _chatContainer.find('.sendButton').removeClass('disabled');
                    } else {
                        _chatContainer.find('.chatInputBoxPlaceholder').css('display', 'block');
                        _chatContainer.find('.sendButton').addClass('disabled');
                    }
                });

		//anurag calendarDropdown 12/02
                // $(document).on("change", ".startDate", function () {
                //     var selectedDate = $(this).val();
                //     var messageId = $(this).data("messageid");
                //     console.log("User selected date:", selectedDate);
                //     // Automatically send the selected date as user input
                //     $(".chatInputBox").text(selectedDate);
                //     var enterKey = $.Event("keydown", { which: 13 });
                //     enterKey.keyCode = 13;
                //     $(".chatInputBox").trigger(enterKey);
                // });
		$(document).on("change", ".startDate", function () {
                    var selectedDate = $(this).val();
                    var messageId = $(this).data("messageid");
               
                    console.log("User selected date:", selectedDate);
               
                    // Convert selected date (YYYY-MM-DD) to DD-MM-YYYY
                    var dateParts = selectedDate.split("-");
                    var formattedDate = dateParts[2] + "-" + dateParts[1] + "-" + dateParts[0];
               
                    // Automatically send the selected date as user input in DD-MM-YYYY format
                    $(".chatInputBox").text(formattedDate);
                    var enterKey = $.Event("keydown", { which: 13 });
                    enterKey.keyCode = 13;
                    $(".chatInputBox").trigger(enterKey);
                });    
                //end anurag calendarDropdown 12/02 

                _chatContainer.on('click', '.chatInputBoxPlaceholder', function (event) {
                    _chatContainer.find('.chatInputBox').trigger('click');
                    _chatContainer.find('.chatInputBox').trigger('focus');
                });
                _chatContainer.on('change', '.lang-selector', function (e) {
                    var selectedValue=$(e.target).val();
                    me.seti18n(selectedValue);
                    me.updatei18nDirection();
                });
                _chatContainer.on('click', '.chatInputBox', function (event) {
                    me.prevComposeSelection = window.getSelection();
                    prevRange = me.prevComposeSelection.rangeCount > 0 && me.prevComposeSelection.getRangeAt(0);
                });
                _chatContainer.on('blur', '.chatInputBox', function (event) {
                    _escPressed = 0;
                });
                _chatContainer.off('click', '.botResponseAttachments').on('click', '.botResponseAttachments', function (event) {
                    var thisEle = this;
                    if($(event.currentTarget).attr('download')==='true'){
                        var dlink = document.createElement('a');
                        dlink.download = $(event.currentTarget).find('.botuploadedFileName').text();
                        dlink.href = $(thisEle).attr('fileid');
                        dlink.click();
                        dlink.remove();
                    }else{
                        window.open($(thisEle).attr('fileid'), '_blank');
                    } 
                });
                /*_chatContainer.off('click', '.attachments').on('click', '.attachments', function (event) {
                    var attachFileID = $(this).attr('fileid');
                    var auth = (bearerToken) ? bearerToken : assertionToken;
                    $.ajax({
                        type: "GET",
                        url: koreAPIUrl + "1.1/attachment/file/" + attachFileID + "/url",
                        headers: {
                            Authorization: auth
                        },
                        success: function (response) {
                            var downloadUrl = response.fileUrl;
                            if (downloadUrl.indexOf("?") < 0) {
                                downloadUrl += "?download=1";
                            } else {
                                downloadUrl += "&download=1";
                            }
        
                            var save = document.createElement('a');
                            document.body.appendChild(save);
                            save.href = downloadUrl;
                            save.target = '_blank';
                            save.download = 'unknown file';
                            save.style.dislay = 'none !important;';
                            save.click();
                            save.remove();
                        },
                        error: function (msg) {
                            console.log("Oops, something went horribly wrong");
                        }
                    });
                });*/
                _chatContainer.off('keydown', '.chatInputBox').on('keydown', '.chatInputBox', function (event) {
                    // pallavi azure 13_02_2025
                    if (window.currentSpeechRecognizer) {
                        window.currentSpeechRecognizer.stopContinuousRecognitionAsync(() => {
                            console.log("Speech Recognizer Stopped.");
                            window.currentSpeechRecognizer = null;
                        });
                    }
                    $('.recordingMicrophone').css('display', 'none');
                    $('.notRecordingMicrophone').css('display', 'block');
                    // pallavi azure 13_02_2025
                    var _this = $(this);
                    var _footerContainer = $(me.config.container).find('.kore-chat-footer');
                    var _bodyContainer = $(me.config.container).find('.kore-chat-body');
                    _bodyContainer.css('bottom', _footerContainer.outerHeight());
                    if (event.keyCode === 13) {
                        if (event.shiftKey) {
                            return;
                        }
                        if ($('.upldIndc').is(':visible')) {
                            alert('Uploading file, please wait...');
                            return;
                        }
		//hoonartek kore customization for mic on off
                        // if ($('.recordingMicrophone').is(':visible')) {
                        //     $('.recordingMicrophone').trigger('click');
                        // }
                //hoonartek kore customization for mic on off
                        event.preventDefault();

                        me.sendMessage(_this, me.attachmentInfo);
                        return;
                    }
                    else if (event.keyCode === 27) {
                        _escPressed++;
                        if (_escPressed > 1) {
                            _escPressed = 0;
                            stop();
                            this.innerText = "";
                            $('.attachment').empty();
                            fileUploaderCounter = 0;
                            setTimeout(function () {
                                setCaretEnd((document.getElementsByClassName("chatInputBox")));
                            }, 100);
                        }
                    }
                });

		  // hoonartek customization for Send button click for sending the message through send button
                _chatContainer.off('click', '.sendMessageButton').on('click', '.sendMessageButton', function () {
                    var _this = $(me.config.container).find('.chatInputBox'); // Get the input box element
                    me.sendMessage(_this, me.attachmentInfo); // Call the sendMessage function
                });

		    
                _chatContainer.off('click', '.sendButton').on('click', '.sendButton', function (event) {
                    var _this = $('.chatInputBox');
                    if ($('.upldIndc').is(':visible')) {
                        alert('Uploading file, please wait...');
                        return;
                    }
                    if ($('.recordingMicrophone').is(':visible')) {
                        $('.recordingMicrophone').trigger('click');
                    }
                    event.preventDefault();
                    me.sendMessage(_this, me.attachmentInfo);
                    return;
                });
                _chatContainer.off('click', '.notRecordingMicrophone').on('click', '.notRecordingMicrophone', function (event) {
                    if (ttsAudioSource) {
                        ttsAudioSource.stop();
                    }
                    // pallavi azure 13_02_2025
                    if (window.currentSpeechRecognizer) {
                        window.currentSpeechRecognizer.stopContinuousRecognitionAsync(() => {
                            console.log("Speech Recognizer Stopped.");
                            window.currentSpeechRecognizer = null;
                        });
                    }
                    // pallavi azure 13_02_2025
                    if (me.config.isSpeechEnabled) {
                        getSIDToken();
                    }
                });

                //pallavi azure 13_02_2025 commented
                // _chatContainer.off('click', '.recordingMicrophone').on('click', '.recordingMicrophone', function (event) {
                //     stop();
                //     setTimeout(function () {
                //         setCaretEnd(document.getElementsByClassName("chatInputBox"));
                //     }, 350);
                // });
                //pallavi azure 13_02_2025 commented

                //pallavi azure 13_02_2025
                _chatContainer.off('click', '.recordingMicrophone').on('click', '.recordingMicrophone', function (event) {
                    console.log("Mic clicked: Stopping speech recognition...");
                    // Stop the recognizer if it's running
                    if (window.currentSpeechRecognizer) {
                        window.currentSpeechRecognizer.stopContinuousRecognitionAsync(() => {
                            console.log("Speech Recognizer Stopped.");
                            window.currentSpeechRecognizer = null;
                        });
                   
                    }
                    setTimeout(function () {
                                setCaretEnd(document.getElementsByClassName("chatInputBox"));
                            }, 350);
                    // Hide recording mic icon, show inactive mic icon
                    $('.recordingMicrophone').css('display', 'none');
                    $('.notRecordingMicrophone').css('display', 'block');
                });
                //pallavi azure 13_02_2025

                _chatContainer.off('click', '.attachmentBtn').on('click', '.attachmentBtn', function (event) {
                    if (fileUploaderCounter == 1) {
                        alert('You can upload only one file');
                        return;
                    }
                    if ($('.upldIndc').is(':visible')) {
                        alert('Uploading file, please wait...');
                        return;
                    }
                    $('#captureAttachmnts').trigger('click');
                });
                _chatContainer.off('click', '.removeAttachment').on('click', '.removeAttachment', function (event) {
                    $(this).parents('.msgCmpt').remove();
                    $('.kore-chat-window').removeClass('kore-chat-attachment');
                    fileUploaderCounter = 0;
                    me.attachmentInfo = {};
                    $('.sendButton').addClass('disabled');
                    document.getElementById("captureAttachmnts").value = "";
                });
                _chatContainer.off('change', '#captureAttachmnts').on('change', '#captureAttachmnts', function (event) {
                    var file = $('#captureAttachmnts').prop('files')[0];
                    if (file && file.size) {
                        if (file.size > filetypes.file.limit.size) {
                            alert(filetypes.file.limit.msg);
                            return;
                        }
                    }
                    cnvertFiles(this, file);
                });
                _chatContainer.off('paste', '.chatInputBox').on('paste', '.chatInputBox', function (event) {
                    event.preventDefault();
                    var _this = document.getElementsByClassName("chatInputBox");
                    var _clipboardData = event.clipboardData || (event.originalEvent && event.originalEvent.clipboardData) || window.clipboardData;
                    var _htmlData = '';
                    if (_clipboardData) {
                        _htmlData = me.helpers.nl2br(chatInitialize.escapeHTML(_clipboardData.getData('text')), false);
                        if (_htmlData) {
                            insertHtmlData(_this, _htmlData);
                        }
                    }
                    setTimeout(function () {
                        setCaretEnd(_this);
                    }, 100);
                });
                _chatContainer.off('click', '.sendChat').on('click', '.sendChat', function (event) {
                    var _footerContainer = $(me.config.container).find('.kore-chat-footer');
                    me.sendMessage(_footerContainer.find('.chatInputBox'));
                });
                _chatContainer.off('click', 'li a').on('click', 'li a', function (e) {
                    e.preventDefault();
                    var a_link = $(this).attr('href');
                    var _trgt = $(this).attr('target');
                    var msgDataText = $(event.currentTarget).closest('span.simpleMsg').attr('msgData') || '';
                    var msgData;
                    if(msgDataText){
                        try {
                         msgData = JSON.parse(msgDataText);
                        } catch (err) {
        
                        }
                    }
                    if(msgData && msgData.message && msgData.message[0].component && msgData.message[0].component.payload && msgData.message[0].component.payload.formData){
                        me.renderWebForm(msgData);
                    } else if (_trgt === "_self") {
                        callListener("provideVal", { link: a_link });
                        return;
                    }
                    if (me.config.allowIframe === true) {
                         var popupHtml = $(me.getChatTemplate("iframe")).tmpl({
                            'msgData': msgData,
                            'helpers': me.helpers,
                            "link_url": url
                        });
                         popupHtml[0].onload = function(iFrameEvent){
                            console.log(iFrameEvent);
                         }
                         openModal(popupHtml[0],true);
                    }
                    else {
                        me.openExternalLink(a_link)
                    }
                });

		//hoonartek customization for country selection template for travel - search functionality
                _chatContainer.off('input', '.searchInput').on('input', '.searchInput', function () {
                    const filter = $(this).val().toLowerCase();
                    const $optionsContainer = $(this).next('.checkboxOptions'); // Select the sibling div with checkbox options
                
                    // Loop through all options and hide/show based on the search term
                    $optionsContainer.find('.multiSelectOption').each(function () {
                        const labelText = $(this).find("label").text().toLowerCase();
                
                        if (labelText.includes(filter)) {
                            $(this).show(); // Show option
                        } else {
                            $(this).hide(); // Hide option
                        }
                    });
                });
                //hoonartek customization for country selection template for travel - search functionality ends
		
		// hoonartek customization for health discount template & country selection template done-button
                _chatContainer.off('click', '.buttonTmplContentBox li,.listTmplContentChild .buyBtn,.viewMoreList .viewMore,.listItemPath,.quickReply,.carouselImageContent,.listRightContent,.checkboxBtn,.likeDislikeDiv,.buttonQuickReply, .done-button, .doneBtn').on('click', '.buttonTmplContentBox li,.listTmplContentChild .buyBtn, .viewMoreList .viewMore,.listItemPath,.quickReply,.carouselImageContent,.listRightContent,.checkboxBtn,.likeDislikeDiv,.buttonQuickReply,.done-button, .doneBtn', function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                    var type = $(this).attr('type');
                    if (type) {
                        type = type.toLowerCase();
                    }
                    if (type == "postback" || type == "text") {
                        $('.chatInputBox').text($(this).attr('actual-value') || $(this).attr('value'));
                        //var _innerText = $(this)[0].innerText.trim() || $(this).attr('data-value').trim();
                        var _innerText = ($(this)[0] && $(this)[0].innerText) ? $(this)[0].innerText.trim() : "" || ($(this) && $(this).attr('data-value')) ? $(this).attr('data-value').trim() : "";
                        me.sendMessage($('.chatInputBox'), _innerText);
                    } else if (type == "url" || type == "web_url") {
                        if($(this).attr('msgData')!==undefined){
                            var msgData;
                            try {
                                msgData = JSON.parse($(this).attr('msgData'));
                               } catch (err) {
               
                            }
                            if(msgData && msgData.message && msgData.message[0].component && (msgData.message[0].component.formData || (msgData.message[0].component.payload &&  msgData.message[0].component.payload.formData))){
                                if(msgData.message[0].component.formData){
                                   msgData.message[0].component.payload.formData = msgData.message[0].component.formData;
                                }
                                me.renderWebForm(msgData);
                                return;
                            }
                        }
                        var a_link = $(this).attr('url');
                        if (a_link.indexOf("http:") < 0 && a_link.indexOf("https:") < 0) {
                            a_link = "http:////" + a_link;
                        }
                        me.openExternalLink(a_link);
                    }
                    if (e.currentTarget.classList && e.currentTarget.classList.length > 0 && e.currentTarget.classList[1] === 'likeDiv') {
                        $(".likeImg").addClass('hide');
                        $(".likedImg").removeClass('hide');
                        $(".likeDislikeDiv").addClass('dummy');
                    }
                    if (e.currentTarget.classList && e.currentTarget.classList.length > 0 && e.currentTarget.classList[1] === 'disLikeDiv') {
                        $(".disLikeImg").addClass('hide');
                        $(".disLikedImg").removeClass('hide');
                        $(".likeDislikeDiv").addClass('dummy');
                    }

   //                  if (e.currentTarget.classList && e.currentTarget.classList.length > 0 && e.currentTarget.classList[0] === 'checkboxBtn') {
   //                      var checkboxSelection = $(e.currentTarget.parentElement.parentElement).find('.checkInput:checked')
   //                      var selectedValue = [];
   //                      var toShowText = [];
   //                      for (var i = 0; i < checkboxSelection.length; i++) {
   //                          selectedValue.push($(checkboxSelection[i]).attr('value'));
   //                          toShowText.push($(checkboxSelection[i]).attr('text'));
   //                      }
   //                      $('.chatInputBox').text($(this).attr('title') +': '+ selectedValue.toString());
   //                      me.sendMessage($('.chatInputBox'),toShowText.toString());
			// // hoonartek customization for disable the Done button after submission
   //                      $(e.currentTarget).prop('disabled', true);
   //                      $(e.currentTarget).css('pointer-events', 'none'); // Optionally disable pointer events
   //                      $(e.currentTarget).css('opacity', '0.8'); // Change opacity for visual feedback
   //                  	// hoonartek customization ends
   //                      // console.log('Done button disabled successfully after submission.');
   //                  }

			//manasi healthaddon template
		    if (e.currentTarget.classList && e.currentTarget.classList.length > 0 && e.currentTarget.classList[0] === 'checkboxBtn') {
                var checkboxSelection = $(e.currentTarget.parentElement.parentElement).find('.checkInput:checked');
                var toShowText = [];
                var backendValues = [];
            
                checkboxSelection.each(function () {
                    var checkboxValue = $(this).attr('value'); 
                    var titleText = $(this).closest('.checkbox-group').find('label').first().text().trim(); 
                    var dropdown = $(this).closest('.checkbox-group').find('.styledDropdown'); 
            
                    if (checkboxValue === "None of the above") {
                        toShowText.push(titleText);
                        backendValues.push(checkboxValue);
                    } else if (dropdown.length > 0) {
                        var selectedDropdownOption = dropdown.find('option:selected');
                        var dropdownLabel = selectedDropdownOption.text().trim();
            
                        // Add formatted value with proper spacing and comma
                        toShowText.push(`${titleText}: ${dropdownLabel}`);
                        backendValues.push(`${checkboxValue}: ${selectedDropdownOption.val()}`);
                    } else {
                        // Push the checkbox value normally
                        toShowText.push(titleText);
                        backendValues.push(checkboxValue);
                    }
                });
            
                console.log('Final toShowText:', toShowText); // Debugging
                var finalOutput = toShowText.join(', ');  
                console.log('Formatted Output:', finalOutput); // Debugging

                // ✅ Ensure backendValues are correctly formatted
                var backendData = backendValues.join(', ');
                console.log('Backend Values:', backendData);

                // ✅ Ensure UI is updated correctly
                $('.chatInputBox').html(backendData); // Use .html() instead of .text()
            
                
            
                // ✅ Send message with correctly formatted backend values
                me.sendMessage($('.chatInputBox'), finalOutput);
            
                $(e.currentTarget).prop('disabled', true);
                $(e.currentTarget).css('pointer-events', 'none');
                $(e.currentTarget).css('opacity', '0.8');
            }
 
		// manasi healthaddon template
			// hoonartek customization for health discount template done button
                    if (e.currentTarget.classList && e.currentTarget.classList.length > 0 && e.currentTarget.classList[0] === 'done-button') {
                        var checkboxSelection = $(e.currentTarget.parentElement.parentElement).find('.insurance-option-checkbox:checked')
                        console.log('Checked checkboxes:', checkboxSelection);
                        
                        var selectedValue = [];
                        var toShowText = [];
                        console.log('in if of list done buuton')

                        for (var i = 0; i < checkboxSelection.length; i++) {
                            // Capture the value of the checkbox
                            var value = $(checkboxSelection[i]).attr('value');
                            var checkboxText = $(checkboxSelection[i]).attr('text');  // Use 'text' if available, otherwise the value

                            

                            //add the insurance-limit-select   dropdown
                            var limitSelect = $(checkboxSelection[i]).closest('.insurance-option-card').find('.insurance-limit-select');
                            if (limitSelect && limitSelect.length > 0) {
                                var selectedLimitValue = limitSelect.val();  // Get the selected dropdown value
                                checkboxText += ` (Limit: ${selectedLimitValue})`;  // Format text as "CheckboxValue (Limit: ₹500)"
                            }

                            selectedValue.push(value);
                            toShowText.push(checkboxText);
                            // console.log('selectedValue,,,,', selectedValue.toString())

                        }
                        // console.log('selectedValue.toString() ----',selectedValue.toString())

                        // $('.chatInputBox').text($(this).attr('title') +': '+ selectedValue.toString()); //to display in textinput msg area 
                        // $('.chatInputBox').text(selectedValue.toString());
                        // me.sendMessage($('.chatInputBox'),toShowText.toString());    //to send to chat bot

                        $('.chatInputBox').text($(this).attr('title') +': '+ selectedValue.toString());
                        // $('.chatInputBox').text(toShowText.length > 0 ? toShowText.join(', ') : selectedValue);

                        // Send the message to the chat with the updated text
                        me.sendMessage($('.chatInputBox'), toShowText.toString());
				// hoonartek customization for disable the Done button after submission health template
                        $(e.currentTarget).prop('disabled', true);
                        $(e.currentTarget).css('pointer-events', 'none'); // Optionally disable pointer events
                        $(e.currentTarget).css('opacity', '0.8'); // Change opacity for visual feedback
                    }
                    // hoonartek customization ends for health tmeplate

		 // kore customization starts for the travel country selection template 
                    if (e.currentTarget.classList && e.currentTarget.classList.length > 0 && e.currentTarget.classList[0] === 'doneBtn') {
                        var checkboxSelection = $(e.currentTarget.parentElement.parentElement).find('.dropdownTemplatesValues:checked')
                        var selectedValue = [];
                        var toShowText = [];
        
                        for (var i = 0; i < checkboxSelection.length; i++) {
                            selectedValue.push($(checkboxSelection[i]).attr('value'));
                            toShowText.push($(checkboxSelection[i]).attr('text'));
                            // hoonartek
                            console.log("selectedValue........",selectedValue.toString())
                            console.log("toShowText........",toShowText.toString())
                        }
                        
                        $('.chatInputBox').text($(this).attr('title') +': '+ selectedValue.toString());
                        me.sendMessage($('.chatInputBox'),selectedValue.toString());

                        // hoonartek customization for disable the Done button after submission
                        $(e.currentTarget).prop('disabled', true);
                        $(e.currentTarget).css('pointer-events', 'none'); // Optionally disable pointer events
                        $(e.currentTarget).css('opacity', '0.8'); // Change opacity for visual feedback
                    
                        console.log('Done button disabled successfully after submission.');
                    }
                     // kore customization ends for the travel country selection template ends	
			
                    if (e.currentTarget.classList && e.currentTarget.classList.length > 0 && e.currentTarget.classList[0] === 'quickReply') {
                        var _parentQuikReplyEle = e.currentTarget.parentElement.parentElement;
                        var _leftIcon = _parentQuikReplyEle.parentElement.parentElement.querySelectorAll('.quickreplyLeftIcon');
                        var _rightIcon = _parentQuikReplyEle.parentElement.parentElement.querySelectorAll('.quickreplyRightIcon');
                        setTimeout(function () {
                            _parentQuikReplyEle.parentElement.parentElement.getElementsByClassName('user-account')[0].classList.remove('marginT50');
                            _parentQuikReplyEle.parentElement.parentElement.removeChild(_leftIcon[0]);
                            _parentQuikReplyEle.parentElement.parentElement.removeChild(_rightIcon[0]);
                            _parentQuikReplyEle.parentElement.removeChild(_parentQuikReplyEle);
                        }, 50);
                    }
                    setTimeout(function () {
                        var _chatInput = _chatContainer.find('.kore-chat-footer .chatInputBox');
                        _chatInput.focus();
                    }, 600);
                });

                _chatContainer.off('click', '.close-btn').on('click', '.close-btn', function (event) {
                    $('.recordingMicrophone').trigger('click');
                    if (ttsAudioSource) {
                        ttsAudioSource.stop();
                    }
                    //pallavi azure 13_02_2025
                    if (window.currentSpeechRecognizer) {
                        window.currentSpeechRecognizer.stopContinuousRecognitionAsync(() => {
                            console.log("Speech Recognizer Stopped.");
                            window.currentSpeechRecognizer = null;
                        });
                    }
                    //pallavi azure 13_02_2025
                    me.isTTSOn = false;
                    me.destroy();
                    if (_ttsContext) {
                        _ttsContext.close();
                        _ttsContext = null;
                    }

                    if (me.config.multiPageApp && me.config.multiPageApp.enable) {
                        me.removeLocalStoreItem('kr-cw-state');
                        me.removeLocalStoreItem('kr-cw-uid');
                        me.config.botOptions.maintainContext = false;
                    }
                    chatInitialize.stopSpeaking();
		// hoonartek customization for clear history starts after cross button close button
                    setTimeout(function () {
                        window.location.reload();
                    }, 100); // Delay of 100ms before refresh, adjust if needed
                // hoonartek customization for clear history ends after cross button
                });

                _chatContainer.off('click', '.minimize-btn').on('click', '.minimize-btn', function (event) {
                    if(me.config.multiPageApp && me.config.multiPageApp.enable){
                        me.setLocalStoreItem('kr-cw-state','minimized');
                    }
                    if (me.minimized === true) {
                        _chatContainer.removeClass("minimize");
                        me.minimized = false;
                        if (me.expanded === false) {
                            /*_chatContainer.draggable({
                                handle: _chatContainer.find(".kore-chat-header .header-title"),
                                containment: "window",
                                scroll: false
                            });*/
                        }
                    } else {
                        chatInitialize.stopSpeaking();
                        _chatContainer.addClass("minimize");
                        if (me.expanded === false && _chatContainer.hasClass("ui-draggable")) {
                            //_chatContainer.draggable("destroy");
                        }
                        _chatContainer.find('.minimized-title').html("Talk to " + me.config.chatTitle);
                        me.minimized = true;
                        if (me.expanded === true) {
                            $('.kore-chat-overlay').hide();
                        }
                    }
                    $('.recordingMicrophone').trigger('click');
                    if (ttsAudioSource) {
                        ttsAudioSource.stop();
                    }
                    //pallavi azure 13_02_2025
                    if (window.currentSpeechRecognizer) {
                        window.currentSpeechRecognizer.stopContinuousRecognitionAsync(() => {
                            console.log("Speech Recognizer Stopped.");
                            window.currentSpeechRecognizer = null;
                        });
                    }
                    //pallavi azure 13_02_2025
                });

                _chatContainer.off('click', '.expand-btn').on('click', '.expand-btn', function (event) {
                    if ($('.kore-chat-overlay').length === 0) {
                        $(me.config.container).append('<div class="kore-chat-overlay"></div>');
                    }
                    if (me.expanded === true) {
                        me.setCollapsedModeStyles();
                        $('.kore-chat-overlay').hide();
                        $(this).attr('title', "Expand");
                        _chatContainer.removeClass("expanded");
                        $('.expand-btn-span').removeClass('fa-compress');
                        $('.expand-btn-span').addClass('fa-expand');
                        me.expanded = false;
                        $(".chat-container").scrollTop($(".chat-container")[0].scrollHeight);
                        /* _chatContainer.draggable({
                             handle: _chatContainer.find(".kore-chat-header .header-title"),
                             containment: "parent",
                             scroll: false
                         }).resizable({
                             handles: "n, e, w, s",
                             containment: "html",
                             minWidth: 400
                         });*/
                    } else {
                        $('.kore-chat-overlay').show();
                        $(this).attr('title', "Collapse");
                        _chatContainer.addClass("expanded");
                        $('.expand-btn-span').addClass('fa-compress');
                        $('.expand-btn-span').removeClass('fa-expand');
                        //_chatContainer.draggable("destroy").resizable("destroy");
                        me.expanded = true;
                    }
                    var evt = document.createEvent("HTMLEvents");
                    evt.initEvent('resize', true, false);
                    window.dispatchEvent(evt);
                    var container_pos_left = _chatContainer.position().left + _chatContainer.width();
                    if (container_pos_left > $(window).width()) {
                        _chatContainer.css('left', _chatContainer.position().left - (container_pos_left - $(window).width() + 10) + "px");
                    }
                    if(me.chatPSObj && me.chatPSObj.update){
                        me.chatPSObj.update()
                    }
                });

                _chatContainer.off('click', '.retry').on('click', '.retry', function (event) {
                    var target=$(event.target);
                    _chatContainer.find(".failed-text").remove();  
                    _chatContainer.find(".retry-icon").remove();
                    _chatContainer.find(".retry-text").text('Retrying...');
                    sendFailedMessage.messageId=target.closest('.fromCurrentUser').attr('id');
                    _chatContainer.find(".reload-btn").trigger('click',{isReconnect:true});
                });
                /*$('body').on('click', '.kore-chat-overlay, .kore-chat-window .minimize-btn', function () {
                    if (me.expanded === true) {
                        $('.kore-chat-window .expand-btn').trigger('click');
                    }
                });*/

                 // dateClockPickers();
                 if (window.KorePickers) {
                     var pickerConfig={
                      chatWindowInstance: me,
                       chatConfig: me.config,
                    }
                    var korePicker = new KorePickers(pickerConfig);
                    korePicker.init();
                 }
                $(document).on('keyup', function (evt) {
                    //pallavi azure 13_02_2025
                    if (window.currentSpeechRecognizer) {
                        window.currentSpeechRecognizer.stopContinuousRecognitionAsync(() => {
                            console.log("Speech Recognizer Stopped.");
                            window.currentSpeechRecognizer = null;
                        });
                    }
                    $('.recordingMicrophone').css('display', 'none');
                    $('.notRecordingMicrophone').css('display', 'block');
                    //pallavi azure 13_02_2025
                    if (evt.keyCode == 27) {
                        $('.closeImagePreview').trigger('click');
                        $('.closeElePreview').trigger('click');
                    }
                });
                _chatContainer.off('click', '.quickreplyLeftIcon').on('click', '.quickreplyLeftIcon', function (event) {
                    var _quickReplesDivs = event.currentTarget.parentElement.getElementsByClassName('buttonTmplContentChild');
                    if (_quickReplesDivs.length) {
                        var _scrollParentDiv = event.target.parentElement.getElementsByClassName('quick_replies_btn_parent');
                        var _totalWidth = _scrollParentDiv[0].scrollLeft;
                        var _currWidth = 0;
                        for (var i = 0; i < _quickReplesDivs.length; i++) {
                            _currWidth += (_quickReplesDivs[i].offsetWidth + 10);
                            if (_currWidth > _totalWidth) {
                                //_scrollParentDiv[0].scrollLeft = (_totalWidth - _quickReplesDivs[i].offsetWidth+20);
                                $(_scrollParentDiv).animate({
                                    scrollLeft: (_totalWidth - _quickReplesDivs[i].offsetWidth - 50)
                                }, 'slow', function () {
                                    // deciding to enable left and right scroll icons
                                    var rightIcon = _scrollParentDiv[0].parentElement.querySelectorAll('.quickreplyRightIcon');
                                    rightIcon[0].classList.remove('hide');
                                    if (_scrollParentDiv[0].scrollLeft <= 0) {
                                        var leftIcon = _scrollParentDiv[0].parentElement.querySelectorAll('.quickreplyLeftIcon');
                                        leftIcon[0].classList.add('hide');
                                    }
                                });
                                break;
                            }
                        }
                    }
                });
                _chatContainer.off('click', '.quickreplyRightIcon').on('click', '.quickreplyRightIcon', function (event) {
                    var _quickReplesDivs = event.currentTarget.parentElement.getElementsByClassName('buttonTmplContentChild');
                    if (_quickReplesDivs.length) {
                        var _scrollParentDiv = event.target.parentElement.getElementsByClassName('quick_replies_btn_parent');
                        var _totalWidth = event.target.parentElement.offsetWidth;
                        var _currWidth = 0;
                        // calculation for moving element scroll
                        for (var i = 0; i < _quickReplesDivs.length; i++) {
                            _currWidth += (_quickReplesDivs[i].offsetWidth + 10);
                            if (_currWidth > _totalWidth) {
                                //_scrollParentDiv[0].scrollLeft = _currWidth;
                                $(_scrollParentDiv).animate({
                                    scrollLeft: (_scrollParentDiv[0].scrollLeft + _quickReplesDivs[i].offsetWidth + 20)
                                }, 'slow', function () {
                                    // deciding to enable left and right scroll icons
                                    var leftIcon = _scrollParentDiv[0].parentElement.querySelectorAll('.quickreplyLeftIcon');
                                    leftIcon[0].classList.remove('hide');
                                    if ((_scrollParentDiv[0].scrollLeft + _totalWidth + 10) >= _scrollParentDiv[0].scrollWidth) {
                                        var rightIcon = _scrollParentDiv[0].parentElement.querySelectorAll('.quickreplyRightIcon');
                                        rightIcon[0].classList.add('hide');
                                    }
                                });
                                break;
                            }
                        }
                    }
                });
                _chatContainer.off('click', '.minimized').on('click', '.minimized,.minimized-title', function (event) {
                    if(me.config.multiPageApp && me.config.multiPageApp.enable){
                        me.setLocalStoreItem('kr-cw-state','open');
                    }
                    _chatContainer.removeClass("minimize");
                    me.minimized = false;
                    if(me.skipedInit){
                        if(me.config.multiPageApp && me.config.multiPageApp.enable){
                            me.setLocalStoreItem('kr-cw-uid',me.config.botOptions.userIdentity);
                        }
                        bot.init(me.config.botOptions,me.config.messageHistoryLimit);
                        me.skipedInit=false;
                    }
                    /*_chatContainer.draggable({
                        handle: _chatContainer.find(".kore-chat-header .header-title"),
                        containment: "window",
                        scroll: false
                    });*/
                    if (me.expanded === true) {
                        $('.kore-chat-overlay').show();
                    }
                    var evt = document.createEvent("HTMLEvents");
                    evt.initEvent('resize', true, false);
                    $('.chat-container').animate({
                        scrollTop: $('.chat-container').prop("scrollHeight")
                    }, 100);
                });

                _chatContainer.off('click', '.reload-btn').on('click', '.reload-btn', function (event,data) {
                     //pallavi azure 13_02_2025
                     console.log("Hitting reload");
                     // Hide recording mic icon, show inactive mic icon
                    $('.recordingMicrophone').css('display', 'none');
                    $('.notRecordingMicrophone').css('display', 'block');
                    if (window.currentSpeechRecognizer) {
                        window.currentSpeechRecognizer.stopContinuousRecognitionAsync(() => {
                            console.log("Speech Recognizer Stopped.");
                            window.currentSpeechRecognizer = null;
                        });
                    }
                    window.stopSpeakingAzureTTS();  // Stop Azure TTS
                    console.log("Azure TTS stopped successfully.");
                    //pallavi-mic
                    $('.chatInputBox').text('');  // For div-based input
                    $('.chatInputBox').val('');   // In case it's an input/textarea
                    //pallavi-mic
                    //pallavi azure 13_02_2025
                    
                    chatInitialize.stopSpeaking();
                    if(data && data.isReconnect){
                        me.config.botOptions.forceReconnecting=true;
                    }else{
                        me.config.botOptions.forceReconnecting=false;//make it to true if reconnect button should not trigger on connect message
                    }
                    $(this).addClass("disabled").prop('disabled', true);
                    $(".close-btn").addClass("disabled").prop('disabled', true);
                // hoonartek customization for clear history after reconnect starts
                    // setTimeout(function () {
                    //     me.resetWindow();
                    // });
		    // Pallavi blank bot issue 20_02_2025
                    // me.resetWindow();
		    // me.resetWindow({isReconnect: true}); // pass the data
		    // Pallavi blank bot issue 20_02_2025
		    // Pallavi blank bot issue 26_02_2025
		    me.resetWindow(data);
		    // Pallavi blank bot issue 26_02_2025
                // hoonartek customization for clear history ends
		// hoonartek kore customization for mic
                    // $('.recordingMicrophone').trigger('click');
                        sessionStorage.setItem("mic",false)
                // hoonartek kore customization for mic ends
                    if (ttsAudioSource) {
                        ttsAudioSource.stop();
                    }

                    //pallavi azure 13_02_2025
                    if (window.currentSpeechRecognizer) {
                        window.currentSpeechRecognizer.stopContinuousRecognitionAsync(() => {
                            console.log("Speech Recognizer Stopped.");
                            window.currentSpeechRecognizer = null;
                        });
                    }
                    //pallavi azure 13_02_2025

                });
                // pallavi azure 13_02_2025 commented
                // _chatContainer.off('click', '.ttspeaker').on('click', '.ttspeaker', function (event) {
                //     if (me.config.isTTSEnabled) {
                //         if (me.isTTSOn) {
                //             if (ttsAudioSource) {
                //                 ttsAudioSource.stop();
                //             }
                //             cancelTTSConnection();
                //             me.isTTSOn = false;
                //             $('#ttspeaker')[0].pause();
                //             if(me.config.ttsInterface && me.config.ttsInterface ==="webapi"){
                //                 var synth = window.speechSynthesis;
                //                 synth.pause();
                //              }else if (me.config.ttsInterface === 'awspolly') {
                //                 if (me.isTTSOn ===false) {
                //                     // isTTSOn = false;
                //                     gainNode.gain.value = 0; // 10 %
                //                     $('.ttspeakerDiv').addClass('ttsOff');
                //                 }
                //             }
                //             $('.ttspeakerDiv').addClass('ttsOff');
                //         } 
                //         else {
                //             if(me.config.ttsInterface && me.config.ttsInterface==="webapi"){
                //                 _ttsConnection = me.speakWithWebAPI();
 
                //             }else if(me.config.ttsInterface &&me.config.ttsInterface === 'awspolly'){
                //                 gainNode.gain.value = 1
                //             }else{
                //                 _ttsConnection = createSocketForTTS();
                //             }
                //             me.isTTSOn = true;
                //             $('.ttspeakerDiv').removeClass('ttsOff');
                //         }
                //     }
                // });
                // pallavi azure 13_02_2025 commented

                //pallavi azure 13_02_2025
                _chatContainer.off('click', '.ttspeaker').on('click', '.ttspeaker', function (event) {
                    console.log("In click ttspeaker  ");
                    //pallavi-mic
                    if (window.currentSpeechRecognizer) {
                        window.currentSpeechRecognizer.stopContinuousRecognitionAsync(() => {
                            console.log("Speech Recognizer Stopped.");
                            window.currentSpeechRecognizer = null;
                        });
                    }
                    $('.recordingMicrophone').css('display', 'none');
                    $('.notRecordingMicrophone').css('display', 'block');
                    //pallavi-mic
                    if (me.config.isTTSEnabled) {
                        if (me.isTTSOn) {
                            console.log("In isTTSOn");
                            if (ttsAudioSource) {
                                console.log("In ttsAudioSource");
                                ttsAudioSource.stop();
                            }
                            cancelTTSConnection();
                            console.log("In cancelTTSConnection");
                            me.isTTSOn = false;
                            $('#ttspeaker')[0].pause();
                
                            // Stop TTS for webapi
                            if (me.config.ttsInterface && me.config.ttsInterface === "webapi") {
                                console.log("In me.config.ttsInterface");
                                var synth = window.speechSynthesis;
                                if (synth) {
                                    synth.pause(); // Stop speech if using Web API
                                    console.log("WebAPI TTS stopped successfully.");
                                }
                
                            // Stop Azure TTS
                            } else if (me.config.ttsInterface && me.config.ttsInterface === "azure") {
                                console.log("Azure me.config.ttsInterface");
                                if (window.stopSpeakingAzureTTS) {
                                    window.stopSpeakingAzureTTS();  // Stop Azure TTS
                                    $('.recordingMicrophone').css('display', 'none'); //pallavi-mic
                                    $('.notRecordingMicrophone').css('display', 'block'); //pallavi-mic
                                    console.log("Azure TTS stopped successfully.");
                                }
                                $('.ttspeakerDiv').addClass('ttsOff');
                                $('.recordingMicrophone').css('display', 'none'); //pallavi-mic
                                $('.notRecordingMicrophone').css('display', 'block'); ////pallavi-mic
                            
                            // Handle AWS Polly
                            } else if (me.config.ttsInterface === 'awspolly') {
                                if (me.isTTSOn === false) {
                                    gainNode.gain.value = 0; // 10 %
                                    $('.ttspeakerDiv').addClass('ttsOff');
                                }
                            }
                
                            $('.ttspeakerDiv').addClass('ttsOff');
                        } else {
                            // Start speaking logic based on the interface
                            if (me.config.ttsInterface && me.config.ttsInterface === "webapi") {
                                _ttsConnection = me.speakWithWebAPI();             
                            } else if (me.config.ttsInterface && me.config.ttsInterface === "azure") {
                                console.log("in me.config.ttsInterface azure ");
                                _ttsConnection = me.speakWithAzure();
                            } else if (me.config.ttsInterface && me.config.ttsInterface === 'awspolly') {
                                gainNode.gain.value = 1;
                            } else {
                                _ttsConnection = createSocketForTTS();
                            }
                            me.isTTSOn = true;
                            console.log("is true mic");
                            $('.ttspeakerDiv').removeClass('ttsOff');
                        }
                    }
                });
                //pallavi azure 13_02_2025

                var element = document.querySelector('.droppable');
                function callback(files) {
                    // Here, we simply log the Array of files to the console.
                    if (fileUploaderCounter == 1) {
                        alert('You can upload only one file');
                        return;
                    }
                    cnvertFiles(this, files[0]);
                    if (files.length > 1) {
                        alert('You can upload only one file');
                    }
                }
                me.makeDroppable(element, callback);
                me.bindSDKEvents()
            };
            
            chatWindow.prototype.getBotMetaData = function () {
                var me = this;
                me.bot.getBotMetaData(function(res){
                    me.sendWebhookOnConnectEvent();
                },function(errRes){
                    me.sendWebhookOnConnectEvent();
                });
            };
            chatWindow.prototype.sendWebhookOnConnectEvent = function () {
                var me = this;
                me.sendMessageViaWebHook({
                    "type": "event",
                    "val": "ON_CONNECT",
                }, function (msgsData) {
                    me.onBotReady();
                    me.handleWebHookResponse(msgsData);
                }, function () {
                    me.onBotReady();
                    console.log("Kore:error sending on connect event")
                }, {
                    session: {
                        "new": true
                    }
                });
            }

            chatWindow.prototype.bindSDKEvents = function (){
                //hook to add custom events
                var me=this;
                me.bot.on("open", function (response) {
                    me.onBotReady();
                });

                me.bot.on("message", function (message) {

                    //actual implementation starts here
                    if (me.popupOpened === true) {
                        $('.kore-auth-popup .close-popup').trigger("click");
                    }
                    var tempData = JSON.parse(message.data);

                    if (tempData.from === "bot" && tempData.type === "bot_response") {
                        if(tempData && tempData.message && tempData.message.length) {
                        if (tempData.message[0]) {
                            if (!tempData.message[0].cInfo) {
                                tempData.message[0].cInfo = {};
                            }
                            if (tempData.message[0].component && !tempData.message[0].component.payload.text) {
                                try {
                                    tempData.message[0].component = JSON.parse(tempData.message[0].component.payload);
                                } catch (err) {
                                    tempData.message[0].component = tempData.message[0].component.payload;
                                }
                            }
                            if (tempData.message[0].component && tempData.message[0].component.payload && tempData.message[0].component.payload.text) {
                                tempData.message[0].cInfo.body = tempData.message[0].component.payload.text;
                            }
                            if(tempData.message[0].component && tempData.message[0].component.payload && (tempData.message[0].component.payload.videoUrl || tempData.message[0].component.payload.audioUrl)){
                                tempData.message[0].cInfo.body = tempData.message[0].component.payload.text || "";
                            }
                        }
                        if (me.loadHistory && me.historyLoading) {
                            messagesQueue.push(tempData);
                        }
                        else {
                            if (me.config.supportDelayedMessages) {
                                me.pushTorenderMessagesQueue(tempData);
                            } else {
                                me.renderMessage(tempData);
                            }
                        }
                    }
                    }
                    else if (tempData.from === "self" && tempData.type === "user_message") {
                        var tempmsg = tempData.message;
                        var msgData = {};
                        if (tempmsg && tempmsg.attachments && tempmsg.attachments[0] && tempmsg.attachments[0].fileId) {
                            msgData = {
                                'type': "currentUser",
                                "message": [{
                                    'type': 'text',
                                    'cInfo': { 'body': tempmsg.body, attachments: tempmsg.attachments },
                                    'clientMessageId': tempData.id
                                }],
                                "createdOn": tempData.id
                            };
                        } else {
                            msgData = {
                                'type': "currentUser",
                                "message": [{
                                    'type': 'text',
                                    'cInfo': { 'body': tempmsg.body },
                                    'clientMessageId': tempData.id
                                }],
                                "createdOn": tempData.id
                            };
                        }
                        me.renderMessage(msgData);
                    }
                    if (tempData.type === "appInvalidNotification") {
                        setTimeout(function () {
                            $('.trainWarningDiv').addClass('showMsg');
                        }, 2000);
                    }
                });
                
                me.bot.on("webhook_ready", function (response) {
                    if (!me.config.loadHistory) {
                        me.getBotMetaData();
                    }
                });

                me.bot.on("webhook_reconnected", function (response) {
                    me.onBotReady();
                });

                me.bot.on('reconnected', (response) => {
                    if (me.config?.syncMessages?.onReconnect?.enable && response?.reconnected) {
                        me.bot.getHistory({ forHistorySync: true, limit: me.config?.syncMessages?.onReconnect?.batchSize });
                    }
                });
            };
            chatWindow.prototype.bindCustomEvents = function (){
                //hook to add custom events
                var me = this;
                var _chatContainer = me.config.chatContainer;
                //add additional events or override events in this method
                //e.stopImmediatePropagation(); would be useful to override
            };
            chatWindow.prototype.onBotReady = function (){
                //hook to add custom events
                var me=this;

                var _chatContainer=me.config.chatContainer;
                //actual implementation starts here
                me.accessToken = me.config.botOptions.accessToken;
                var _chatInput = _chatContainer.find('.kore-chat-footer .chatInputBox');
                _chatContainer.find('.kore-chat-header .header-title').html(me.config.chatTitle).attr('title', me.config.chatTitle);
                _chatContainer.find('.kore-chat-header .disabled').prop('disabled', false).removeClass("disabled");
                if (!me.loadHistory) {
                    setTimeout(function () {
                        $('.chatInputBox').focus();
                        $('.disableFooter').removeClass('disableFooter');
                    });
                }
                if(sendFailedMessage.messageId){
                    var msgEle=_chatContainer.find('#'+sendFailedMessage.messageId);
                    msgEle.find('.errorMsg').remove();
                    var msgTxt=msgEle.find('.messageBubble').text().trim();
                    _chatContainer.find('.chatInputBox').text(msgTxt);
                    msgEle.remove();
                    me.sendMessage($('.chatInputBox'));
                }
            }
            chatWindow.prototype.bindIframeEvents = function (authPopup) {
                var me = this;
                authPopup.on('click', '.close-popup', function () {
                    $(this).closest('.kore-auth-popup').remove();
                    $('.kore-auth-layover').remove();
                    me.popupOpened = false;
                });

                var ifram = authPopup.find('iframe')[0];

                ifram.addEventListener('onload', function () {
                    console.log(this);
                }, true);
            };

            chatWindow.prototype.render = function (chatWindowHtml) {
                var me = this;
                $(me.config.container).append(chatWindowHtml);

                if (me.config.container !== "body") {
                    $(me.config.container).addClass('pos-relative');
                    $(me.config.chatContainer).addClass('pos-absolute');
                }
                me.setCollapsedModeStyles();
                me.chatPSObj=new KRPerfectScrollbar(me.config.chatContainer.find('.chat-container').get(0), {
                    suppressScrollX: true
                  });
                me.bindEvents();
            };

            chatWindow.prototype.sendMessage = function (chatInput, renderMsg,msgObject,isMessageTobeHidden) {
                var me = this;
                me.stopSpeaking();
                if (chatInput.text().trim() === "" && $('.attachment').html().trim().length == 0) {
                    return;
                }
                if(msgObject && msgObject.message && msgObject.message.length && msgObject.message[0]&& msgObject.message[0].component&& msgObject.message[0].component.payload && msgObject.message[0].component.payload.ignoreCheckMark){
                    var ignoreCheckMark=msgObject.message[0].component.payload.ignoreCheckMark;
                    }
                if (me.config.allowLocation) {
                    me.bot.fetchUserLocation();
                }
                var _bodyContainer = $(me.config.chatContainer).find('.kore-chat-body');
                var _footerContainer = $(me.config.chatContainer).find('.kore-chat-footer');
                var clientMessageId = new Date().getTime();
                if(sendFailedMessage.messageId){
                    clientMessageId=sendFailedMessage.messageId;
                    sendFailedMessage.messageId=null;
                }
                var msgData = {};
                fileUploaderCounter = 0;
                //to send \n to server for new lines
                chatInput.text(chatInitialize.koreReplaceAll(chatInput.text(),"<br>", "\n"));
                if (me.attachmentInfo && Object.keys(me.attachmentInfo).length) {
                    msgData = {
                        'type': "currentUser",
                        "message": [{
                            'type': 'text',
                            'cInfo': {
                                'body': chatInput.text(),
                                'attachments': [me.attachmentInfo]
                            },
                            'clientMessageId': clientMessageId
                        }],
                        "createdOn": clientMessageId
                    };
                    $('.attachment').html('');
                    $('.kore-chat-window').removeClass('kore-chat-attachment');
                    document.getElementById("captureAttachmnts").value = "";
                } else {
                    me.attachmentInfo = {};
                    msgData = {
                        'type': "currentUser",
                        "message": [{
                            'type': 'text',
                            'cInfo': { 'body': chatInput.text() },
                            'clientMessageId': clientMessageId
                        }],
                        "createdOn": clientMessageId
                    };
                }

                var messageToBot = {};
                messageToBot["clientMessageId"] = clientMessageId;
                if (Object.keys(me.attachmentInfo).length > 0 && chatInput.text().trim().length) {
                    me.attachmentInfo.fileId = attachmentInfo.fileId;
                    messageToBot["message"] = { body: chatInput.text().trim(), attachments: [me.attachmentInfo] };
                } else if (Object.keys(me.attachmentInfo).length > 0) {
                    me.attachmentInfo.fileId = attachmentInfo.fileId;
                    messageToBot["message"] = { attachments: [me.attachmentInfo] };
                }
                else {
                    messageToBot["message"] = { body: chatInput.text().trim().replace(/\s/g, ' ') };
                }
                messageToBot["resourceid"] = '/bot.message';

                if (renderMsg && typeof renderMsg === 'string') {
                    messageToBot["message"].renderMsg = renderMsg;
                }
                if(msgObject && msgObject.customdata){
                    messageToBot["message"].customdata=msgObject.customdata;
                }
                if(msgObject && msgObject.metaTags){
                    messageToBot["message"].metaTags=msgObject.metaTags;
                }

                if(msgObject && (msgObject.nlmeta || msgObject.nlMeta)){
                    messageToBot["message"].nlMeta= msgObject.nlmeta || msgObject.nlMeta;
                }
                if(me.config && me.config && me.config.botOptions && me.config.botOptions.webhookConfig && me.config.botOptions.webhookConfig.enable){
                    me.sendMessageViaWebHook(
                        chatInput.text(),
                        function (msgsData) {
                            me.handleWebHookResponse(msgsData);
                        }, function (err) {
                            setTimeout(function () {
                                var failedMsgEle=$('.kore-chat-window [id="' + clientMessageId + '"]');
                                failedMsgEle.find('.messageBubble').append('<div class="errorMsg hide"><span class="failed-text">Send Failed </span><div class="retry"><span class="retry-icon"></span><span class="retry-text">Retry</span></div></div>');
                                if(sendFailedMessage.retryCount<sendFailedMessage.MAX_RETRIES){
                                    failedMsgEle.find('.retry').trigger('click');
                                    sendFailedMessage.retryCount++;
                                }else{
                                    failedMsgEle.find('.errorMsg').removeClass('hide');
                                    $('.typingIndicatorContent').css('display', 'none');
                                }
                            }, 350);
                        },
                        me.attachmentInfo?{attachments:[me.attachmentInfo]}:null
                        );
                }else{
                    me.bot.sendMessage(messageToBot, function messageSent(err) {
                        if (err && err.message) {
                            setTimeout(function () {
                                var failedMsgEle=$('.kore-chat-window [id="' + clientMessageId + '"]');
                                failedMsgEle.find('.messageBubble').append('<div class="errorMsg hide"><span class="failed-text">Send Failed </span><div class="retry"><span class="retry-icon"></span><span class="retry-text">Retry</span></div></div>');
                                if(sendFailedMessage.retryCount<sendFailedMessage.MAX_RETRIES){
                                    failedMsgEle.find('.retry').trigger('click');
                                    sendFailedMessage.retryCount++;
                                }else{
                                    failedMsgEle.find('.errorMsg').removeClass('hide');
                                    $('.typingIndicatorContent').css('display', 'none');
                                }
                            }, 350);
                        }
                    });    
                }
                me.attachmentInfo = {};
                chatInput.html("");
                $('.sendButton').addClass('disabled');
                _bodyContainer.css('bottom', _footerContainer.outerHeight());
                me.resetPingMessage();
                $('.typingIndicatorContent').css('display', 'block');
                if(me.typingIndicatorTimer){
                    clearTimeout(me.typingIndicatorTimer);
                }
                me.typingIndicatorTimer=setTimeout(function () {
                    $('.typingIndicatorContent').css('display', 'none');
                }, me.config.maxTypingIndicatorTime || 10000);
                if (renderMsg && typeof renderMsg === 'string') {
                    msgData.message[0].cInfo.body = renderMsg;
                }
                msgData.message[0].cInfo.ignoreCheckMark=ignoreCheckMark;
                if(!isMessageTobeHidden){
                    me.renderMessage(msgData);
                }
            };
                 
            chatWindow.prototype.handleWebHookResponse = function (msgsData) {
                var SUBSEQUENT_RENDER_DELAY = 500;
                if (msgsData && msgsData.length) {
                    msgsData.forEach(function (msgData, index) {
                        setTimeout(function () {
                            chatInitialize.renderMessage(msgData);
                        }, (index >= 1) ? SUBSEQUENT_RENDER_DELAY : 0);
                    });
                }
            }

            chatWindow.prototype.sendMessageViaWebHook= function(message,successCb,failureCB,options){
                var me=this;
                if(me.config.botOptions.webhookConfig.webhookURL){
                    var payload = {
                        "session": {
                            "new": false
                        },
                        //"preferredChannelForResponse": "rtm",
                        "message": {
                            "text": message
                        },
                        "from": {
                            "id": me.config.botOptions.userIdentity,
                            "userInfo": {
                                "firstName": "",
                                "lastName": "",
                                "email": ""
                            }
                        },
                        "to": {
                            "id": "Kore.ai",
                            "groupInfo": {
                                "id": "",
                                "name": ""
                            }
                        }
                    }

                    if(me.config.botOptions.webhookConfig.useSDKChannelResponses){
                        payload.preferredChannelForResponse='rtm';
                    }
                        
                    if(me.config.botOptions.webhookConfig.apiVersion && me.config.botOptions.webhookConfig.apiVersion===2){
                        payload.message={
                            "type": "text",
                            "val": message
                          }
                    }
                    if(typeof message==='object'){
                        payload.message=message;
                    }
                    if(options && options.session){
                        payload.session=options.session;
                    }
                    if(options && options.attachments){
                        payload.message.attachments=options.attachments;
                    }

                    me.bot.sendMessageViaWebhook(payload,successCb,failureCB);
                }else{
                    console.error("KORE:Please provide webhookURL in webhookConfig")
                }
            };
            

            chatWindow.prototype.closeConversationSession = function () {
                var me = this;
                var clientMessageId = new Date().getTime();
                var messageToBot = {};
                messageToBot["clientMessageId"] = clientMessageId;
                messageToBot["resourceid"] = '/bot.closeConversationSession';
                bot.sendMessage(messageToBot, function messageSent(err) {
                    console.error("bot.closeConversationSession send failed sending")
                });
            };

            chatWindow.prototype.renderMessage = function (msgData) {
                var me = this, messageHtml = '', extension = '', _extractedFileName = '';
                var helpers=me.helpers;
                msgData.createdOnTimemillis=new Date(msgData.createdOn).valueOf();
                me.customTemplateObj.helpers = me.helpers;
                me.customTemplateObj.extension = extension;
                graphLibGlob = me.config.graphLib || "d3";
		    
		        // pallavi time added on 07_02_2025
                window.msgData = msgData;
                // pallavi time added on 07_02_2025
		    
	// hoonartek kore customization for mic
                if(msgData.type === "currentUser"){ 
                    msgData.message[0].cInfo.body = reFormatUserText(msgData.message[0].cInfo.body);
                    // pallavi azure 13_02_2025
                    if (window.currentSpeechRecognizer) {
                        window.currentSpeechRecognizer.stopContinuousRecognitionAsync(() => {
                            console.log("Speech Recognizer Stopped.");
                            window.currentSpeechRecognizer = null;
                        });
                    }
                    $('.recordingMicrophone').css('display', 'none'); 
                    $('.notRecordingMicrophone').css('display', 'block'); 
                    // pallavi azure 13_02_2025
                }
        // hoonartek kore customization for mic ends
                if (msgData.type === "bot_response") {

                    // pallavi azure 13_02_2025
                    $('.recordingMicrophone').css('display', 'none');
                    $('.notRecordingMicrophone').css('display', 'block');
                    if (window.currentSpeechRecognizer) {
                        window.currentSpeechRecognizer.stopContinuousRecognitionAsync(() => {
                            console.log("Speech Recognizer Stopped.");
                            window.currentSpeechRecognizer = null;
                        });
                    }
                    $('.recordingMicrophone').css('display', 'none'); 
                    $('.notRecordingMicrophone').css('display', 'block'); 
                    // pallavi azure 13_02_2025

                    // kore customization starts (showing table )
                    if(msgData.message[0]?.component?.payload?.template_type == 'multi_select'){
                        var checkboxes = document.querySelectorAll('.checkInput');
                        var checkedCount = Array.prototype.filter.call(checkboxes, function(checkbox) {
                            return checkbox.checked;
                        }).length;
                        sessionStorage.setItem('sdc', checkedCount);
                    }
			if(msgData.message[0]?.component?.payload?.template_type == 'countryDropdownTemplate'){
                        var checkboxes = document.querySelectorAll('.dropdownTemplatesValues');
                        var checkedCount = Array.prototype.filter.call(checkboxes, function(checkbox) {
                            return checkbox.checked;
                        }).length;
                        sessionStorage.setItem('sdc', checkedCount);
                    }
			        //Anurag 12/02 Calender
                    if(msgData.message[0]?.component?.payload?.template_type == 'calendarDropdown'){
                        $(".startDate").prop("disabled", false);
                    }
                    else{
                        $(".startDate").prop("disabled", true);
                    }	
                    //end calender
			        //pallavi disable quickreply 13/02
                    if (msgData.message[0]?.component?.payload?.template_type == 'quickReplyTemplate') {
                        $(".buttonTmplContentChild.quickReplyDiv")
                            .css("pointer-events", "auto")
                            .css("opacity", "0.8");
                    } else {
                        $(".buttonTmplContentChild.quickReplyDiv")
                            .css("pointer-events", "none")
                            .css("opacity", "0.8");
                    }
			
		    if (msgData.message[0]?.component?.payload?.template_type == 'buttonTemplate') {
                        $(".buttonTmplContentChild")
                            .css("pointer-events", "auto")
                            .css("opacity", "0.8");
                    } else {
                        $(".buttonTmplContentChild")
                            .css("pointer-events", "none")
                            .css("opacity", "0.8");
                    }
                    //pallavi disable quickreply 13/02
		    //pallavi disable quickreply 04/03/2025
		    if (msgData.message[0]?.component?.payload?.template_type == 'carouselTemplate') {
                        $(".listItemPath.carouselButton")
                            .css("pointer-events", "auto")
                            .css("opacity", "0.8");
                    } else {
                        $(".listItemPath.carouselButton")
                            .css("pointer-events", "none")
                            .css("opacity", "0.8");
                    }
                    if (msgData.message[0]?.component?.payload?.template_type == 'dropdownTemplate') {
                        $(".selectTemplateDropdowm")
                            .css("pointer-events", "auto")
                            .css("opacity", "0.8");
                    } else {
                        $(".selectTemplateDropdowm")
                            .css("pointer-events", "none")
                            .css("opacity", "0.8");
                    }
                    if (msgData.message[0]?.component?.payload?.template_type == 'checkBoxesTemplate') {
                        $(".checkbox-group, .checkbox-primary, .checkInput, .styledDropdown,.checkboxButtons, .checkboxBtn")
                            .css("pointer-events", "auto")
                    } else {
                        $(".checkbox-group, .checkbox-primary, .checkInput, .styledDropdown,.checkboxButtons, .checkboxBtn")
                            .css("pointer-events", "none")
                            .css("filter", "grayscale(50%) brightness(1)");
                            $(".checkInput, .checkboxBtn, .styledDropdown").prop("disabled", true);
                    };
                    if (msgData.message[0]?.component?.payload?.template_type == 'healthAddonTemplate') {
                        $(".checkbox-group, .checkbox-primary, .checkInput, .styledDropdown,.checkboxButtons, .checkboxBtn")
                            .css("pointer-events", "auto")
                    } else {
                        $(".checkbox-group, .checkbox-primary, .checkInput, .styledDropdown,.checkboxButtons, .checkboxBtn")
                            .css("pointer-events", "none")
                            .css("filter", "grayscale(50%) brightness(1)");
                            $(".checkInput, .checkboxBtn, .styledDropdown").prop("disabled", true);
                    }
		    //pallavi disable quickreply 04/03/2025
		    //pallavi disable quickreply 05/03/2025
		    if (msgData.message[0]?.component?.payload?.template_type == 'calendarDropdown') {
                        $(".dateRangePicker, .startDate, .input.startDate")
                            .prop("disabled", false) // Enable input
                            .css("pointer-events", "auto")
                            .css("opacity", "0.8");
                            $(".startDate, .input.startDate").prop("disabled", false);
                    } else {
                        $(".dateRangePicker, .startDate, .input.startDate")
                            .prop("disabled", true) // Disable input
                            .css("pointer-events", "none")
                            .css("opacity", "0.8");
                            $(".startDate, .input.startDate").prop("disabled", true);
                    };
		    if (msgData.message[0]?.component?.payload?.template_type == 'countryDropdownTemplate') {
                        $(".multiSelectContainer, .searchInput, .dropdownTemplatesValues, .doneBtn")
                            .prop("disabled", false) // Enable elements
                            .css("pointer-events", "auto")
                            .css("opacity", "0.8");
                        $(".dropdownTemplatesValues, .doneBtn").prop("disabled", false);
                    } else {
                        $(".multiSelectContainer, .searchInput, .dropdownTemplatesValues, .doneBtn")
                            .prop("disabled", true) // Disable elements
                            .css("pointer-events", "none")
                            .css("opacity", "0.8");
                        $(".multiSelectContainer, .searchInput, .dropdownTemplatesValues, .doneBtn").prop("disabled", true);
                    }
		    //pallavi disable quickreply 05/03/2025
			
                    if(msgData.message[0]?.component?.payload?.template_type == 'table'){
                        let plainObj=JSON.stringify(msgData.message[0].component.payload.elements);
                        plainObj = plainObj.replaceAll(null,'""');
                        msgData.message[0].component.payload.elements = JSON.parse(plainObj)
                    }
                    // Kore customization ends
			
		   // hoonartek customization starts (disable carousel) disable carousel after click
                    if(msgData.message[0]?.component?.payload?.template_type == 'carousel'){
                        $(".listItemPath.carouselButton").prop("disabled", false);
                    }
                    else{
                        $(".listItemPath.carouselButton").prop("disabled", true);
                    }
                    // hoonartek customization ends (disable carousel) disable carousel after click
			
                    // Kore customization starts (disable dropdown)
                    if(msgData.message[0]?.component?.payload?.template_type == 'dropdown_template'){
                        $(".selectTemplateDropdowm").prop("disabled", false);
                    }
                    else{
                        $(".selectTemplateDropdowm").prop("disabled", true);
                    }
                    console.log(msgData.message[0]?.component?.payload?.template_type);
                    // Kore customization ends
                    sendFailedMessage.retryCount=0;
                    waiting_for_message = false;
                    setTimeout(function () {
                        $('.typingIndicator').css('background-image', "url(" + msgData.icon + ")");
                    }, 500);
                    setTimeout(function () {
                        if (!waiting_for_message) {
                            if(me.typingIndicatorTimer){
                                clearTimeout(me.typingIndicatorTimer);
                            }
                            $('.typingIndicatorContent').css('display', 'none');
                        }
                    }, 500);
                }
                else {
                    waiting_for_message = false;
                }
                var _chatContainer = $(me.config.chatContainer).find('.chat-container');
                if (msgData.message && msgData.message[0] && msgData.message[0].cInfo && msgData.message[0].cInfo.attachments) {
                    extension = strSplit(msgData.message[0].cInfo.attachments[0].fileName);
                }
                if (msgData.message && msgData.message[0] && msgData.message[0].component && msgData.message[0].component.payload && msgData.message[0].component.payload.url) {
                    extension = strSplit(msgData.message[0].component.payload.url);
                    _extractedFileName = msgData.message[0].component.payload.name ? msgData.message[0].component.payload.name : msgData.message[0].component.payload.url.replace(/^.*[\\\/]/, '');
                    // _extractedFileName = msgData.message[0].component.payload.url.replace(/^.*[\\\/]/, '');
                    if(msgData.message[0].component.payload.fileName){
                        _extractedFileName=msgData.message[0].component.payload.fileName;
                        extension=strSplit(_extractedFileName);
                    }
                }
                if (msgData.message && msgData.message[0] && msgData.message[0].component && msgData.message[0].component.payload && msgData.message[0].component.payload.fileUrl) {
                    extension = strSplit(msgData.message[0].component.payload.fileUrl);
                    _extractedFileName = msgData.message[0].component.payload.fileUrl.replace(/^.*[\\\/]/, '');
                }

                /* checking for matched custom template */
                messageHtml = me.customTemplateObj.renderMessage(msgData);
                if (messageHtml === '' && msgData && msgData.message && msgData.message[0]) {

                    if (msgData.message[0] && msgData.message[0].component && msgData.message[0].component.payload && msgData.message[0].component.payload.template_type == "button") {
                        messageHtml = $(me.getChatTemplate("templatebutton")).tmpl({
                            'msgData': msgData,
                            'helpers': helpers,
                            'extension': extension
                        });
                    }
                    else if (msgData.message[0] && msgData.message[0].component && msgData.message[0].component.payload && msgData.message[0].component.payload.template_type == "wait_for_response") {// to show typing indicator until next response receive
                        waiting_for_message = true;
                        $('.typingIndicatorContent').css('display', 'block');
                        return;
                    }
                    else if (msgData.message[0] && msgData.message[0].component && msgData.message[0].component.payload && msgData.message[0].component.payload.template_type == "list") {
                        messageHtml = $(me.getChatTemplate("templatelist")).tmpl({
                            'msgData': msgData,
                            'helpers': helpers,
                            'extension': extension
                        });
                    }
                    else if (msgData.message[0] && msgData.message[0].component && msgData.message[0].component.payload && msgData.message[0].component.payload.template_type == "quick_replies") {
                        messageHtml = $(me.getChatTemplate("templatequickreply")).tmpl({
                            'msgData': msgData,
                            'helpers': helpers,
                            'extension': extension
                        });
                        setTimeout(function () {
                            var evt = document.createEvent("HTMLEvents");
                            evt.initEvent('resize', true, false);
                            window.dispatchEvent(evt);
                        }, 150);
                    }
                    else if (msgData.message[0] && msgData.message[0].component && msgData.message[0].component.payload && msgData.message[0].component.payload.template_type == "carousel") {
                        messageHtml = $(me.getChatTemplate("carouselTemplate")).tmpl({
                            'msgData': msgData,
                            'helpers': helpers,
                            'extension': extension
                        });

                        setTimeout(function () {
                            $('.carousel:last').addClass("carousel" + carouselTemplateCount);
                            var count = $(".carousel" + carouselTemplateCount).children().length;
                            if (count >= 1) {
                                var carouselOneByOne = new PureJSCarousel({
                                    carousel: '.carousel' + carouselTemplateCount,
                                    slide: '.slide',
                                    oneByOne: true
                                });
                                $('.carousel' + carouselTemplateCount).parent().show();
                                $('.carousel' + carouselTemplateCount).attr('style', 'height: 100% !important');
                                carouselEles.push(carouselOneByOne);
                            }
                            //window.dispatchEvent(new Event('resize'));
                            var evt = document.createEvent("HTMLEvents");
                            evt.initEvent('resize', true, false);
                            window.dispatchEvent(evt);
                            carouselTemplateCount += 1;
                            _chatContainer.animate({
                                scrollTop: _chatContainer.prop("scrollHeight")
                            }, 0);
                        });
                    }
                    else if (msgData.message[0] && msgData.message[0].component && msgData.message[0].component.payload && (msgData.message[0].component.type == "image" || msgData.message[0].component.type == "audio" || msgData.message[0].component.type == "video" || msgData.message[0].component.type == "link")) {
                        messageHtml = $(me.getChatTemplate("templateAttachment")).tmpl({
                            'msgData': msgData,
                            'helpers': helpers,
                            'extension': extension,
                            'extractedFileName': _extractedFileName
                        });
                    }
                    else if (msgData.message[0] && msgData.message[0].component && msgData.message[0].component.payload && msgData.message[0].component.payload.template_type == "table") {
                        messageHtml = $(me.getChatTemplate("tableChartTemplate")).tmpl({
                            'msgData': msgData,
                            'helpers': helpers,
                            'extension': extension
                        });
                        setTimeout(function () {
                            var acc = document.getElementsByClassName("accordionRow");
                            for (var i = 0; i < acc.length; i++) {
                                acc[i].onclick = function () {
                                    this.classList.toggle("open");
                                }
                            }
                            var showFullTableModal = document.getElementsByClassName("showMore");
                            for (var i = 0; i < showFullTableModal.length; i++) {
                                showFullTableModal[i].onclick = function () {
                                    var parentli = this.parentNode.parentElement;
                                    $("#dialog").empty();
                                    $("#dialog").html($(parentli).find('.tablechartDiv').html());
                                    $(".hello").clone().appendTo(".goodbye");
                                    var modal = document.getElementById('myPreviewModal');
                                    $(".largePreviewContent").empty();
                                    //$(".largePreviewContent").html($(parentli).find('.tablechartDiv').html());
                                    $(parentli).find('.tablechartDiv').clone().appendTo(".largePreviewContent");
                                    modal.style.display = "block";
                                    // Get the <span> element that closes the modal
                                    var span = document.getElementsByClassName("closeElePreview")[0];
                                    // When the user clicks on <span> (x), close the modal
                                    span.onclick = function () {
                                        modal.style.display = "none";
                                        $(".largePreviewContent").removeClass("addheight");
                                    }

                                }
                            }
                        }, 350);

                    }
                    else if (msgData.message[0] && msgData.message[0].component && msgData.message[0].component.payload && msgData.message[0].component.payload.template_type == "mini_table") {
                        if (msgData.message[0].component.payload.layout == "horizontal") {
                            messageHtml = $(me.getChatTemplate("miniTableHorizontalTemplate")).tmpl({
                                'msgData': msgData,
                                'helpers': helpers,
                                'extension': extension
                            });
                            setTimeout(function () {
                                $('.carousel:last').addClass("carousel" + carouselTemplateCount);
                                var count = $(".carousel" + carouselTemplateCount).children().length;
                                if (count > 1) {
                                    var carouselOneByOne = new PureJSCarousel({
                                        carousel: '.carousel' + carouselTemplateCount,
                                        slide: '.slide',
                                        oneByOne: true
                                    });
                                    $('.carousel' + carouselTemplateCount).parent().show();
                                    $('.carousel' + carouselTemplateCount).attr('style', 'height: 100% !important');
                                    carouselEles.push(carouselOneByOne);
                                }
                                //window.dispatchEvent(new Event('resize'));
                                var evt = document.createEvent("HTMLEvents");
                                evt.initEvent('resize', true, false);
                                window.dispatchEvent(evt);
                                carouselTemplateCount += 1;
                                _chatContainer.animate({
                                    scrollTop: _chatContainer.prop("scrollHeight")
                                }, 0);
                            });
                        } else {
                            messageHtml = $(me.getChatTemplate("miniTableChartTemplate")).tmpl({
                                'msgData': msgData,
                                'helpers': helpers,
                                'extension': extension
                            });
                        }
                    }

                    else if (msgData.message[0] && msgData.message[0].component && msgData.message[0].component.payload && msgData.message[0].component.payload.template_type == "multi_select") {
                        messageHtml = $(this.getChatTemplate("checkBoxesTemplate")).tmpl({
                            'msgData': msgData,
                            'helpers': helpers,
                            'extension': extension
                        });
                    }
                    else if (msgData.message[0] && msgData.message[0].component && msgData.message[0].component.payload && msgData.message[0].component.payload.template_type == "like_dislike") {
                        messageHtml = $(this.getChatTemplate("likeDislikeTemplate")).tmpl({
                            'msgData': msgData,
                            'helpers': helpers,
                            'extension': extension
                        });
                    }

                    else if (msgData.message[0] && msgData.message[0].component && msgData.message[0].component.payload && msgData.message[0].component.payload.template_type == "piechart") {
                        messageHtml = $(me.getChatTemplate("pieChartTemplate")).tmpl({
                            'msgData': msgData,
                            'helpers': helpers,
                            'extension': extension
                        });
                        //storing the type of the graph to be displayed.
                        if (me.config.graphLib === "google") {
                            setTimeout(function () {
                                google.charts.load('current', { 'packages': ['corechart'] });
                                google.charts.setOnLoadCallback(drawChart);
                                function drawChart() {
                                    var data = new google.visualization.DataTable();
                                    data.addColumn('string', 'Task');
                                    data.addColumn('number', 'Hours per Day');
                                    if (msgData.message[0].component.payload.elements && msgData.message[0].component.payload.elements[0].displayValue) {
                                        data.addColumn({ type: 'string', role: 'tooltip' });
                                    }
                                    var pieChartData = [];
                                    var piechartElements = msgData.message[0].component.payload.elements;
                                    for (var i = 0; i < piechartElements.length; i++) {
                                        var arr = [piechartElements[i].title + " \n" + piechartElements[i].value];
                                        arr.push(parseFloat(piechartElements[i].value));
                                        if (piechartElements[i].displayValue) {
                                            arr.push(piechartElements[i].displayValue);
                                        }
                                        pieChartData.push(arr);
                                    }
                                    data.addRows(pieChartData);
                                    var options = {
                                        chartArea: {
                                            left: "3%",
                                            top: "3%",
                                            height: "94%",
                                            width: "94%"
                                        },
                                        pieSliceTextStyle: {},
                                        colors: window.chartColors,
                                        legend: {
                                            textStyle: {
                                                color: '#b3bac8'
                                            }
                                        }
                                    };

                                    if (piechartElements.length === 1) { // if only element, then deault donut chart
                                        options.pieHole = 0.5;
                                        options.pieSliceTextStyle.color = "black";
                                    }
                                    if (msgData.message[0].component.payload.pie_type) { //chart based on user requireent
                                        if (msgData.message[0].component.payload.pie_type === "donut") {
                                            options.pieHole = 0.6;
                                            options.pieSliceTextStyle.color = "black";
                                            options.legend.position = "none";
                                        }
                                        else if (msgData.message[0].component.payload.pie_type === "donut_legend") {
                                            options.pieHole = 0.6;
                                            options.pieSliceTextStyle.color = "black";
                                        }
                                    }
                                    var _piechartObj = { 'id': 'piechart' + msgData.messageId, 'data': data, 'options': options, 'type': 'piechart' };
                                    available_charts.push(_piechartObj);
                                    var container = document.getElementById('piechart' + msgData.messageId);
                                    var chart = new google.visualization.PieChart(container);
                                    chart.draw(data, options);
                                    //window.PieChartCount = window.PieChartCount + 1;
                                }
                            }, 150);
                        }
                        else if (graphLibGlob === "d3") {
                            if (msgData.message[0].component.payload.pie_type === undefined) {
                                msgData.message[0].component.payload.pie_type = 'regular';
                            }
                            if (msgData.message[0].component.payload.pie_type) {
                                // define data
                                dimens = {};
                                dimens.width = 300;
                                dimens.height = 200;
                                dimens.legendRectSize = 10;
                                dimens.legendSpacing = 2.4;
                                if (msgData.message[0].component.payload.pie_type === "regular") {
                                    setTimeout(function () {
                                        var _piechartObj = { 'id': 'piechart' + msgData.messageId, 'data': msgData, 'type': 'regular' };
                                        available_charts.push(_piechartObj);
                                        KoreGraphAdapter.drawD3Pie(msgData, dimens, '#piechart' + msgData.messageId, 12);
                                        //window.PieChartCount = window.PieChartCount + 1;
                                    }, 150);
                                }
                                else if (msgData.message[0].component.payload.pie_type === "donut") {
                                    setTimeout(function () {
                                        var _piechartObj = { 'id': 'piechart' + msgData.messageId, 'data': msgData, 'type': 'donut' };
                                        available_charts.push(_piechartObj);
                                        KoreGraphAdapter.drawD3PieDonut(msgData, dimens, '#piechart' + msgData.messageId, 12, 'donut');
                                        //window.PieChartCount = window.PieChartCount + 1;
                                    }, 150);
                                }
                                else if (msgData.message[0].component.payload.pie_type === "donut_legend") {
                                    setTimeout(function () {
                                        var _piechartObj = { 'id': 'piechart' + msgData.messageId, 'data': msgData, 'type': 'donut_legend' };
                                        available_charts.push(_piechartObj);
                                        KoreGraphAdapter.drawD3PieDonut(msgData, dimens, '#piechart' + msgData.messageId, 12, 'donut_legend');
                                        //window.PieChartCount = window.PieChartCount + 1;
                                    }, 150);
                                }
                            }
                        }
                        setTimeout(function () {
                            $('.chat-container').scrollTop($('.chat-container').prop('scrollHeight'));
                            handleChartOnClick();
                        }, 200);
                    }
                    else if (msgData.message[0] && msgData.message[0].component && msgData.message[0].component.payload && msgData.message[0].component.payload.template_type == "barchart") {
                        messageHtml = $(me.getChatTemplate("barchartTemplate")).tmpl({
                            'msgData': msgData,
                            'helpers': helpers,
                            'extension': extension
                        });
                        if (graphLibGlob === "google") {
                            setTimeout(function () {
                                google.charts.load('current', { packages: ['corechart', 'bar'] });
                                google.charts.setOnLoadCallback(drawChart);
                                function drawChart() {
                                    var customToolTips = false;
                                    var data = new google.visualization.DataTable();
                                    data.addColumn("string", 'y');
                                    //adding legend labels
                                    for (var i = 0; i < msgData.message[0].component.payload.elements.length; i++) {
                                        var currEle = msgData.message[0].component.payload.elements[i];
                                        data.addColumn('number', currEle.title);
                                        //checking for display values ( custom tooltips)
                                        if (currEle.displayValues && currEle.displayValues.length) {
                                            data.addColumn({ type: 'string', role: 'tooltip' });
                                            customToolTips = true;
                                        }
                                    }

                                    //filling rows
                                    var totalLines = msgData.message[0].component.payload.elements.length;
                                    for (var i = 0; i < msgData.message[0].component.payload.X_axis.length; i++) {
                                        var arr = [];
                                        arr.push(msgData.message[0].component.payload.X_axis[i]);
                                        for (var j = 0; j < totalLines; j++) {
                                            arr.push(parseFloat(msgData.message[0].component.payload.elements[j].values[i]));
                                            if (customToolTips) {
                                                arr.push(msgData.message[0].component.payload.elements[j].displayValues[i]);
                                            }
                                        }
                                        data.addRow(arr);
                                    }
                                    var options = {
                                        chartArea: {
                                            height: "70%",
                                            width: "80%"
                                        },
                                        legend: {
                                            position: 'top',
                                            alignment: 'end',
                                            maxLines: 3,
                                            textStyle: {
                                                color: '#b3bac8'
                                            }
                                        },
                                        hAxis: {
                                            gridlines: {
                                                color: 'transparent'
                                            },
                                            textStyle: {
                                                color: '#b3bac8'
                                            }
                                        },
                                        vAxis: {
                                            gridlines: {
                                                color: 'transparent'
                                            },
                                            textStyle: {
                                                color: '#b3bac8'
                                            },
                                            baselineColor: 'transparent'
                                        },
                                        animation: {
                                            duration: 500,
                                            easing: 'out',
                                            startup: true
                                        },
                                        bar: { groupWidth: "25%" },
                                        colors: window.chartColors
                                    };

                                    //horizontal chart, then increase size of bard
                                    if (msgData.message[0].component.payload.direction !== 'vertical') {
                                        options.bar.groupWidth = "45%";
                                        options.hAxis.baselineColor = '#b3bac8';
                                    }
                                    //stacked chart
                                    if (msgData.message[0].component.payload.stacked) {
                                        options.isStacked = true;
                                        options.bar.groupWidth = "25%";
                                    }
                                    var _barchartObj = { 'id': 'barchart' + msgData.messageId, 'direction': msgData.message[0].component.payload.direction, 'data': data, 'options': options, 'type': 'barchart' };
                                    available_charts.push(_barchartObj);
                                    var container = document.getElementById('barchart' + msgData.messageId);
                                    var chart = null;
                                    if (msgData.message[0].component.payload.direction === 'vertical') {
                                        chart = new google.visualization.ColumnChart(container);
                                    }
                                    else {
                                        chart = new google.visualization.BarChart(container);
                                    }
                                    chart.draw(data, options);
                                    //window.barchartCount = window.barchartCount + 1;
                                }
                            }, 150);
                        }
                        else if (graphLibGlob === "d3") {
                            var dimens = {};
                            dimens.outerWidth = 350;
                            dimens.outerHeight = 300;
                            dimens.innerHeight = 200;
                            dimens.legendRectSize = 15;
                            dimens.legendSpacing = 4;
                            if (msgData.message[0].component.payload.direction === undefined) {
                                msgData.message[0].component.payload.direction = 'horizontal';
                            }
                            if (msgData.message[0].component.payload.direction === 'horizontal' && !msgData.message[0].component.payload.stacked) {
                                setTimeout(function () {
                                    dimens.innerWidth = 180;
                                    var _barchartObj = { 'id': 'Legend_barchart' + msgData.messageId, 'data': msgData, 'type': 'barchart' };
                                    available_charts.push(_barchartObj);
                                    KoreGraphAdapter.drawD3barHorizontalbarChart(msgData, dimens, '#barchart' + msgData.messageId, 12);
                                    // window.barchartCount = window.barchartCount + 1;
                                }, 250);
                            }
                            else if (msgData.message[0].component.payload.direction === 'vertical' && msgData.message[0].component.payload.stacked) {
                                setTimeout(function () {
                                    dimens.outerWidth = 350;
                                    dimens.innerWidth = 270;
                                    var _barchartObj = { 'id': 'barchart' + msgData.messageId, 'data': msgData, 'type': 'stackedBarchart' };
                                    available_charts.push(_barchartObj);
                                    KoreGraphAdapter.drawD3barVerticalStackedChart(msgData, dimens, '#barchart' + msgData.messageId, 12);
                                    // window.barchartCount = window.barchartCount + 1;
                                }, 250);
                            }

                            else if (msgData.message[0].component.payload.direction === 'horizontal' && msgData.message[0].component.payload.stacked) {
                                setTimeout(function () {
                                    dimens.innerWidth = 180;
                                    var _barchartObj = { 'id': 'barchart' + msgData.messageId, 'data': msgData, 'type': 'stackedBarchart' };
                                    available_charts.push(_barchartObj);
                                    KoreGraphAdapter.drawD3barStackedChart(msgData, dimens, '#barchart' + msgData.messageId, 12);
                                    // window.barchartCount = window.barchartCount + 1;
                                }, 250);
                            }
                            else if (msgData.message[0].component.payload.direction === 'vertical' && !msgData.message[0].component.payload.stacked) {
                                setTimeout(function () {
                                    dimens.innerWidth = 240;
                                    var _barchartObj = { 'id': 'barchart' + msgData.messageId, 'data': msgData, 'type': 'barchart' };
                                    available_charts.push(_barchartObj);
                                    KoreGraphAdapter.drawD3barChart(msgData, dimens, '#barchart' + msgData.messageId, 12);
                                    // window.barchartCount = window.barchartCount + 1;
                                }, 250);
                            }
                        }
                        setTimeout(function () {
                            $('.chat-container').scrollTop($('.chat-container').prop('scrollHeight'));
                            handleChartOnClick();
                        }, 300);
                    }
                    else if (msgData.message[0] && msgData.message[0].component && msgData.message[0].component.payload && msgData.message[0].component.payload.template_type == "linechart") {
                        messageHtml = $(me.getChatTemplate("linechartTemplate")).tmpl({
                            'msgData': msgData,
                            'helpers': helpers,
                            'extension': extension
                        });
                        if (graphLibGlob === "google") {
                            setTimeout(function () {
                                google.charts.load('current', { packages: ['corechart', 'line'] });
                                google.charts.setOnLoadCallback(drawChart);
                                function drawChart() {
                                    var customToolTips = false;
                                    var data = new google.visualization.DataTable();
                                    data.addColumn("string", 'y');
                                    //adding legend labels
                                    for (var i = 0; i < msgData.message[0].component.payload.elements.length; i++) {
                                        var currEle = msgData.message[0].component.payload.elements[i];
                                        data.addColumn('number', currEle.title);
                                        //checking for display values ( custom tooltips)
                                        if (currEle.displayValues && currEle.displayValues.length) {
                                            data.addColumn({ type: 'string', role: 'tooltip' });
                                            customToolTips = true;
                                        }
                                    }

                                    //filling rows
                                    var totalLines = msgData.message[0].component.payload.elements.length;
                                    for (var i = 0; i < msgData.message[0].component.payload.X_axis.length; i++) {
                                        var arr = [];
                                        arr.push(msgData.message[0].component.payload.X_axis[i]);
                                        for (var j = 0; j < totalLines; j++) {
                                            arr.push(parseFloat(msgData.message[0].component.payload.elements[j].values[i]));
                                            if (customToolTips) {
                                                arr.push(msgData.message[0].component.payload.elements[j].displayValues[i]);
                                            }
                                        }
                                        data.addRow(arr);
                                    }

                                    var options = {
                                        curveType: 'function',
                                        chartArea: {
                                            height: "70%",
                                            width: "80%"
                                        },
                                        legend: {
                                            position: 'top',
                                            alignment: 'end',
                                            maxLines: 3,
                                            textStyle: {
                                                color: "#b3bac8"
                                            }
                                        },
                                        hAxis: {
                                            gridlines: {
                                                color: 'transparent'
                                            },
                                            textStyle: {
                                                color: "#b3bac8"
                                            }
                                        },
                                        vAxis: {
                                            gridlines: {
                                                color: 'transparent'
                                            },
                                            textStyle: {
                                                color: '#b3bac8'
                                            },
                                            baselineColor: 'transparent'
                                        },
                                        lineWidth: 3,
                                        animation: {
                                            duration: 500,
                                            easing: 'out',
                                            startup: true
                                        },
                                        colors: window.chartColors
                                    };
                                    var lineChartObj = { 'id': 'linechart' + msgData.messageId, 'data': data, 'options': options, 'type': 'linechart' };
                                    available_charts.push(lineChartObj);
                                    var container = document.getElementById('linechart' + msgData.messageId);

                                    var chart = new google.visualization.LineChart(container);
                                    chart.draw(data, options);
                                    //window.linechartCount = window.linechartCount + 1;
                                }
                            }, 150);
                        }
                        else if (graphLibGlob === "d3") {
                            setTimeout(function () {
                                var dimens = {};
                                dimens.outerWidth = 380;
                                dimens.outerHeight = 350;
                                dimens.innerWidth = 230;
                                dimens.innerHeight = 250;
                                dimens.legendRectSize = 15;
                                dimens.legendSpacing = 4;
                                var _linechartObj = { 'id': 'linechart' + msgData.messageId, 'data': msgData, 'type': 'linechart' };
                                available_charts.push(_linechartObj);
                                //  KoreGraphAdapter.drawD3lineChart(msgData, dimens, '#linechart'+window.linechartCount, 12);
                                KoreGraphAdapter.drawD3lineChartV2(msgData, dimens, '#linechart' + msgData.messageId, 12);
                                //window.linechartCount = window.linechartCount + 1;
                            }, 250);
                            /*                    setTimeout(function(){
                                                    $('.chat-container').scrollTop($('.chat-container').prop('scrollHeight'));
                                                    handleChartOnClick();
                                                },300);*/

                        }
                        setTimeout(function () {
                            $('.chat-container').scrollTop($('.chat-container').prop('scrollHeight'));
                            handleChartOnClick();
                        }, 200);
                    }
                    else if (msgData.message[0] && msgData.message[0].component && msgData.message[0].component.payload && msgData.message[0].component.payload.formData && msgData.message[0].component.payload.formData.renderType==='inline'){
                        msgData.renderType = 'inline';
                        messageHtml = me.renderWebForm(msgData,true);
                    }
                    else if(msgData.message[0] && msgData.message[0].component && msgData.message[0].component.payload && msgData.message[0].component.payload.template_type == "live_agent"){                      
                        
                        msgData.fromAgent=true;

                        if(msgData.message[0].component && msgData.message[0].component.payload){
                            msgData.message[0].cInfo.body = msgData.message[0].component.payload.text || "";
                        }
                        messageHtml = $(me.getChatTemplate("message")).tmpl({
                            'msgData': msgData,
                            'helpers': helpers,
                            'extension': extension
                        });
                    }
                    else if (msgData.message[0] && msgData.message[0].component && msgData.message[0].component.payload && (msgData.message[0].component.payload.template_type == "daterange"||msgData.message[0].component.payload.template_type == "dateTemplate"||(msgData.message[0].cInfo.body && msgData.message[0].cInfo.body.indexOf && msgData.message[0].cInfo.body.indexOf('clockPicker') > -1))) {
                        if(chatContainerConfig && chatContainerConfig.pickerMainConfig){
                            var pickerConfig =  {};
                            pickerConfig= chatContainerConfig.pickerMainConfig;
                            if (msgData.message[0].component.payload.template_type == "daterange") {
                                msgData.message[0].cInfo.body = msgData.message[0].component.payload.text_message;
                                pickerConfig[1].dateRangeConfig.format = msgData.message[0].component.payload.format;
                                pickerConfig[1].dateRangeConfig.startDate = msgData.message[0].component.payload.startDate;
                                pickerConfig[1].dateRangeConfig.endDate = msgData.message[0].component.payload.endDate;
                                if (msgData.message[0].component.payload.title) {
                                    pickerConfig[1].daterangepicker.title = msgData.message[0].component.payload.title;
                                }
                                if (msgData.message[0].component.payload.delimiter) {
                                    pickerConfig[1].dateRangeConfig.delimiter = msgData.message[0].component.payload.delimiter;
                                }
                                // $('.typingIndicatorContent').css('display', 'block');
                                if(!msgData.fromHistory){
                                    KorePickers.prototype.showDateRangePicker(pickerConfig);
                                }
                                // $('.typingIndicatorContent').css('display', 'none');
                            }
                            console.log(JSON.stringify(msgData.message))
                            if (msgData.message[0].component.payload.template_type == "dateTemplate") {
                                msgData.message[0].cInfo.body = msgData.message[0].component.payload.text_message;
                                pickerConfig[1].dateConfig.format = msgData.message[0].component.payload.format;
                                pickerConfig[1].dateConfig.startDate = msgData.message[0].component.payload.startDate;
                                pickerConfig[1].dateConfig.showdueDate = msgData.message[0].component.payload.showdueDate;
                                pickerConfig[1].dateConfig.endDate = msgData.message[0].component.payload.endDate;
                                // pickerConfig.dateConfig.selectedDate="Selected Date";
                                // pickerConfig.dateConfig.selectedDate=msgData.message[0].component.payload.selectedDate;
                                // if(msgData.message[0].component.payload.showdueDate){
                    
                                //     pickerConfig.dateConfig.paymentDue="Payment Due Date";
                    
                                //     pickerConfig.dateConfig.paymentDue=msgData.message[0].component.payload.paymentDue;
                                // }
                    
                                if (msgData.message[0].component.payload.title) {
                                    pickerConfig[1].datepicker.title = msgData.message[0].component.payload.title;
                                }
                    
                                // $('.typingIndicatorContent').css('display', 'block');
                                if(!msgData.fromHistory){
                                    KorePickers.prototype.showDatePicker(pickerConfig);
                                }
                                // $('.typingIndicatorContent').css('display', 'none');
                            }
                            if (msgData.message[0].cInfo.body.indexOf('clockPicker') > -1) {
                                if(!msgData.fromHistory){
                                    KorePickers.prototype.showClockPicker(pickerConfig);
                                }
                            }
                        }

                        //to render message bubble even in datepickers case
                        messageHtml = $(me.getChatTemplate("message")).tmpl({
                            'msgData': msgData,
                            'helpers': helpers,
                            'extension': extension
                        });
                    } else {
                        messageHtml = $(me.getChatTemplate("message")).tmpl({
                            'msgData': msgData,
                            'helpers': helpers,
                            'extension': extension,
                            'extractedFileName': _extractedFileName
                        });
                    }

                    //For Agent presence
                    if (msgData.type === "bot_response") {
                        if (msgData.message[0] && msgData.message[0].component && msgData.message[0].component.payload && msgData.message[0].component.payload.template_type == "live_agent") {
                            $('.kore-chat-window').addClass('agent-on-chat');
                        } else {
                            $('.kore-chat-window').removeClass('agent-on-chat');
                        }

                    }
                }
                _chatContainer.find('li').attr('aria-live','off');
                //_chatContainer.find('li').attr('aria-hidden','true');//for mac voiceover bug with aria-live
   
                if(msgData && msgData.message[0] && msgData.message[0].component && msgData.message[0].component.payload && msgData.message[0].component.payload.sliderView && (!msgData.message[0].component.payload.fromHistory && !msgData.fromHistory)){
                    bottomSliderAction('show',messageHtml);
                }else{
                    //ignore message(msgId) if it is already in viewport                     
                    if ($('.kore-chat-window .chat-container li#' + msgData.messageId).length < 1 || (msgData.renderType==='inline')) {
                        if (msgData.type === "bot_response" && msgData.fromHistorySync) {
                            var msgTimeStamps = [];
                            var msgEles = $('.kore-chat-window .chat-container>li');
                            if (msgEles.length) {
                                msgEles.each(function (i, ele) {
                                    msgTimeStamps.push(parseInt($(ele).attr('data-time')));
                                });
                                var insertAtIndex = findSortedIndex(msgTimeStamps, msgData.createdOnTimemillis);

                                if (insertAtIndex > 0) {
                                    var insertAfterEle = msgEles[insertAtIndex];
                                    if (insertAfterEle) {
                                        $(messageHtml).insertBefore(insertAfterEle);
                                    } else {
                                        _chatContainer.append(messageHtml);
                                    }
                                } else {
                                    _chatContainer.prepend(messageHtml);
                                }
                            } else {
                                _chatContainer.append(messageHtml);
                            }
                        } else {
                            _chatContainer.append(messageHtml);
                        }
                    }
                }
                me.handleImagePreview();

                //me.formatMessages(messageHtml);
                if(me.chatPSObj && me.chatPSObj.update){
                    me.chatPSObj.update()
                }
                _chatContainer.animate({
                    scrollTop: _chatContainer.prop("scrollHeight")
                }, 100);
                if (msgData.type === "bot_response" && me.isTTSOn && me.config.isTTSEnabled && !me.minimized && !me.historyLoading) {
                    if(msgData.message[0] && msgData.message[0].component && msgData.message[0].component.payload && msgData.message[0].component.payload.template_type === "live_agent" && msgData.message[0].component.payload.text){
						_txtToSpeak = msgData.message[0].component.payload.text;
					} else if (msgData.message[0] && msgData.message[0].component && typeof msgData.message[0].component != 'object') { // agent transfer waiting message speaking
                        _txtToSpeak = msgData.message[0].component;
                    } else if (msgData.message[0] && msgData.message[0].component && msgData.message[0].component.type === "template") {
                        _txtToSpeak = '';
                    }else {
                        try {
			    // pallavi dot 27_02_2025
                            // _txtToSpeak = msgData.message[0].component.payload.text ? msgData.message[0].component.payload.text.replace(/\r?\n/g, ". .") : "";
			    _txtToSpeak = msgData.message[0].component.payload.text ? msgData.message[0].component.payload.text.replace(/\r?\n/g, ". ").replace(/\.{2,}/g, ".").replace(/\.$/, " "): "";
                            // pallavi dot 27_02_2025
                            _txtToSpeak = helpers.checkMarkdowns(_txtToSpeak);
                            // replacing extra new line or line characters
                            _txtToSpeak = _txtToSpeak.replace('___', '<hr/>');
                            _txtToSpeak = _txtToSpeak.replace('---', '<hr/>');
                        } catch (e) {
                            _txtToSpeak = '';
                        }
                    }
                    if (msgData.message[0].component && msgData.message[0].component.payload && msgData.message[0].component.payload.speech_hint) {
                        _txtToSpeak = msgData.message[0].component.payload.speech_hint;
                    }
        // pallavi azure 13_02_2025 commented
        //             if (me.config.ttsInterface&&me.config.ttsInterface==="webapi") {
		// //hoonartek kore customization for mic on off
        //                 _txtToSpeak=sortSpeakText(_txtToSpeak,msgData)
        //         //hoonartek kore customization for mic on off
        //                 _ttsConnection = me.speakWithWebAPI(_txtToSpeak);
        //             }else if(me.config.ttsInterface && me.config.ttsInterface==="awspolly"){
        //                 if(!window.speakTextWithAWSPolly){
        //                     console.warn("Please uncomment amazon polly files 'plugins/aws-sdk-2.668.0.min.js' and'plugins/kore-aws-polly.js' in index.html");
        //                 }else{
        //                     speakTextWithAWSPolly(_txtToSpeak);
        //                 }

        //             }else if (!_ttsConnection || (_ttsConnection.readyState && _ttsConnection.readyState !== 1)) {
        //                 try {
        //                     _ttsConnection = createSocketForTTS();
        //                 } catch (e) {
        //                     console.log(e);
        //                 }
        //             }
        //             else {
        //                 socketSendTTSMessage(_txtToSpeak);
        //             }
        //         }
        //     };      
        // pallavi azure 13_02_2025 commented   
        
        
                // pallavi azure 13_02_2025
                if (me.config.ttsInterface&&me.config.ttsInterface==="webapi") {
                    console.log("In ttsinterface if condition");
                    _txtToSpeak=sortSpeakText(_txtToSpeak,msgData);
                    _ttsConnection = me.speakWithWebAPI(_txtToSpeak);
                    }else if (me.config.ttsInterface === 'azure') {
                        _txtToSpeak=sortSpeakText(_txtToSpeak,msgData); //pallavi-azure
                        console.log("Azure by pallavi");
                        _ttsConnection = me.speakWithAzure(_txtToSpeak); // pallavi-azure
                    }
                    else if(me.config.ttsInterface && me.config.ttsInterface==="awspolly"){
                        if(!window.speakTextWithAWSPolly){
                            console.warn("Please uncomment amazon polly files 'plugins/aws-sdk-2.668.0.min.js' and'plugins/kore-aws-polly.js' in index.html");
                        }else{
                            speakTextWithAWSPolly(_txtToSpeak);
                        }

                    }else if (!_ttsConnection || (_ttsConnection.readyState && _ttsConnection.readyState !== 1)) {
                        try {
                            _ttsConnection = createSocketForTTS();
                        } catch (e) {
                            console.log(e);
                        }
                    }
                    else {
                        socketSendTTSMessage(_txtToSpeak);
                    }
                }
            }; 
           // pallavi azure 13_02_2025
                                    
            chatWindow.prototype.pushTorenderMessagesQueue = function (msgItem) {
                var me = this;
                if( !me.renderMessagesQueue){
                    me.renderMessagesQueue = [];
                }
                me.renderMessagesQueue.push(msgItem);
                if(!me.renderEventLoop){
                    me.startRenderEventLoop();
                }
            }
            chatWindow.prototype.startRenderEventLoop = function () {
                var me = this;
                me.msgRenderingProgress = false;
                me.renderEventLoop=setInterval(function () {
                    console.log("Running Event loop")
                    me.checkForMsgQueue();
                }, 500);
            }
            chatWindow.prototype.checkForMsgQueue = function () {
                var me = this;
                if (me.renderMessagesQueue.length && !me.msgRenderingProgress) {
                    var tempData = me.renderMessagesQueue.shift();
                    var delay = 0;
                    if (tempData.message && tempData.message.length && tempData.message[0] && tempData.message[0].component && tempData.message[0].component.payload && tempData.message[0].component.payload.renderDelay) {
                        delay = tempData.message[0].component.payload.renderDelay || 0;
                    }
                    me.msgRenderingProgress = true;
                    setTimeout(function () {
                        me.renderMessage(tempData);
                        me.msgRenderingProgress = false;
                    }, delay);
                }
                if(!me.renderMessagesQueue.length && !me.msgRenderingProgress && me.renderEventLoop){
                    clearTimeout(me.renderEventLoop);
                    me.renderEventLoop=false;
                }
            };    

            chatWindow.prototype.formatMessages = function (msgContainer) {
                /*adding target to a tags */
                $(msgContainer).find('a').attr('target', '_blank');
            };

            chatWindow.prototype.openPopup = function (link_url) {
                var me = this;
                var popupHtml = $(me.getChatTemplate("popup")).tmpl({
                    "link_url": link_url
                });
                $(me.config.container).append(popupHtml);
                me.popupOpened = true;
                me.bindIframeEvents($(popupHtml));
            };

            chatWindow.prototype.openExternalLink = function (link_url) {
                var me = this;
                var a = document.createElement("a");
                $(me.config.container).append(a);
                a.href = link_url;
                a.target = "_blank";
                a.rel = "noopener noreferrer";//for tabnabbing security attack
                a.click();
                $(a).remove();
            };

            chatWindow.prototype.getChatTemplate = function (tempType) {
                var chatFooterTemplate =
                '<div class="footerContainer pos-relative"> \
                    {{if userAgentIE}} \
                    <div role="textbox" class="chatInputBox inputCursor" aria-label="Message" aria-label="Message" contenteditable="true" placeholder="${botMessages.message}"></div> \
                    {{else}} \
                    <div role="textbox" class="chatInputBox" contenteditable="true" placeholder="${botMessages.message}" aria-label="${botMessages.message}"></div> \
                    <!-- hoonartek customization Add the send button with the image here -->\
	                <div class="sdkFooterIcon sendButtonContainer">\
	                    <button class="sendMessageButton">\
	                        <img src="data:image/png;base64,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" alt="Send" />\
	                    </button>\
	                </div>\
		{{/if}} \
                <div class="attachment"></div> \
                {{if isTTSEnabled}} \
                    <div class="sdkFooterIcon ttspeakerDiv ttsOff"> \
                        <button class="ttspeaker" title="Talk to speak"> \
                            <span class="ttsSpeakerEnable"></span> \
                            <span class="ttsSpeakerDisable"></span> \
                            <span style="display:none;"><audio id="ttspeaker" controls="" autoplay="" name="media"><source src="" type="audio/wav"></audio></span>\
                        </button> \
                    </div> \
                {{/if}} \
                {{if isSpeechEnabled}}\
                <div class="sdkFooterIcon microphoneBtn"> \
                    <button class="notRecordingMicrophone" title="Microphone On"> \
                        <i class="microphone"></i> \
                    </button> \
                    <button class="recordingMicrophone" title="Microphone Off" > \
                        <i class="microphone"></i> \
                        <span class="recordingGif"></span> \
                    </button> \
                    <div id="textFromServer"></div> \
                </div> \
                {{/if}}\
                <div class="sdkFooterIcon"> \
                    <button class="sdkAttachment attachmentBtn" title="${botMessages.attachmentText}"> \
                        <i class="paperclip"></i> \
                    </button> \
                    <input type="file" name="Attachment" class="filety" id="captureAttachmnts"> \
                </div> \
                {{if !(isSendButton)}}<div class="chatSendMsg">${botMessages.entertosend}</div>{{/if}} \
            </div>';

            var chatWindowTemplate = '<script id="chat_window_tmpl" type="text/x-jqury-tmpl"> \
                <div class="kore-chat-window droppable liteTheme-one"> \
                <div class="kr-wiz-menu-chat defaultTheme-kore">\
                </div>	\
                    <div class="minimized-title"></div> \
                    <div class="minimized"><span class="messages"></span></div> \
                    <div class="kore-chat-header"> \
                        <div id="botHeaderTitle" aria-labelledby="botHeaderTitle" class="header-title" title="${chatTitle}">${chatTitle}</div> \
                        <div class="chat-box-controls"> \
                            {{if botMessages.availableLanguages}}\
                                <select class="lang-selector" >\
                                    {{each(key, lang) botMessages.availableLanguages}} \
                                        <option  {{if botMessages.selectedLanguage===lang}}selected{{/if}} value="${lang}">${lang}</option>\
                                    {{/each}}\
                                </select>\
                            {{/if}}\
                            <button class="reload-btn" title="${botMessages.reconnectText}"><img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTNweCIgaGVpZ2h0PSIxNHB4IiB2aWV3Qm94PSIwIDAgMTMgMTQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjMgKDY3Mjk3KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5yZWxvYWQ8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iQXJ0Ym9hcmQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zNTcuMDAwMDAwLCAtMjQxLjAwMDAwMCkiIGZpbGw9IiM4QTk1OUYiIHN0cm9rZT0iIzhBOTU5RiI+CiAgICAgICAgICAgIDxnIGlkPSJyZWxvYWQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM1OC4wMDAwMDAsIDI0Mi4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMC44LDUuMjczNTc2NTggQzEwLjgsMi4zNjU3MTQyIDguMzc3NTg1NzEsMCA1LjQwMDAyMzg3LDAgQzIuNDIyNDYyMDMsMCAwLDIuMzY1NzE0MiAwLDUuMjczNTc2NTggQzAsNS40NDYzMTE0MiAwLjE0MzQwNjM1Myw1LjU4NjM1OTc2IDAuMzIwMjgyOTQyLDUuNTg2MzU5NzYgQzAuNDk3MTU5NTMsNS41ODYzNTk3NiAwLjY0MDU2NTg4Myw1LjQ0NjI4ODEgMC42NDA1NjU4ODMsNS4yNzM1NzY1OCBDMC42NDA1NjU4ODMsMi43MTA2NDc2NSAyLjc3NTY0MjI2LDAuNjI1NTg5NjY4IDUuNCwwLjYyNTU4OTY2OCBDOC4wMjQzNTc3NCwwLjYyNTU4OTY2OCAxMC4xNTk0MzQxLDIuNzEwNjcwOTYgMTAuMTU5NDM0MSw1LjI3MzU3NjU4IEMxMC4xNTk0MzQxLDcuODM2NDU4ODkgOC4wMjQzNTc3NCw5LjkyMTU0MDE4IDUuNCw5LjkyMTU0MDE4IEw0Ljg0NDMyNzI0LDkuOTIxNTQwMTggTDUuNjM4ODc1MzEsOS4wNTI5NzAwMyBDNS43NTY3MzczMyw4LjkyNDE1OTEyIDUuNzQ1MzAyMDYsOC43MjY0MDgxNiA1LjYxMzQwMjYsOC42MTEzMDYgQzUuNDgxNTAzMTMsOC40OTYyMDM4NSA1LjI3ODk4NjcyLDguNTA3Mzk0NjYgNS4xNjExNDg1Nyw4LjYzNjIwNTU2IEw0LjAyNTM1Njg4LDkuODc3ODAyNzYgQzMuODM5NDMyMzUsMTAuMDgxMDU1OSAzLjgzOTQzMjM1LDEwLjM4NzU5MDggNC4wMjUzNTY4OCwxMC41OTA4NDQgTDUuMTYxMTQ4NTcsMTEuODMyNDQxMiBDNS4yMjQ0MzY0NCwxMS45MDE2Mzc3IDUuMzEyMDc0OTgsMTEuOTM2ODQyMSA1LjQwMDExOTM3LDExLjkzNjg0MjEgQzUuNDc2MDYwMDQsMTEuOTM2ODQyMSA1LjU1MjMxMTA2LDExLjkxMDU5MDMgNS42MTM0MDI2LDExLjg1NzM0MDcgQzUuNzQ1MzI1OTQsMTEuNzQyMjM4NiA1Ljc1NjczNzMzLDExLjU0NDQ4NzYgNS42Mzg4NzUzMSwxMS40MTU2NzY3IEw0Ljg0NDMyNzI0LDEwLjU0NzEwNjUgTDUuNCwxMC41NDcxMDY1IEM4LjM3NzU4NTcxLDEwLjU0NzEwNjUgMTAuOCw4LjE4MTM5MjM0IDEwLjgsNS4yNzM1NzY1OCBaIiBpZD0iUGF0aCI+PC9wYXRoPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4="></button> \
                            <button class="minimize-btn" title="${botMessages.minimizeText}"><img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTRweCIgaGVpZ2h0PSIycHgiIHZpZXdCb3g9IjAgMCAxNCAyIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA1Mi4zICg2NzI5NykgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+bWluaW1pemU8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iQXJ0Ym9hcmQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zMjYuMDAwMDAwLCAtMjMzLjAwMDAwMCkiIGZpbGw9IiM4QTk1OUYiPgogICAgICAgICAgICA8ZyBpZD0ibWluaW1pemUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMyNi4wMDAwMDAsIDIzMy4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJQYXRoIiBwb2ludHM9IjAgMCAxMy45Mzk5OTk2IDAgMTMuOTM5OTk5NiAxLjk5OTk5OTk0IDAgMS45OTk5OTk5NCI+PC9wb2x5Z29uPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4="></button> \
                            <button class="expand-btn" title="${botMessages.expandText}"><img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTRweCIgaGVpZ2h0PSIxNHB4IiB2aWV3Qm94PSIwIDAgMTQgMTQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjMgKDY3Mjk3KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5leHBhbmQ8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iQXJ0Ym9hcmQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zMDUuMDAwMDAwLCAtMjUyLjAwMDAwMCkiIGZpbGw9IiM4QTk1OUYiIGZpbGwtcnVsZT0ibm9uemVybyI+CiAgICAgICAgICAgIDxnIGlkPSJleHBhbmQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMwNS4wMDAwMDAsIDI1Mi4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xLjg2NjY2NjY3LDkuMzMzMzMzMzMgTDAsOS4zMzMzMzMzMyBMMCwxNCBMNC42NjY2NjY2NywxNCBMNC42NjY2NjY2NywxMi4xMzMzMzMzIEwxLjg2NjY2NjY3LDEyLjEzMzMzMzMgTDEuODY2NjY2NjcsOS4zMzMzMzMzMyBaIE0wLDQuNjY2NjY2NjcgTDEuODY2NjY2NjcsNC42NjY2NjY2NyBMMS44NjY2NjY2NywxLjg2NjY2NjY3IEw0LjY2NjY2NjY3LDEuODY2NjY2NjcgTDQuNjY2NjY2NjcsMCBMMCwwIEwwLDQuNjY2NjY2NjcgWiBNMTIuMTMzMzMzMywxMi4xMzMzMzMzIEw5LjMzMzMzMzMzLDEyLjEzMzMzMzMgTDkuMzMzMzMzMzMsMTQgTDE0LDE0IEwxNCw5LjMzMzMzMzMzIEwxMi4xMzMzMzMzLDkuMzMzMzMzMzMgTDEyLjEzMzMzMzMsMTIuMTMzMzMzMyBaIE05LjMzMzMzMzMzLDAgTDkuMzMzMzMzMzMsMS44NjY2NjY2NyBMMTIuMTMzMzMzMywxLjg2NjY2NjY3IEwxMi4xMzMzMzMzLDQuNjY2NjY2NjcgTDE0LDQuNjY2NjY2NjcgTDE0LDAgTDkuMzMzMzMzMzMsMCBaIiBpZD0iU2hhcGUiPjwvcGF0aD4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"></button>\
                            <button class="close-btn" title="${botMessages.closeText}"><img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTRweCIgaGVpZ2h0PSIxNHB4IiB2aWV3Qm94PSIwIDAgMTQgMTQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjMgKDY3Mjk3KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5jbG9zZTwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJBcnRib2FyZCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTM0NC4wMDAwMDAsIC0yMjkuMDAwMDAwKSIgZmlsbD0iIzhBOTU5RiI+CiAgICAgICAgICAgIDxnIGlkPSJjbG9zZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzQ0LjAwMDAwMCwgMjI5LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9IlNoYXBlIiBwb2ludHM9IjE0IDEuNCAxMi42IDAgNyA1LjYgMS40IDAgMCAxLjQgNS42IDcgMCAxMi42IDEuNCAxNCA3IDguNCAxMi42IDE0IDE0IDEyLjYgOC40IDciPjwvcG9seWdvbj4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"></button> \
                        </div> \
                    </div> \
                    <div class="kore-chat-header historyLoadingDiv"> \
                        <div class="historyWarningTextDiv displayTable"> \
                            <span><img class = "loadingHistory" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAA7bUf6AAAAAXNSR0IArs4c6QAAAYZJREFUOBGtVLFKA0EQfbMiiERQEgjpRQt/wULB/opIFCuJvb1iKdprbbASDaa4L9DCX7BQ7CVwQcEggph13t7t3RlivMKBsDsz701mZ9+eYNjaNyX0e9saDmCxZJv1mrQ6zxDcayxEqXyOxmo/TzN5B2fXDbxFT7D2VH9rgK3FeV3pM848cTnLirQ6e0q60lw1lx+11bziHD5Oi1tcZVfAkyIYOYRM3GF69gHvr4uwX8sY2AMFVDwIkA3srLcFnAFb9B2I3GJqchNbQTcDJ7uLsIqPz0s91koS6WKmMm+SIfojRL8WIIuF+QdAlBSpks+ZBEkA7gijOkgBumGeR80sMLzG1OcMilgep3wDseWUxyEWsTnzmMKUr51ILw3wForYy2AhhSlfO3FKjGO8xiKWxymfgw1THnXAaxxnzMd68ajQuLcAeE1UnA5+K+R1kgmuS/4/KdY3xbdgB0fe/XMVs49m/Zi4uBPPiN/Qibrj5qJHl12+GU/7WYTRoe+J0xFlMOZ78g1n4achujvX7QAAAABJRU5ErkJggg=="></span> \
                            <p class="headerTip warningTip">${botMessages.loadinghistory}</p> \
                        </div> \
                    </div> \
                    <div class="kore-chat-header trainWarningDiv"> \
                        <div class="trainWarningTextDiv displayTable"> \
                            <span class="exclamation-circle"><i class="fa fa-exclamation-circle" aria-hidden="true"></i></span> \
                            <p class="headerTip warningTip">Something went wrong.Please try again later.</p> \
                        </div> \
                    </div> \
                    <div role="log" aria-live="polite" aria-atomic="true" class="kore-chat-body"> \
                        <div class="errorMsgBlock"> \
                        </div> \
                        <ul class="chat-container"></ul> \
                    </div> \
                    <div class="typingIndicatorContent"><div class="typingIndicator"></div><div class="movingDots"></div></div> \
                    <div class="kore-chat-footer disableFooter">' + chatFooterTemplate + '{{if isSendButton}}<div class="sendBtnCnt"><button class="sendButton disabled" type="button">${botMessages.sendText}</button></div>{{/if}}</div> \
                    <div id="myModal" class="modalImagePreview">\
                         <span class="closeImagePreview">&times;</span>\
                         <div class="image-preview">\
                            <img class="modal-content-imagePreview" id="img01">\
                         </div>\
                         <div id="caption"></div>\
                    </div>\
                    <div id="chatBodyModal" class="chatBodyModal animate-bottom">\
                    <span class="closeChatBodyModal" aira-label="Close Form" role="button" tabindex="0" aria-atomic="true"></span>\
                    <div id="closeInlineModel" class="loading_form iframeLoader"></div>\
                    <div id="chatBodyModalContent"></div>\
                    </div>\
                    <div id="myPreviewModal" class="modalImagePreview">\
                          <span class="closeElePreview">&times;</span>\
                          <div class="largePreviewContent"></div>\
                    </div>\
                    <div class="kr-wiz-content-chat defaultTheme-kore">\
                    </div>\
                </div> \
            </script>';

            var msgTemplate = '<script id="chat_message_tmpl" type="text/x-jqury-tmpl"> \
                    {{if msgData.message}} \
                        {{each(key, msgItem) msgData.message}} \
                            {{if msgItem.cInfo && msgItem.type === "text"}} \
                                <li data-time="${msgData.createdOnTimemillis}" id="${msgData.messageId || msgItem.clientMessageId}"\
                                     class="{{if msgData.type === "bot_response"}}fromOtherUsers{{else}}fromCurrentUser{{/if}}\ {{if msgData.icon}}with-icon{{/if}} {{if msgData.fromAgent}}from-agent{{/if}}"> \
                                    {{if msgData.icon}}<div aria-hidden="true"  aria-live="off" class="profile-photo"> <div class="user-account avtar" style="background-image:url(${msgData.icon})" title="User Avatar"></div> </div> {{/if}} \
                                    <div class="messageBubble" aria-live="assertive">\
                                        <div> \
                                            {{if msgData.type === "bot_response"}} \
                                                {{if msgItem.component  && msgItem.component.type =="error"}} \
                                                    <span style="color:${msgItem.component.payload.color}">{{html helpers.convertMDtoHTML(msgItem.component.payload.text, "bot",msgItem)}} </span>\
                                                    {{else}} \
                                                    {{if msgItem.component && msgItem.component.type == "message" && msgItem.component.payload.fileUrl}} \
                                                     <div class="msgCmpt botResponseAttachments" fileid="${msgItem.component.payload.fileUrl}"> \
                                                        <div class="uploadedFileIcon"> \
                                                          {{if extension[extension.length-1]=="xlsx" || extension[extension.length-1]=="xls" || extension[extension.length-1]=="docx" || extension[extension.length-1]=="doc" || extension[extension.length-1]=="pdf" || extension[extension.length-1]=="ppsx" || extension[extension.length-1]=="pptx" || extension[extension.length-1]=="ppt" || extension[extension.length-1]=="zip" || extension[extension.length-1]=="rar"}}\
                                                             <span class="icon cf-icon icon-files_${extension[extension.length-1]}"></span> \
                                                          {{else extension[extension.length-1]}}\
                                                             <span class="icon cf-icon icon-files_other_doc"></span> \
                                                          {{/if}}\
                                                        </div> \
                                                        <div class="botuploadedFileName">${extractedFileName}</div> \
                                                    </div> \
                                                    {{else}} \
                                                    <span class="simpleMsg" {{if msgData}}msgData="${JSON.stringify(msgData)}" {{/if}}>{{html helpers.convertMDtoHTML(msgItem.cInfo.body, "bot",msgItem)}}</span> \
                                                    {{/if}} \
                                                    {{if msgItem.component && msgItem.component.payload && msgItem.component.payload.videoUrl}}\
                                                        <div class="videoEle"><video width="300" controls><source src="${msgItem.component.payload.videoUrl}" type="video/mp4"></video></div>\
                                                    {{/if}}\
                                                    {{if msgItem.component && msgItem.component.payload && msgItem.component.payload.audioUrl}}\
                                                        <div class="audioEle"><audio width="180" controls><source src="${msgItem.component.payload.audioUrl}"></audio></div>\
                                                    {{/if}}\
                                                {{/if}} \
                                            {{else}} \
                                                {{if msgItem.cInfo.renderMsg && msgItem.cInfo.renderMsg !== ""}}\
                                                    {{html helpers.convertMDtoHTML(msgItem.cInfo.renderMsg, "user",msgItem)}} \
                                                {{else}}\
                                                    {{html helpers.convertMDtoHTML(msgItem.cInfo.body, "user",msgItem)}} \
                                                {{/if}}\
                                            {{/if}} \
                                        </div>\
                                        {{if msgItem.cInfo && msgItem.cInfo.emoji}} \
                                            <span class="emojione emojione-${msgItem.cInfo.emoji[0].code}">${msgItem.cInfo.emoji[0].title}</span> \
                                        {{/if}} \
                                        {{if msgItem.cInfo.attachments}} \
                                            <div class="msgCmpt attachments" fileid="${msgItem.cInfo.attachments[0].fileId}"> \
                                                <div class="uploadedFileIcon"> \
                                                    {{if msgItem.cInfo.attachments[0].fileType == "image"}} \
                                                        <span class="icon cf-icon icon-photos_active"></span> \
                                                    {{else msgItem.cInfo.attachments[0].fileType == "audio"}}\
                                                        <span class="icon cf-icon icon-files_audio"></span> \
                                                    {{else msgItem.cInfo.attachments[0].fileType == "video"}} \
                                                        <span class="icon cf-icon icon-video_active"></span> \
                                                    {{else}} \
                                                        {{if extension[1]=="xlsx" || extension[1]=="xls" || extension[1]=="docx" || extension[1]=="doc" || extension[1]=="pdf" || extension[1]=="ppsx" || extension[1]=="pptx" || extension[1]=="ppt" || extension[1]=="zip" || extension[1]=="rar"}}\
                                                            <span class="icon cf-icon icon-files_${extension[1]}"></span> \
                                                        {{else extension[1]}}\
                                                            <span class="icon cf-icon icon-files_other_doc"></span> \
                                                        {{/if}}\
                                                    {{/if}}\
                                                </div> \
                                                <div class="curUseruploadedFileName">${msgItem.cInfo.attachments[0].fileName}</div> \
                                            </div> \
                                        {{/if}} \
                                        {{if msgData.isError}} \
                                            <div class="errorMsg">Send Failed. Please resend.</div> \
                                        {{/if}} \
                                    </div> \
                                </li> \
                            {{/if}} \
                        {{/each}} \
                    {{/if}} \
		    {{if msgData.createdOn}}\
                                {{if msgData.type === "bot_response"}}\
                                    <div aria-live="off" class="extra-info" style="margin-right: 15px; margin-top: -10px; margin-bottom: 3px; margin-left: 48px; font-size: 12px; color: #8a959f;">\
                                    ${helpers.formatDate(msgData.createdOn)}</div>\
                                {{else}}\
                                    <div aria-live="off" class="extra-info" style="margin-right: 0px; margin-top: -10px; margin-bottom: 3px; margin-left: 345px; font-size: 12px; color: #8a959f;">\
                                    ${helpers.formatDate(msgData.createdOn)}</div> \
                                {{/if}}\
                   {{/if}} \
                </scipt>';
                    var templateAttachment = '<script id="chat_message_tmpl" type="text/x-jqury-tmpl"> \
                {{if msgData.message}} \
                    {{each(key, msgItem) msgData.message}} \
                        {{if msgItem.component && msgItem.component.payload.url}} \
                            <li data-time="${msgData.createdOnTimemillis}" id="${msgData.messageId || msgItem.clientMessageId}"\
                                class="{{if msgData.type === "bot_response"}}fromOtherUsers{{else}}fromCurrentUser{{/if}} {{if msgData.icon}}with-icon{{/if}}"> \
                                {{if msgData.createdOn}}<div class="extra-info">${helpers.formatDate(msgData.createdOn)}</div>{{/if}} \
                                {{if msgData.icon}}<div class="profile-photo"> <div class="user-account avtar" style="background-image:url(${msgData.icon})"></div> </div> {{/if}} \
                                <div class="messageBubble">\
                                    {{if msgItem.component.payload.url}} \
                                        <div class="msgCmpt botResponseAttachments"  download="${msgItem.component.payload.download}" fileid="${msgItem.component.payload.url}"> \
                                            <div class="uploadedFileIcon"> \
                                                {{if msgItem.component.type == "image"}} \
                                                <img class="image-size" src="${msgItem.component.payload.url}"> \
                                                {{else msgItem.component.type == "audio"}}\
                                                    <span class="icon cf-icon icon-files_audio"></span> \
                                                {{else msgItem.component.type == "video"}} \
                                                    <span class="icon cf-icon icon-video_active"></span> \
                                                {{else}} \
                                                    {{if extension[1]=="xlsx" || extension[1]=="xls" || extension[1]=="docx" || extension[1]=="doc" || extension[1]=="pdf" || extension[1]=="ppsx" || extension[1]=="pptx" || extension[1]=="ppt" || extension[1]=="zip" || extension[1]=="rar"}}\
                                                        <span class="icon cf-icon icon-files_${extension[1]}"></span> \
                                                    {{else extension[1]}}\
                                                        <span class="icon cf-icon icon-files_other_doc"></span> \
                                                    {{/if}}\
                                                {{/if}}\
                                            </div> \
                                            <div class="botuploadedFileName">${extractedFileName}</div> \
                                        </div> \
                                    {{/if}} \
                                </div> \
                            </li> \
                        {{/if}} \
                    {{/each}} \
                {{/if}} \
            </scipt>';
            var popupTemplate = '<script id="kore_popup_tmpl" type="text/x-jquery-tmpl"> \
                    <div class="kore-auth-layover">\
                        <div class="kore-auth-popup"> \
                            <div class="popup_controls"><span class="close-popup" title="Close">&times;</span></div> \
                            <iframe id="authIframe" src="${link_url}"></iframe> \
                        </div> \
                    </div>\
            </script>';
            var buttonTemplate = '<script id="chat_message_tmpl" type="text/x-jqury-tmpl"> \
                {{if msgData.message}} \
                    <li data-time="${msgData.createdOnTimemillis}" id="${msgData.messageId || msgItem.clientMessageId}"\
                        class="{{if msgData.type === "bot_response"}}fromOtherUsers{{else}}fromCurrentUser{{/if}} {{if msgData.icon}}with-icon{{/if}}"> \
                        <div class="buttonTmplContent"> \
                            {{if msgData.icon}}<div aria-live="off" class="profile-photo"> <div class="user-account avtar" style="background-image:url(${msgData.icon})"></div> </div> {{/if}} \
                            <ul class="buttonTmplContentBox">\
                                <li class="buttonTmplContentHeading"> \
                                    {{if msgData.type === "bot_response"}} {{html helpers.convertMDtoHTML(msgData.message[0].component.payload.text, "bot")}} {{else}} {{html helpers.convertMDtoHTML(msgData.message[0].component.payload.text, "user")}} {{/if}} \
                                    {{if msgData.message[0].cInfo && msgData.message[0].cInfo.emoji}} \
                                        <span class="emojione emojione-${msgData.message[0].cInfo.emoji[0].code}">${msgData.message[0].cInfo.emoji[0].title}</span> \
                                    {{/if}} \
                                </li>\
                                {{each(key, msgItem) msgData.message[0].component.payload.buttons}} \
                                    <a href="javascript:void(0);" target="_self">\
                                        <!-- hoonartek customization for pay now -->\
                                        <li id="btnid"\
                                        {{if msgData}}msgData="${JSON.stringify(msgData)}"{{/if}} \
                                        {{if msgItem.payload}}value="${msgItem.payload}"{{/if}}\
                                        {{if msgItem.payload}}actual-value="${msgItem.payload}"{{/if}}\
                                        {{if msgItem.url}}url="${msgItem.url}"{{/if}}\
                                        class="buttonTmplContentChild" data-value="${msgItem.value}"\
                                        type="${msgItem.type}">\
                                        <span class="button-title">${msgItem.title}</span>\
                                        <br>\
                                        <span class="button-subtitle">${msgItem.subtitle}</span>\
                                        </li> \
                                    </a> \
                                {{/each}} \
                            </ul>\
                        </div>\
                    </li> \
                {{/if}} \
	    {{if msgData.createdOn}}\
		    <div aria-live="off" class="extra-info" style="margin-right: 15px; margin-top: -10px; margin-bottom: 3px; margin-left: 42px; font-size: 12px; color: #8a959f;">\
		    ${helpers.formatDate(msgData.createdOn)} </div>\
	    {{/if}} \
            </scipt>';

            var pieChartTemplate = '<script id="chat_message_tmpl" type="text/x-jqury-tmpl"> \
                {{if msgData.message}} \
                    <li data-time="${msgData.createdOnTimemillis}" id="${msgData.messageId || msgItem.clientMessageId}"\
                        class="{{if msgData.type === "bot_response"}}fromOtherUsers{{else}}fromCurrentUser{{/if}} with-icon piechart"> \
                        {{if msgData.createdOn}}<div class="extra-info">${helpers.formatDate(msgData.createdOn)}</div>{{/if}} \
                        {{if msgData.icon}}<div class="profile-photo extraBottom"> <div class="user-account avtar" style="background-image:url(${msgData.icon})"></div> </div> {{/if}} \
                        {{if msgData.message[0].component.payload.text}}<div class="messageBubble pieChart">\
                            <span>{{html helpers.convertMDtoHTML(msgData.message[0].component.payload.text, "bot")}}</span>\
                        </div>{{/if}}\
                        <div id="d3Pie">\
                        </div>\
                        <div class="piechartDiv">\
                            <div class="lineChartChildDiv" id="piechart${msgData.messageId}"></div>\
                        </div>\
                    </li> \
                {{/if}} \
            </scipt>';

            var barchartTemplate = '<script id="chat_message_tmpl" type="text/x-jqury-tmpl"> \
                {{if msgData.message}} \
                    <li data-time="${msgData.createdOnTimemillis}" id="${msgData.messageId || msgItem.clientMessageId}"\
                        class="{{if msgData.type === "bot_response"}}fromOtherUsers{{else}}fromCurrentUser{{/if}} with-icon barchart"> \
                        {{if msgData.createdOn}}<div aria-live="off" class="extra-info">${helpers.formatDate(msgData.createdOn)}</div>{{/if}} \
                        {{if msgData.icon}}<div aria-live="off" class="profile-photo extraBottom"> <div class="user-account avtar" style="background-image:url(${msgData.icon})"></div> </div> {{/if}} \
                        {{if msgData.message[0].component.payload.text}}<div class="messageBubble barchart">\
                            <span>{{html helpers.convertMDtoHTML(msgData.message[0].component.payload.text, "bot")}}</span>\
                        </div>{{/if}}\
                        <div class="barchartDiv">\
                            <div class="lineChartChildDiv" id="barchart${msgData.messageId}"></div>\
                        </div>\
                    </li> \
                {{/if}} \
            </scipt>';
            var linechartTemplate = '<script id="chat_message_tmpl" type="text/x-jqury-tmpl"> \
                {{if msgData.message}} \
                    <li data-time="${msgData.createdOnTimemillis}" id="${msgData.messageId || msgItem.clientMessageId}"\
                        class="{{if msgData.type === "bot_response"}}fromOtherUsers{{else}}fromCurrentUser{{/if}} with-icon linechart"> \
                        {{if msgData.createdOn}}<div aria-live="off" class="extra-info">${helpers.formatDate(msgData.createdOn)}</div>{{/if}} \
                        {{if msgData.icon}}<div aria-live="off" class="profile-photo extraBottom"> <div class="user-account avtar" style="background-image:url(${msgData.icon})"></div> </div> {{/if}} \
                        {{if msgData.message[0].component.payload.text}}<div class="messageBubble linechart">\
                            <span>{{html helpers.convertMDtoHTML(msgData.message[0].component.payload.text, "bot")}}</span>\
                        </div>{{/if}}\
                        <div class="linechartDiv">\
                            <div class="lineChartChildDiv" id="linechart${msgData.messageId}"></div>\
                        </div>\
                    </li> \
                {{/if}} \
            </scipt>';
            var miniTableChartTemplate = '<script id="chat_message_tmpl" type="text/x-jqury-tmpl"> \
                {{if msgData.message}} \
                    <li data-time="${msgData.createdOnTimemillis}" id="${msgData.messageId || msgItem.clientMessageId}"\
                        class="{{if msgData.type === "bot_response"}}fromOtherUsers{{else}}fromCurrentUser{{/if}} with-icon tablechart"> \
                        {{if msgData.icon}}<div aria-live="off" class="profile-photo extraBottom"> <div class="user-account avtar" style="background-image:url(${msgData.icon})"></div> </div> {{/if}} \
                        {{if msgData.message[0].component.payload.text}}<div class="messageBubble tableChart">\
                            <span>{{html helpers.convertMDtoHTML(msgData.message[0].component.payload.text, "bot")}}</span>\
                        </div>{{/if}}\
                        {{each(key, table) msgData.message[0].component.payload.elements}}\
                            <div class="minitableDiv">\
                                <div style="overflow-x:auto; padding: 0 8px;">\
                                    <table cellspacing="0" cellpadding="0">\
                                        <tr class="headerTitle">\
                                            {{each(key, tableHeader) table.primary}} \
                                                <th {{if tableHeader[1]}}style="text-align:${tableHeader[1]};" {{/if}}>${tableHeader[0]}</th>\
                                            {{/each}} \
                                        </tr>\
                                        {{each(key, additional) table.additional}} \
                                            <tr>\
                                                {{each(cellkey, cellValue) additional}} \
                                                    <td  {{if cellkey === additional.length-1}}colspan="2"{{/if}}  {{if table.primary[cellkey][1]}}style="text-align:${table.primary[cellkey][1]};" {{/if}} title="${cellValue}">${cellValue}</td>\
                                                {{/each}} \
                                            </tr>\
                                        {{/each}} \
                                    </table>\
                                </div>\
                            </div>\
                        {{/each}}\
                    </li> \
                {{/if}} \
		    {{if msgData.createdOn}}\
                    <div aria-live="off" class="extra-info" style="margin-right: 199px; margin-top: -10px; margin-bottom: 3px; margin-left: 42px; font-size: 12px; color: #8a959f;">\
                    ${helpers.formatDate(msgData.createdOn)} </div>\
                {{/if}} \
            </scipt>';
            var miniTableHorizontalTemplate = '<script id="chat_message_tmpl" type="text/x-jqury-tmpl"> \
                {{if msgData.message}} \
                <li data-time="${msgData.createdOnTimemillis}" id="${msgData.messageId || msgItem.clientMessageId}"\
                    class="{{if msgData.type === "bot_response"}}fromOtherUsers{{else}}fromCurrentUser{{/if}} with-icon tablechart"> \
                    {{if msgData.createdOn}}<div aria-live="off" class="extra-info">${helpers.formatDate(msgData.createdOn)}</div>{{/if}} \
                    {{if msgData.icon}}<div aria-live="off" class="profile-photo extraBottom"> <div class="user-account avtar" style="background-image:url(${msgData.icon})"></div> </div> {{/if}} \
                    {{if msgData.message[0].component.payload.text}}<div class="messageBubble tableChart">\
                        <span>{{html helpers.convertMDtoHTML(msgData.message[0].component.payload.text, "bot")}}</span>\
                    </div>{{/if}}\
                    <div class="carousel" id="carousel-one-by-one" style="height: 0px;">\
                        {{each(key, table) msgData.message[0].component.payload.elements}}\
                            <div class="slide">\
                                <div class="minitableDiv">\
                                    <div style="overflow-x:auto; padding: 0 8px;">\
                                        <table cellspacing="0" cellpadding="0">\
                                            <tr class="headerTitle">\
                                                {{each(key, tableHeader) table.primary}} \
                                                    <th {{if tableHeader[1]}}style="text-align:${tableHeader[1]};" {{/if}}>${tableHeader[0]}</th>\
                                                {{/each}} \
                                            </tr>\
                                            {{each(key, additional) table.additional}} \
                                                <tr>\
                                                    {{each(cellkey, cellValue) additional}} \
                                                        <td  {{if cellkey === additional.length-1}}colspan="2"{{/if}}  {{if table.primary[cellkey][1]}}style="text-align:${table.primary[cellkey][1]};" {{/if}} title="${cellValue}">${cellValue}</td>\
                                                    {{/each}} \
                                                </tr>\
                                            {{/each}} \
                                        </table>\
                                    </div>\
                                </div>\
                            </div>\
                        {{/each}}\
                    </div>\
                </li> \
                {{/if}} \
            </scipt>';
            var tableChartTemplate = '<script id="chat_message_tmpl" type="text/x-jqury-tmpl"> \
                {{if msgData.message}} \
                    <li data-time="${msgData.createdOnTimemillis}" id="${msgData.messageId || msgItem.clientMessageId}"\
                        class="{{if msgData.type === "bot_response"}}fromOtherUsers{{else}}fromCurrentUser{{/if}} with-icon tablechart"> \
                        {{if msgData.icon}}<div aria-live="off" class="profile-photo extraBottom"> <div class="user-account avtar" style="background-image:url(${msgData.icon})"></div> </div> {{/if}} \
                        {{if msgData.message[0].component.payload.text}}<div class="messageBubble tableChart">\
                            <span>{{html helpers.convertMDtoHTML(msgData.message[0].component.payload.text, "bot")}}</span>\
                        </div>{{/if}}\
                        <div class="tablechartDiv {{if msgData.message[0].component.payload.table_design && msgData.message[0].component.payload.table_design == "regular"}}regular{{else}}hide{{/if}}">\
                            <div style="overflow-x:auto; padding: 0 8px;">\
                                <table cellspacing="0" cellpadding="0">\
                                    <tr class="headerTitle">\
                                        {{each(key, tableHeader) msgData.message[0].component.payload.columns}} \
                                            <th {{if tableHeader[1]}}style="text-align:${tableHeader[1]};"{{/if}}>${tableHeader[0]}</th>\
                                        {{/each}} \
                                    </tr>\
                                    {{each(key, tableRow) msgData.message[0].component.payload.elements}} \
                                        {{if tableRow.Values.length>1}}\
                                            <tr {{if key > 4}}class="hide"{{/if}}>\
                                                {{each(cellkey, cellValue) tableRow.Values}} \
                                                    <td  {{if cellkey === tableRow.Values.length-1}}colspan="2"{{/if}} class=" {{if key == 0}} addTopBorder {{/if}}" {{if msgData.message[0].component.payload.columns[cellkey][1]}}style="text-align:${msgData.message[0].component.payload.columns[cellkey][1]};" {{/if}} title="${cellValue}">${cellValue}</td>\
                                                {{/each}} \
                                            </tr>\
                                        {{/if}}\
                                    {{/each}} \
                                </table>\
                            </div>\
                            {{if msgData.message[0].component.payload.elements.length > 5 && msgData.message[0].component.payload.table_design && msgData.message[0].component.payload.table_design == "regular"}}<div class="showMore">Show more</div>{{/if}}\
                        </div>\
                         <div class="accordionTable {{if msgData.message[0].component.payload.table_design && msgData.message[0].component.payload.table_design == "regular"}}hide{{else}}responsive{{/if}}">\
                            {{each(key, tableRow) msgData.message[0].component.payload.elements}} \
                                {{if key < 4}}\
                                    <div class="accordionRow {{if msgData.message[0].component.payload.isExpanded}}open{{/if}}">\
                                        {{each(cellkey, cellValue) tableRow.Values}} \
                                            {{if cellkey < 2}}\
                                                <div class="accordionCol">\
                                                    <div class="colTitle hideSdkEle">${msgData.message[0].component.payload.columns[cellkey][0]}</div>\
                                                    <div title="${cellValue}" class="colVal">${cellValue}</div>\
                                                </div>\
                                            {{else}}\
                                                <div class="accordionCol hideSdkEle">\
                                                    <div class="colTitle">${msgData.message[0].component.payload.columns[cellkey][0]}</div>\
                                                    <div title="${cellValue}" class="colVal">${cellValue}</div>\
                                                </div>\
                                            {{/if}}\
                                        {{/each}} \
                                        <span class="fa fa-caret-right tableBtn"></span>\
                                    </div>\
                                {{/if}}\
                            {{/each}} \
                            <div class="showMore">Show more</div>\
                        </div>\
                    </li> \
                {{/if}} \
		    {{if msgData.createdOn}}\
                    <div aria-live="off" class="extra-info" style="margin-right: 15px; margin-top: -4px; margin-bottom: 3px; margin-left: 18px; font-size: 12px; color: #8a959f;">\
                    ${helpers.formatDate(msgData.createdOn)} </div>\
                {{/if}} \
            </scipt>';


            var carouselTemplate = '<script id="chat_message_tmpl" type="text/x-jqury-tmpl"> \
                {{if msgData.message}} \
                    <li data-time="${msgData.createdOnTimemillis}" id="${msgData.messageId || msgItem.clientMessageId}"\
                        class="{{if msgData.type === "bot_response"}}fromOtherUsers{{else}}fromCurrentUser{{/if}} with-icon"> \
                        {{if msgData.icon}}<div aria-live="off" class="profile-photo extraBottom"> <div class="user-account avtar" style="background-image:url(${msgData.icon})"></div> </div> {{/if}} \
                        {{if msgData.message[0].component.payload.text}}<div class="messageBubble tableChart">\
                            <span>{{html helpers.convertMDtoHTML(msgData.message[0].component.payload.text, "bot")}}</span>\
                        </div>{{/if}}\
                        <div class="carousel" id="carousel-one-by-one" style="height: 0px;">\
                            {{each(key, msgItem) msgData.message[0].component.payload.elements}} \
                                <div class="slide">\
                                    {{if msgItem.image_url}} \
                                        <div class="carouselImageContent" {{if msgItem.default_action && msgItem.default_action.url}}url="${msgItem.default_action.url}"{{/if}} {{if msgItem.default_action && msgItem.default_action.title}}data-value="${msgItem.default_action.title}"{{/if}} {{if msgItem.default_action && msgItem.default_action.type}}type="${msgItem.default_action.type}"{{/if}} {{if msgItem.default_action && msgItem.default_action.payload}} value="${msgItem.default_action.payload}"{{/if}}> \
                                            <img alt="image" src="${msgItem.image_url}" onerror="this.onerror=null;this.src=\'../libs/img/no_image.png\';"/> \
                                        </div> \
                                    {{/if}} \
                                    <div class="carouselTitleBox"> \
                                        <p class="carouselTitle">{{if msgData.type === "bot_response"}} {{html helpers.convertMDtoHTML(msgItem.title, "bot")}} {{else}} {{html helpers.convertMDtoHTML(msgItem.title, "user")}} {{/if}}</p> \
                                        {{if msgItem.subtitle}}<p class="carouselDescription">{{if msgData.type === "bot_response"}} {{html helpers.convertMDtoHTML(msgItem.subtitle, "bot")}} {{else}} {{html helpers.convertMDtoHTML(msgItem.subtitle, "user")}} {{/if}}</p>{{/if}} \
                                        {{if msgItem.default_action && msgItem.default_action.type === "web_url"}}<div class="listItemPath carouselDefaultAction" type="url" url="${msgItem.default_action.url}">${msgItem.default_action.url}</div>{{/if}} \
                                        {{if msgItem.buttons}} \
                                            {{each(key, msgBtn) msgItem.buttons}} \
                                                <div {{if msgBtn.payload}}value="${msgBtn.payload}"{{/if}} {{if msgBtn.url}}url="${msgBtn.url}"{{/if}} class="listItemPath carouselButton" data-value="${msgBtn.value}" type="${msgBtn.type}">\
                                                    ${msgBtn.title}\
                                                </div> \
                                            {{/each}} \
                                        {{/if}} \
                                    </div>\
                                </div>\
                            {{/each}} \
                        </div>\
                    </li> \
                {{/if}}\
	    {{if msgData.createdOn}}\
		    <div aria-live="off" class="extra-info" style="margin-right: 15px; margin-top: -10px; margin-bottom: 3px; margin-left: 48px; font-size: 12px; color: #8a959f;">\
		    ${helpers.formatDate(msgData.createdOn)}</div>\
	    {{/if}} \
            </scipt>';
	//Anurag - 03/02/2025
	var quickReplyTemplate = '<script id="chat_message_tmpl" type="text/x-jqury-tmpl"> \
            {{if msgData.message}} \
                <li data-time="${msgData.createdOnTimemillis}" id="${msgData.messageId || msgItem.clientMessageId}"\
                    class="{{if msgData.type === "bot_response"}}fromOtherUsers{{else}}fromCurrentUser{{/if}} with-icon quickReplies"> \
                    <div class="buttonTmplContent"> \
                        {{if msgData.icon}}\
                            <div aria-live="off" class="profile-photo"> \
                                <div class="user-account avtar marginT50" style="background-image:url(${msgData.icon})"></div> \
                            </div> \
                        {{/if}} \
                        {{if msgData.message[0].component.payload.text}} \
                            <div class="buttonTmplContentHeading quickReply"> \
                                {{if msgData.type === "bot_response"}} \
                                    {{html helpers.convertMDtoHTML(msgData.message[0].component.payload.text, "bot")}} \
                                {{else}} \
                                    {{html helpers.convertMDtoHTML(msgData.message[0].component.payload.text, "user")}} \
                                {{/if}} \
                                {{if msgData.message[0].cInfo && msgData.message[0].cInfo.emoji}} \
                                    <span class="emojione emojione-${msgData.message[0].cInfo.emoji[0].code}">${msgData.message[0].cInfo.emoji[0].title}</span> \
                                {{/if}} \
                            </div>\
                        {{/if}} \
                        {{if msgData.message[0].component.payload.quick_replies && msgData.message[0].component.payload.quick_replies.length}} \
                            <div class="quick_replies_btn_parent">\
                                <div class="gridContainer">\
                                    {{each(key, msgItem) msgData.message[0].component.payload.quick_replies}} \
                                        <div class="buttonTmplContentChild quickReplyDiv">\
                                            <span {{if msgItem.payload}}value="${msgItem.payload}"{{/if}} class="quickReply {{if msgItem.image_url}}with-img{{/if}}" type="${msgItem.content_type}">\
                                                {{if msgItem.image_url}}<img src="${msgItem.image_url}">{{/if}}\
                                                <span class="quickreplyText {{if msgItem.image_url}}with-img{{/if}}">${msgItem.title}</span>\
                                            </span>\
                                        </div> \
                                    {{/each}} \
                                </div>\
                            </div>\
                        {{/if}} \
                    </div> \
                </li> \
            {{/if}} \
            {{if msgData.createdOn}}\
                <div aria-live="off" class="extra-info" style="margin-right: 15px; margin-top: -10px; margin-bottom: 3px; margin-left: 48px; font-size: 12px; color: #8a959f;">\
                ${helpers.formatDate(msgData.createdOn)}</div>\
            {{/if}} \
        </script>';
  //           var quickReplyTemplate = '<script id="chat_message_tmpl" type="text/x-jqury-tmpl"> \
  //               {{if msgData.message}} \
  //                   <li data-time="${msgData.createdOnTimemillis}" id="${msgData.messageId || msgItem.clientMessageId}"\
  //                       class="{{if msgData.type === "bot_response"}}fromOtherUsers{{else}}fromCurrentUser{{/if}} with-icon quickReplies"> \
  //                       <div class="buttonTmplContent"> \
  //                           {{if msgData.icon}}<div aria-live="off" class="profile-photo"> <div class="user-account avtar marginT50" style="background-image:url(${msgData.icon})"></div> </div> {{/if}} \
  //                           {{if msgData.message[0].component.payload.text}} \
  //                               <div class="buttonTmplContentHeading quickReply"> \
  //                                   {{if msgData.type === "bot_response"}} {{html helpers.convertMDtoHTML(msgData.message[0].component.payload.text, "bot")}} {{else}} {{html helpers.convertMDtoHTML(msgData.message[0].component.payload.text, "user")}} {{/if}} \
  //                                   {{if msgData.message[0].cInfo && msgData.message[0].cInfo.emoji}} \
  //                                       <span class="emojione emojione-${msgData.message[0].cInfo.emoji[0].code}">${msgData.message[0].cInfo.emoji[0].title}</span> \
  //                                   {{/if}} \
  //                               </div>\
  //                               {{/if}} \
  //                               {{if msgData.message[0].component.payload.quick_replies && msgData.message[0].component.payload.quick_replies.length}} \
  //                               <div class="fa fa-chevron-left quickreplyLeftIcon hide"></div><div class="fa fa-chevron-right quickreplyRightIcon"></div>\
  //                                   <div class="quick_replies_btn_parent"><div class="autoWidth">\
  //                                       {{each(key, msgItem) msgData.message[0].component.payload.quick_replies}} \
  //                                           <div class="buttonTmplContentChild quickReplyDiv"> <span {{if msgItem.payload}}value="${msgItem.payload}"{{/if}} class="quickReply {{if msgItem.image_url}}with-img{{/if}}" type="${msgItem.content_type}">\
  //                                               {{if msgItem.image_url}}<img src="${msgItem.image_url}">{{/if}} <span class="quickreplyText {{if msgItem.image_url}}with-img{{/if}}">${msgItem.title}</span></span>\
  //                                           </div> \
  //                                       {{/each}} \
  //                                   </div>\
  //                               </div>\
  //                           {{/if}} \
  //                       </div>\
  //                   </li> \
  //               {{/if}} \
	 //    {{if msgData.createdOn}}\
		//     <div aria-live="off" class="extra-info" style="margin-right: 15px; margin-top: -10px; margin-bottom: 3px; margin-left: 48px; font-size: 12px; color: #8a959f;">\
		//     ${helpers.formatDate(msgData.createdOn)}</div>\
		// {{/if}} \
  //           </scipt>';
            var listTemplate = '<script id="chat_message_tmpl" type="text/x-jqury-tmpl"> \
                {{if msgData.message}} \
                    <li data-time="${msgData.createdOnTimemillis}" id="${msgData.messageId || msgItem.clientMessageId}"\
                        class="{{if msgData.type === "bot_response"}}fromOtherUsers{{else}}fromCurrentUser{{/if}} with-icon"> \
                        <div class="listTmplContent"> \
                            {{if msgData.createdOn}}<div aria-live="off" class="extra-info">${helpers.formatDate(msgData.createdOn)}</div>{{/if}} \
                            {{if msgData.icon}}<div aria-live="off" class="profile-photo"> <div class="user-account avtar" style="background-image:url(${msgData.icon})"></div> </div> {{/if}} \
                            <ul class="listTmplContentBox"> \
                                {{if msgData.message[0].component.payload.text || msgData.message[0].component.payload.heading}} \
                                    <li class="listTmplContentHeading"> \
                                        {{if msgData.type === "bot_response" && msgData.message[0].component.payload.heading}} {{html helpers.convertMDtoHTML(msgData.message[0].component.payload.heading, "bot")}} {{else}} {{html helpers.convertMDtoHTML(msgData.message[0].component.payload.text, "user")}} {{/if}} \
                                        {{if msgData.message[0].cInfo && msgData.message[0].cInfo.emoji}} \
                                            <span class="emojione emojione-${msgData.message[0].cInfo.emoji[0].code}">${msgData.message[0].cInfo.emoji[0].title}</span> \
                                        {{/if}} \
                                    </li> \
                                {{/if}} \
                                {{each(key, msgItem) msgData.message[0].component.payload.elements}} \
                                    {{if msgData.message[0].component.payload.buttons}} \
                                        {{if key<= 2 }}\
                                            <li class="listTmplContentChild"> \
                                                {{if msgItem.image_url}} \
                                                    <div class="listRightContent" {{if msgItem.default_action && msgItem.default_action.url}}url="${msgItem.default_action.url}"{{/if}} {{if msgItem.default_action && msgItem.default_action.title}}data-value="${msgItem.default_action.title}"{{/if}} {{if msgItem.default_action && msgItem.default_action.type}}type="${msgItem.default_action.type}"{{/if}} {{if msgItem.default_action && msgItem.default_action.payload}} value="${msgItem.default_action.payload}"{{/if}}> \
                                                        <img alt="image" src="${msgItem.image_url}" onerror="this.onerror=null;this.src=\'../libs/img/no_image.png\';"/> \
                                                    </div> \
                                                {{/if}} \
                                                <div class="listLeftContent"> \
                                                    <div class="listItemTitle">{{if msgData.type === "bot_response"}} {{html helpers.convertMDtoHTML(msgItem.title, "bot")}} {{else}} {{html helpers.convertMDtoHTML(msgItem.title, "user")}} {{/if}}</div> \
                                                    {{if msgItem.subtitle}}<div class="listItemSubtitle">{{if msgData.type === "bot_response"}} {{html helpers.convertMDtoHTML(msgItem.subtitle, "bot")}} {{else}} {{html helpers.convertMDtoHTML(msgItem.subtitle, "user")}} {{/if}}</div>{{/if}} \
                                                    {{if msgItem.default_action && msgItem.default_action.url}}<div class="listItemPath" type="url" url="${msgItem.default_action.url}">${msgItem.default_action.url}</div>{{/if}} \
                                                    {{if msgItem.buttons}}\
                                                    <div> \
                                                        <span class="buyBtn" {{if msgItem.buttons[0].type}}type="${msgItem.buttons[0].type}"{{/if}} {{if msgItem.buttons[0].url}}url="${msgItem.buttons[0].url}"{{/if}} {{if msgItem.buttons[0].payload}}value="${msgItem.buttons[0].payload}"{{/if}}>{{if msgItem.buttons[0].title}}${msgItem.buttons[0].title}{{else}}Buy{{/if}}</span> \
                                                    </div> \
                                                    {{/if}}\
                                                </div>\
                                            </li> \
                                        {{/if}}\
                                    {{else}} \
                                        <li class="listTmplContentChild"> \
                                            {{if msgItem.image_url}} \
                                                <div class="listRightContent" {{if msgItem.default_action && msgItem.default_action.url}}url="${msgItem.default_action.url}"{{/if}} {{if msgItem.default_action && msgItem.default_action.title}}data-value="${msgItem.default_action.title}"{{/if}} {{if msgItem.default_action && msgItem.default_action.type}}type="${msgItem.default_action.type}"{{/if}} {{if msgItem.default_action && msgItem.default_action.payload}} value="${msgItem.default_action.payload}"{{/if}}> \
                                                    <img alt="image" src="${msgItem.image_url}" onerror="this.onerror=null;this.src=\'../libs/img/no_image.png\';" /> \
                                                </div> \
                                            {{/if}} \
                                            <div class="listLeftContent"> \
                                                <div class="listItemTitle">{{if msgData.type === "bot_response"}} {{html helpers.convertMDtoHTML(msgItem.title, "bot")}} {{else}} {{html helpers.convertMDtoHTML(msgItem.title, "user")}} {{/if}}</div> \
                                                {{if msgItem.subtitle}}<div class="listItemSubtitle">{{if msgData.type === "bot_response"}} {{html helpers.convertMDtoHTML(msgItem.subtitle, "bot")}} {{else}} {{html helpers.convertMDtoHTML(msgItem.subtitle, "user")}} {{/if}}</div>{{/if}} \
                                                {{if msgItem.default_action && msgItem.default_action.url}}<div class="listItemPath" type="url" url="${msgItem.default_action.url}">${msgItem.default_action.url}</div>{{/if}} \
                                                {{if msgItem.buttons}}\
                                                <div> \
                                                    <span class="buyBtn" {{if msgItem.buttons[0].type}}type="${msgItem.buttons[0].type}"{{/if}} {{if msgItem.buttons[0].url}}url="${msgItem.buttons[0].url}"{{/if}} {{if msgItem.buttons[0].payload}}value="${msgItem.buttons[0].payload}"{{/if}}>{{if msgItem.buttons[0].title}}${msgItem.buttons[0].title}{{else}}Buy{{/if}}</span> \
                                                </div> \
                                                {{/if}}\
                                            </div>\
                                        </li> \
                                    {{/if}} \
                                {{/each}} \
                                </li> \
                                {{if msgData.message[0].component.AlwaysShowGlobalButtons || (msgData.message[0].component.payload.elements.length > 3 && msgData.message[0].component.payload.buttons)}}\
                                <li class="viewMoreList"> \
                                    <span class="viewMore" url="{{if msgData.message[0].component.payload.buttons[0].url}}${msgData.message[0].component.payload.buttons[0].url}{{/if}}" type="${msgData.message[0].component.payload.buttons[0].type}" value="{{if msgData.message[0].component.payload.buttons[0].payload}}${msgData.message[0].component.payload.buttons[0].payload}{{else}}${msgData.message[0].component.payload.buttons[0].title}{{/if}}">${msgData.message[0].component.payload.buttons[0].title}</span> \
                                </li> \
                                {{/if}}\
                            </ul> \
                        </div> \
                    </li> \
                {{/if}} \
            </scipt>';
            var listActionSheetTemplate = '<script id="chat-window-listTemplate" type="text/x-jqury-tmpl">\
            <div class="list-template-sheet hide">\
             {{if msgData.message}} \
               <div class="sheetHeader">\
                 <span class="choose">${msgData.message[0].component.payload.heading}</span>\
                 <button class="close-button" title="Close"><img src="data:image/svg+xml;base64,           PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTRweCIgaGVpZ2h0PSIxNHB4IiB2aWV3Qm94PSIwIDAgMTQgMTQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjMgKDY3Mjk3KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5jbG9zZTwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJBcnRib2FyZCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTM0NC4wMDAwMDAsIC0yMjkuMDAwMDAwKSIgZmlsbD0iIzhBOTU5RiI+CiAgICAgICAgICAgIDxnIGlkPSJjbG9zZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzQ0LjAwMDAwMCwgMjI5LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9IlNoYXBlIiBwb2ludHM9IjE0IDEuNCAxMi42IDAgNyA1LjYgMS40IDAgMCAxLjQgNS42IDcgMCAxMi42IDEuNCAxNCA3IDguNCAxMi42IDE0IDE0IDEyLjYgOC40IDciPjwvcG9seWdvbj4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"></button>\
               </div>\
               <div class="listTemplateContainer" >\
                    <div class="displayMonth">\
                        {{each(key, tab) tabs}} \
                            <span class="tabs" data-tabid="${tab}"><span class="btnBG">${tab}</span></span>\
                        {{/each}}\
                    </div>\
                      <ul class="displayListValues">\
                          {{each(key, msgItem) dataItems}} \
                               <li class="listViewTmplContentChild"> \
                                     {{if msgItem.image_url}} \
                                         <div class="listViewRightContent" {{if msgItem.default_action && msgItem.default_action.url}}url="${msgItem.default_action.url}"{{/if}} {{if msgItem.default_action && msgItem.default_action.title}}data-value="${msgItem.default_action.title}"{{/if}} {{if msgItem.default_action && msgItem.default_action.type}}type="${msgItem.default_action.type}"{{/if}} {{if msgItem.default_action && msgItem.default_action.payload}} value="${msgItem.default_action.payload}"{{/if}}> \
                                            <img alt="image" src="${msgItem.image_url}" onerror="this.onerror=null;this.src=\'../libs/img/no_image.png\';"/> \
                                        </div> \
                                    {{/if}} \
                                        <div class="listViewLeftContent" data-url="${msgItem.default_action.url}" data-title="${msgItem.default_action.title}" data-value="${msgItem.default_action.title}"> \
                                           <span class="titleDesc">\
                                               <div class="listViewItemTitle" title="${msgItem.title}">{{if msgData.type === "bot_response"}} {{html helpers.convertMDtoHTML(msgItem.title, "bot")}} {{else}} {{html helpers.convertMDtoHTML(msgItem.title, "user")}} {{/if}}</div> \
                                                {{if msgItem.subtitle}}<div class="listViewItemSubtitle" title="${msgItem.subtitle}">{{if msgData.type === "bot_response"}} {{html helpers.convertMDtoHTML(msgItem.subtitle, "bot")}} {{else}} {{html helpers.convertMDtoHTML(msgItem.subtitle, "user")}} {{/if}}</div>{{/if}} \
                                            </span>\
                                                {{if msgItem.value}}<div class="listViewItemValue" title="${msgItem.value}">{{if msgData.type === "bot_response"}} {{html helpers.convertMDtoHTML(msgItem.value, "bot")}} {{else}} {{html helpers.convertMDtoHTML(msgItem.value, "user")}} {{/if}}</div>{{/if}} \
                                        </div>\
                                </li> \
                           {{/each}} \
                       </ul> \
               </div>\
           {{/if}}\
       </div>\
     </script>';
     var iframe = '<script id="chat_message_tmpl" type="text/x-jquery-tmpl"> \
                    {{if link_url}}\
                       {{if (msgData && msgData.renderType ==="inline")}}\
                            <li class="inlineIframeContainer"> \
                                <div class="iframeBubble"> \
                                        <div class="uiformComponent">\
                                        <div id="closeInlineModel" role="region" aria-live="polite" aria-atomic="true" aira-label="close Form" class="loading_form iframeLoader"></div>\
                                        <iframe id="inlineIframeModal" src="${link_url}"></iframe> \
                                        </div>\
                                </div>\
                            </li> \
                        {{else}}\
                            <iframe role="region" aria-live="polite" aria-atomic="true" aira-label="Loadig Form" id="iframeModal" src="${link_url}"></iframe> \
                        {{/if}}\
                    {{else}}\
                        <div role="region" aria-live="polite" aria-atomic="true" class="failedIframe">Failed to load iFrame</div>\
                    {{/if}}\
                </script>';
            if (tempType === "message") {
                return msgTemplate;
            } else if (tempType === "popup") {
                return popupTemplate;
	    // Ishika disable
	    } else if (tempType === "templatebutton") {
		    console.log("this is the button");
		    // Wait for the button template to be rendered
		    setTimeout(function() {
		        // Assuming msgData is available and contains the body
		        var firsttext = msgData.message[0].cInfo.body;
		        console.log("firsttext", firsttext);
		        // Check if the firsttext contains "Please click the button below to download your policy soft copy"
		        // if (firsttext.includes("Please click the button below to download your policy soft copy")) {
		        //     console.log("Heading found in message, not disabling any buttons.");
		        //     return; // Don't disable buttons if the heading is present
		        // }
		        var clickType = '';
		        // Loop through all the buttons to add the click event listener
		        document.querySelectorAll('.buttonTmplContentChild, .buttonTmplContentChild.quickReplyDiv')
		            .forEach(button => {
		                button.addEventListener('click', function(e) {
		                    var clickType = e.target.getAttribute('type');  // Get button type
		                    if (!button.getAttribute('data-clicked')) {
		                        console.log("A button was clicked: " + button.textContent);

					// Manasi Pay Now 26_02_2025
					let str =  button.textContent;
	                                let noSpaceStr = str.replace(/\s+/g, ""); 
	                            	if(noSpaceStr == "PayNow")
	                            	{
	                                	console.log("manasi paynow");
	                                	const me = window.chatContainerConfig;
	                                	$('.chatInputBox').text('Pay Now');
	                                	me.sendMessage($('.chatInputBox'));
	                            	}
	                            	if(noSpaceStr == "DownloadSoftcopy")
	                            	{
						console.log("manasi softcopy");
	                                	const me = window.chatContainerConfig;
	                                	$('.chatInputBox').text('Download Softcopy');
	                                	me.sendMessage($('.chatInputBox'));
	                            	}
					// Manasi Pay Now 26_02_2025
					// Pallavi Pay Now 05_03_2025
					if(noSpaceStr == "GetGaragelisthere")
                                        {
                                        	console.log("manasi softcopy");
                                            	const me = window.chatContainerConfig;
                                            	$('.chatInputBox').text('Get Garage list here');
                                            	me.sendMessage($('.chatInputBox'));
                                        }
                                    	if(noSpaceStr == "LocateHospitalHere")
                                        {
                                            	console.log("manasi softcopy");
                                            	const me = window.chatContainerConfig;
                                            	$('.chatInputBox').text('Locate Hospital Here');
                                            	me.sendMessage($('.chatInputBox'));
                                        }
                                    	if(noSpaceStr == "LocateBranchHere")
                                        {
                                            	console.log("manasi softcopy");
                                            	const me = window.chatContainerConfig;
                                            	$('.chatInputBox').text('Locate Branch Here');
                                            	me.sendMessage($('.chatInputBox'));
                                        }
                                    	if(noSpaceStr == "GetTPdetailshere")
                                        {
                                            	console.log("manasi softcopy");
                                            	const me = window.chatContainerConfig;
                                            	$('.chatInputBox').text('Get TP details here');
                                            	me.sendMessage($('.chatInputBox'));
                                        }
                                    	if(noSpaceStr == "Softcopy")
                                        {
                                            	console.log("manasi softcopy");
                                            	const me = window.chatContainerConfig;
                                            	$('.chatInputBox').text('Softcopy');
                                            	me.sendMessage($('.chatInputBox'));
                                        }
					if(noSpaceStr == "Self-Helplink")
                                        {
                                            console.log("manasi softcopy");
                                            const me = window.chatContainerConfig;
                                            $('.chatInputBox').text('Self-Help link');
                                            me.sendMessage($('.chatInputBox'));
                                        }
					if(noSpaceStr == "DownloadNow")
                                        {
                                            console.log("manasi softcopy");
                                            const me = window.chatContainerConfig;
                                            $('.chatInputBox').text('Download Now');
                                            me.sendMessage($('.chatInputBox'));
                                        }
					// Pallavi Pay Now 05_03_2025
					// Pallavi Pay Now 08_03_2025
					if(noSpaceStr == "MotorClaimForm")
                                        {
                                            console.log("manasi softcopy");
                                            const me = window.chatContainerConfig;
                                            $('.chatInputBox').text('Motor Claim Form');
                                            me.sendMessage($('.chatInputBox'));
                                        }
					if(noSpaceStr == "HealthClaimForm")
                                        {
                                            console.log("manasi softcopy");
                                            const me = window.chatContainerConfig;
                                            $('.chatInputBox').text('Health Claim Form');
                                            me.sendMessage($('.chatInputBox'));
                                        }
					if(noSpaceStr == "HealthClaim(TPA)FormA")
                                        {
                                            console.log("manasi softcopy");
                                            const me = window.chatContainerConfig;
                                            $('.chatInputBox').text('Health Claim (TPA) Form A');
                                            me.sendMessage($('.chatInputBox'));
                                        }
					if(noSpaceStr == "HealthClaim(TPA)FormB")
                                        {
                                            console.log("manasi softcopy");
                                            const me = window.chatContainerConfig;
                                            $('.chatInputBox').text('Health Claim (TPA) Form B');
                                            me.sendMessage($('.chatInputBox'));
                                        }
					if(noSpaceStr == "HealthClaim(TPA)FormC")
                                        {
                                            console.log("manasi softcopy");
                                            const me = window.chatContainerConfig;
                                            $('.chatInputBox').text('Health Claim (TPA) Form C');
                                            me.sendMessage($('.chatInputBox'));
                                        }
					if(noSpaceStr == "TravelClaimFormMain")
                                        {
                                            console.log("manasi softcopy");
                                            const me = window.chatContainerConfig;
                                            $('.chatInputBox').text('Travel Claim Form Main');
                                            me.sendMessage($('.chatInputBox'));
                                        }
					if(noSpaceStr == "TravelClaimForm-D")
                                        {
                                            console.log("manasi softcopy");
                                            const me = window.chatContainerConfig;
                                            $('.chatInputBox').text('Travel Claim Form-D');
                                            me.sendMessage($('.chatInputBox'));
                                        }
					if(noSpaceStr == "TravelClaimForm-C")
                                        {
                                            console.log("manasi softcopy");
                                            const me = window.chatContainerConfig;
                                            $('.chatInputBox').text('Travel Claim Form-C');
                                            me.sendMessage($('.chatInputBox'));
                                        }
					if(noSpaceStr == "TravelClaimForm-B")
                                        {
                                            console.log("manasi softcopy");
                                            const me = window.chatContainerConfig;
                                            $('.chatInputBox').text('Travel Claim Form-B');
                                            me.sendMessage($('.chatInputBox'));
                                        }
					if(noSpaceStr == "TravelClaimForm-A")
                                        {
                                            console.log("manasi softcopy");
                                            const me = window.chatContainerConfig;
                                            $('.chatInputBox').text('Travel Claim Form-A');
                                            me.sendMessage($('.chatInputBox'));
                                        }
					
					// Pallavi Pay Now 08_03_2025

		                        // Disable the clicked button
		                        button.style.pointerEvents = 'none';
		                        button.style.cursor = 'default';
		                        button.style.backgroundColor = '#0D6EFD';
		                        button.style.opacity = '0.8';
		                        if (clickType !== 'web_url') {
		                            // Disable all other buttons except the ones of type 'web_url'
		                            document.querySelectorAll('.buttonTmplContentChild, .buttonTmplContentChild.quickReplyDiv')
		                                .forEach(b => {
		                                    b.style.pointerEvents = 'none';
		                                    b.style.cursor = 'default';
		                                    b.style.backgroundColor = '#0D6EFD';
		                                    b.style.opacity = '0.8';
		                                });
		                        }
		                        // Mark this specific button as clicked to prevent future clicks
		                        this.setAttribute('data-clicked', true);
		                        console.log("All current buttons are now disabled.");
		                    } 
		                    else {
		                        console.log("Button already clicked.");
		                    }
		                    return false;
		                });
		            });
		    }, 100);  // Add a slight delay to ensure buttons are rendered
		    return buttonTemplate;
		// hoonartek customization end
		// Ishika disable
		    
         //pallavi quickreply disable 13/02
        //hoonartek customization starts for button
      //   } else if (tempType === "templatebutton") {
      //       console.log("this is the button");

      //       // Wait for the button template to be rendered
      //       setTimeout(function() {
      //           // Add a click event listener to each button
      //           var clickType='';

		    // //pallavi quickreply disable 13/02
      //           document.querySelectorAll('.buttonTmplContentChild, .buttonTmplContentChild.quickReplyDiv')
      //           .forEach(button => {
      //               button.addEventListener('click', function(e) {
      //                   var clickType = e.target.getAttribute('type');  // Use getAttribute to get type correctly

      //                   if (!button.getAttribute('data-clicked')) {
      //                       console.log("A button was clicked: " + button.textContent);

      //                       // Disable only the clicked button
      //                       button.style.pointerEvents = 'none';
      //                       button.style.cursor = 'default';
      //                       button.style.backgroundColor = '#0D6EFD';
      //                       button.style.opacity = '0.8';

      //                       if (clickType !== 'web_url') {
      //                           // Disable all other buttons except web_url type
      //                           document.querySelectorAll('.buttonTmplContentChild, .buttonTmplContentChild.quickReplyDiv')
      //                           .forEach(b => {
      //                               b.style.pointerEvents = 'none';
      //                               b.style.cursor = 'default';
      //                               b.style.backgroundColor = '#0D6EFD';
      //                               b.style.opacity = '0.8';
      //                           });
      //                       }
      //                       // Mark this specific button as clicked to avoid future clicks
      //                       this.setAttribute('data-clicked', true);
      //                       console.log("All current buttons are now disabled.");
      //                   } 
      //                   else {
      //                       console.log("Button already clicked.");
      //                   }
      //               return false;
      //               });
      //           });
                               
      //           //pallavi quickreply disable 13/02
            //  }, 100);  // Add a slight delay to ensure buttons are rendered
            // return buttonTemplate;
            // //hoonartek customization end
            
            } else if (tempType === "templatelist") {
                return listTemplate;
            } else if (tempType === "templatequickreply") {
                return quickReplyTemplate;
            } else if (tempType === "templateAttachment") {
                return templateAttachment;
            }
            else if (tempType === "carouselTemplate") {
                return carouselTemplate;
            }
            else if (tempType === "pieChartTemplate") {
                return pieChartTemplate;
            }
            else if (tempType === "tableChartTemplate") {
                return tableChartTemplate;
            }
            else if (tempType === "miniTableChartTemplate") {
                return miniTableChartTemplate;
            }
            else if (tempType === "miniTableHorizontalTemplate") {
                return miniTableHorizontalTemplate;
            }
            else if (tempType === "barchartTemplate") {
                return barchartTemplate;
            }
            else if (tempType === "linechartTemplate") {
                return linechartTemplate;
            }else if (tempType === "actionSheetTemplate") {
                return listActionSheetTemplate;
            }
            else if (tempType === "iframe") {
                return iframe;
            }
            else {
                return chatWindowTemplate;
            }
            };

            chatWindow.prototype.historyLoadingComplete = function () {
                var me=this;
                setTimeout(function(me){
                    $('.chatInputBox').focus();
                    $('.disableFooter').removeClass('disableFooter');
                    me.historyLoading = false;
                    if(me.config && me.config && me.config.botOptions && me.config.botOptions.webhookConfig && me.config.botOptions.webhookConfig.enable){
                        me.getBotMetaData();
                    }
                },0,me);
            }
            chatWindow.prototype.historySyncing = function (msgData,res,index) {
                var me = this;
                try {
                    msgData.message[0].cInfo.body = JSON.parse(msgData.message[0].cInfo.body);
                    if (msgData.message[0].cInfo.body && msgData.message[0].cInfo.body.text) {
                        msgData.message[0].cInfo.body = msgData.message[0].cInfo.body.text;
                    }
                    msgData.message[0].component = msgData.message[0].cInfo.body;
                    if (msgData.message[0].component.payload.template_type === 'dropdown_template') {
                        msgData.message[0].component.payload.fromHistory = true;
                        msgData.message[0].component.selectedValue = res[1].messages[index + 1].message[0].cInfo.body;
                    }
                    if (msgData.message[0].component.payload.template_type === 'multi_select' || msgData.message[0].component.payload.template_type === 'advanced_multi_select') {
                        msgData.message[0].component.payload.fromHistory = true;
                    }
                    if (msgData.message[0].component.payload.template_type === 'form_template') {
                        msgData.message[0].component.payload.fromHistory = true;
                    }
                    if (msgData.message[0].component.payload.template_type === 'tableList') {
                        msgData.message[0].component.payload.fromHistory = true;
                    }
                    if (msgData.message[0].component.payload.template_type === 'listView') {
                        msgData.message[0].component.payload.fromHistory = true;
                    }
                    // if (msgData.message[0].component.payload.template_type === 'feedbackTemplate') {
                    //     msgData.message[0].component.payload.fromHistory = true;
                    //     msgData.message[0].cInfo.body="Rate this chat session";
                    // }
                    if (msgData.message[0].component && msgData.message[0].component.payload && (msgData.message[0].component.payload.videoUrl || msgData.message[0].component.payload.audioUrl)) {
                        msgData.message[0].cInfo.body = "";
                    }
                    if (msgData.message[0].component.payload.template_type == 'SYSTEM') {
                        msgData.message[0].cInfo.body = msgData.message[0].component.payload.text || '';
                    }
                    me.renderMessage(msgData);
                } catch (e) {
                    me.renderMessage(msgData);
                }
            }

            chatWindow.prototype.chatHistory = function (res) {
                var me = this;
                if(res[2]==='historysync'){
                    //setTimeout(function () {
                        if (res && res[1] && res[1].messages.length > 0) {
                            res[1].messages.forEach(function (msgData, index) {
                                setTimeout(function () {
                                    if (msgData.type === "outgoing" || msgData.type === "bot_response") {
                                        //if ($('.kore-chat-window .chat-container li#' + msgData.messageId).length < 1) {
                                            msgData.fromHistorySync = true;
                                            me.historySyncing(msgData,res,index);
                                            // me.renderMessage(msgData);
                                        //}
                                    }
                                }, index * 100);
                            });
                        }
                    //}, 4000);//sync history messages after sockeet messages gets into viewport
                }else  if (me.loadHistory) {
                    me.historyLoading = true;
                    if (res && res[1] && res[1].messages.length > 0) {
                        $('.chat-container').hide();
                        $('.historyLoadingDiv').addClass('showMsg');
                        res[1].messages.forEach(function (msgData, index) {
                            msgData.fromHistory=true;
                            setTimeout(function (messagesQueue) {
                                // try {
                                //     msgData.message[0].cInfo.body = JSON.parse(msgData.message[0].cInfo.body);
                                //     msgData.message[0].component = msgData.message[0].cInfo.body;
                                //     me.renderMessage(msgData);
                                // } catch (e) {
                                //     me.renderMessage(msgData);
                                // }
                                var _ignoreMsgs = messagesQueue.filter(function (queMsg) {
                                    return queMsg.messageId === msgData.messageId;
                                });
                                //dont show the the history message if we already have same message came from socket connect  
                                if (!_ignoreMsgs.length) {
                                    me.historySyncing(msgData,res,index);
                                }
                                if (index === res[1].messages.length - 1) {
                                    setTimeout(function (messagesQueue) {
                                        $('.chat-container').show();
                                        $('.chat-container').animate({
                                            scrollTop: $('.chat-container').prop("scrollHeight")
                                        }, 2500);
                                        $('.historyLoadingDiv').removeClass('showMsg');
                                        if(!me.config.multiPageApp.enable){
                                            $('.chat-container').append("<div class='endChatContainer'><span class='endChatContainerText'>End of chat history</span></div>");
                                        }
                                        if(messagesQueue.length){
                                            messagesQueue.forEach(function(msg, currIndex){
                                                me.renderMessage(msg);
                                                if(messagesQueue.length-1 ===  currIndex) {
                                                    messagesQueue = [];
                                                    me.historyLoadingComplete();
                                                }
                                            });
                                        }else{
                                            me.historyLoadingComplete();
                                        }
        
                                    },500,messagesQueue);
                                }
                            }, index * 100,me.messagesQueue);
                        });
                    }
                    else {
                        me.historyLoadingComplete();
                    }
                }
            }
            chatWindow.prototype.applyVariableValue = function(key,value,type){
                try{
                    var cssPrefix = "--sdk-chat-custom-";
                    var cssVariable = "";
                    cssVariable = cssPrefix + '-' + type +'-' +key;
                    // console.log(cssVariable+":",value);
                    if(value === 'square'){
                        value = '12px 12px 2px 12px'
                    }else if(value === 'circle'){
                        value = '20px 20px 20px 20px'
                    }
                    if(cssVariable){
                        document.documentElement.style.setProperty(cssVariable, value);
                    }
                } catch(e){
                    console.log(e);
                }
                
            }
            chatWindow.prototype.applySDKBranding = function (response) {
                if (response && response.activeTheme) {
                    for (var key in response) {
                    switch (key){
                        case 'generalAttributes':
                        if(key  && typeof response[key] === 'object') {
                            for (var property in response[key]){
                                this.applyVariableValue(property,response[key][property],key);
                            }
                        }
                        break;
                        case 'botMessage':
                        if(key  && typeof response[key] === 'object') {
                            for (var property in response[key]){
                                this.applyVariableValue(property,response[key][property],key);
                            }
                        }
                        break;
                        case 'userMessage':
                        if(key  && typeof response[key] === 'object') {
                            for (var property in response[key]){
                                this.applyVariableValue(property,response[key][property],key);
                            }
                        }
                        break;
                        case 'widgetHeader':
                        if(key  && typeof response[key] === 'object') {
                            for (var property in response[key]){
                                this.applyVariableValue(property,response[key][property],key);
                            }
                        }
                        break;
                        case 'widgetFooter':
                        if(key  && typeof response[key] === 'object') {
                            for (var property in response[key]){
                                this.applyVariableValue(property,response[key][property],key);
                            }
                        }
                        break;
                        case 'widgetBody':
                        if(key  && typeof response[key] === 'object') {
                            for (var property in response[key]){
                                if(property === 'backgroundImage' && response[key] && response[key]['useBackgroundImage']){
                                    $(".kore-chat-body").css("background-image", "url(" + response[key]['backgroundImage'] + ")");
                                } else {
                                    this.applyVariableValue(property,response[key][property],key);
                                }
                            }
                        }
                        case 'buttons':
                            if(key  && typeof response[key] === 'object') {
                                for (var property in response[key]){
                                    this.applyVariableValue(property,response[key][property],key);
                                }
                            }
                        break;
                        case 'digitalViews':
                            var defaultTheme = 'defaultTheme-kore';
                            if(response && response[key] && response[key].panelTheme){
                              var digitalViewsThemeMapping = {
                                  'theme_one':"defaultTheme-kore",
                                  'theme_two':"darkTheme-kore",
                                  'theme_three':"defaultTheme-kora",
                                  'theme_four':"darkTheme-kora"
                              }
                              if(digitalViewsThemeMapping[response[key].panelTheme]){
                                defaultTheme = digitalViewsThemeMapping[response[key].panelTheme];
                                $('.kr-wiz-menu-chat').addClass(defaultTheme);
                                $('.kr-wiz-menu-chat').removeClass('defaultTheme-kore');
                                
                              }
                            }
                        default:
                        break;
                    }
                   }
                    $(".kore-chat-window").addClass('customBranding-theme');
                }
            };
            this.applySDKBranding = function (res) {
                chatInitialize.applySDKBranding.call(chatInitialize,res);
            }
            function IsJsonString() {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }
            function insertHtmlData(_txtBox, _html) {
                var _input = _txtBox;
                sel = window.getSelection();
                if (sel.rangeCount > 0) {
                    range = sel.getRangeAt(0);
                    range.deleteContents();
                }
                prevRange = prevRange ? prevRange : range;
                if (prevRange) {
                    node = document.createElement("span");
                    prevRange.insertNode(node);
                    var _span = document.createElement("span");
                    _span.innerHTML = _html;
                    prevRange.insertNode(_span);
                    prevRange.setEndAfter(node);
                    prevRange.setStartAfter(node);
                    prevRange.collapse(false);
                    sel = window.getSelection();
                    sel.removeAllRanges();
                    sel.addRange(prevRange);
                    var focused = document.activeElement;
                    if (focused && !focused.className == "chatInputBox") {
                        _input.focus();
                    }
                    return _input;
                } else {
                    _input.appendChild(html);
                }
            }
            function setCaretEnd(_this) {
                var sel;
                if (_this && _this.item(0) && _this.item(0).innerText.length) {
                    var range = document.createRange();
                    range.selectNodeContents(_this[0]);
                    range.collapse(false);
                    var sel1 = window.getSelection();
                    sel1.removeAllRanges();
                    sel1.addRange(range);
                    prevRange = range;
                } else {
                    prevRange = false;
                    if (_this && _this[0]) {
                        _this[0].focus();
                    }
                }
            }
            function strSplit(str) {
                return (str.split('.'));
            }
            /*function fetchBotDetails(botData,botInfo) {
                if(botData && botData.userInfo && botData.authorization) {
                    $.ajax({
                        type: "GET",
                        url: koreAPIUrl + "1.1/users/"+botData.userInfo.userId+"/builder/streams/"+botInfo.taskBotId,
                        dataType: "json",
                        headers: {
                            Authorization: "bearer " + botData.authorization.accessToken
                        },
                        success: function (res) {
                            var _speechEnabledForBot = false;
                            for(var i=0; i<res.channels.length;i++) {
                                if(res.channels[i].type === "rtm") {
                                    _speechEnabledForBot = res.channels[i].sttEnabled || false;
                                    break;
                                }
                            }
                            var _microPhoneEle = document.getElementsByClassName("sdkFooterIcon microphoneBtn")[0];
                            var _ttsSpeakerEle = document.getElementsByClassName("sdkFooterIcon ttspeakerDiv")[0];
                            if(!_speechEnabledForBot) {
                                if(_microPhoneEle) {
                                    _microPhoneEle.remove();
                                }
                                if(_ttsSpeakerEle) {
                                    _ttsSpeakerEle.remove();
                                }
                            }
                            else {
                                if(_microPhoneEle) {
                                    _microPhoneEle.classList.remove("hide");
                                }
                                if(_ttsSpeakerEle) {
                                    _ttsSpeakerEle.classList.remove("hide");
                                }
                            }
                        },
                        error: function (msg) {
                            console.log("Failed to fetch bot details.");
                        }
                    });
                }
            }*/
            window.onbeforeunload = function () {
                if (chatInitialize && $(chatInitialize.config.chatContainer).length > 0) {
                    chatInitialize.stopSpeaking();
                    chatInitialize.destroy();
                    //return null;
                }
            }
            this.addListener = function (evtName, trgFunc) {
                if (!_eventQueue) {
                    _eventQueue = {};
                }
                if (evtName && evtName.trim().length > 0) {
                    if (!_eventQueue[evtName]) {
                        _eventQueue[evtName] = [];
                    }
                    if (typeof trgFunc === "function") {
                        _eventQueue[evtName].push(trgFunc);
                    }
                }
            }
            this.removeListener = function (evtName) {
                if (_eventQueue && _eventQueue[evtName]) {
                    delete _eventQueue[evtName];
                }
            }

            this.callListener = function (evtName, data) {
                if (_eventQueue && _eventQueue[evtName]) {
                    for (var i = 0; i < _eventQueue[evtName].length; i++) {
                        if (typeof _eventQueue[evtName][i] === "function") {
                            _eventQueue[evtName][i].call(this, data);
                        }
                    }
                }
            }
            this.show = function (cfg) {
                if ($('body').find('.kore-chat-window').length > 0) {
                    return false;
                }
                cfg.chatHistory=this.chatHistory;
                cfg.handleError=this.showError;
                if(cfg.widgetSDKInstace){
                    this.addWidgetEvents(cfg);
                };
                chatInitialize = new chatWindow(cfg);
                chatInitialize.customTemplateObj = new customTemplate(cfg,chatInitialize);
                
                return this;
            };
            
            this.addWidgetEvents = function (cfg) {
                if (cfg) {
                    var wizSDK = cfg.widgetSDKInstace;
                    wizSDK.events.onPostback = function (data) {
                            $('.chatInputBox').text(data.payload);
                            chatInitialize.sendMessage($('.chatInputBox'), data.utterance, data);
                    };
                }
            };
            
            this.setWidgetInstance=function(widgetSDKInstace){
                if(widgetSDKInstace){
                    chatInitialize.config.widgetSDKInstace=widgetSDKInstace;
                    this.addWidgetEvents(chatInitialize.config);
                }
            }           
            this.destroy = function () {
                if (chatInitialize && chatInitialize.destroy) {
                    _eventQueue = {};
                    chatInitialize.destroy();
                }
                if (_ttsContext) {
                    _ttsContext.close();
                    _ttsContext = null;
                }
                window.removeEventListener('online', updateOnlineStatus);
                window.removeEventListener('offline', updateOnlineStatus);
            };
            this.initToken = function (options) {
                assertionToken = "bearer " + options.accessToken;
            };
                      
            this.hideError = function () {
                $('.errorMsgBlock').removeClass('showError');
            }
            this.showError = function (response) {
                try {
                    response = JSON.parse(response);
                    if (response.errors && response.errors[0]) {
                        $('.errorMsgBlock').text(response.errors[0].msg);
                        $('.errorMsgBlock').addClass('showError');
                    }
                } catch (e) {
                    $('.errorMsgBlock').text(response);
                    $('.errorMsgBlock').addClass('showError');
                }
            }
            this.botDetails = function (response, botInfo) {
                if(window.KoreAgentDesktop){
                    if (response && response.userInfo) {
                        KoreAgentDesktop(response.userInfo.userId, response);
                    } else {
                        console.log("AgentDesktop initialization - did not receive authResponse")
                    }    
                }
                /* Remove hide class for tts and speech if sppech not enabled for this bot */
                /*setTimeout(function () {
                    fetchBotDetails(response,botInfo);
                }, 50);*/
            }
            this.chatHistory = function (res) {
                chatInitialize.chatHistory.call(chatInitialize,res);
            }
            // chatWindow.prototype.chatHistory = function (res) {
            //     var me = this;
            //     if(res[2]==='historysync'){
            //         //setTimeout(function () {
            //             if (res && res[1] && res[1].messages.length > 0) {
            //                 res[1].messages.forEach(function (msgData, index) {
            //                     setTimeout(function () {
            //                         if (msgData.type === "outgoing" || msgData.type === "bot_response") {
            //                             //if ($('.kore-chat-window .chat-container li#' + msgData.messageId).length < 1) {
            //                                 msgData.fromHistorySync=true;
                                                                                        
            //                                 try {
            //                                     msgData.message[0].cInfo.body = JSON.parse(msgData.message[0].cInfo.body);
            //                                     if (msgData.message[0].cInfo.body && msgData.message[0].cInfo.body.text) {
            //                                         msgData.message[0].cInfo.body = msgData.message[0].cInfo.body.text;
            //                                     }
            //                                     msgData.message[0].component = msgData.message[0].cInfo.body;
            //                                     if (msgData.message[0].component.payload.template_type === 'dropdown_template') {
            //                                         msgData.message[0].component.selectedValue=res[1].messages[index+1].message[0].cInfo.body;                                    
            //                                     }
            //                                     if (msgData.message[0].component.payload.template_type === 'feedbackTemplate') {
            //                                         msgData.message[0].cInfo.body="Rate this chat session";
            //                                     }
            //                                     if(msgData.message[0].component && msgData.message[0].component.payload && (msgData.message[0].component.payload.videoUrl || msgData.message[0].component.payload.audioUrl)){
            //                                         msgData.message[0].cInfo.body = "";
            //                                     }
            //                                     me.renderMessage(msgData);
            //                                 } catch (e) {
            //                                     me.renderMessage(msgData);
            //                                 }
            //                             //}
            //                         }
            //                     }, index * 100);
            //                 });
            //             }
            //         //}, 4000);//sync history messages after sockeet messages gets into viewport
            //     }else  if (me.loadHistory) {
            //         me.historyLoading = true;
            //         if (res && res[1] && res[1].messages.length > 0) {
            //             $('.chat-container').hide();
            //             $('.historyLoadingDiv').addClass('showMsg');
            //             res[1].messages.forEach(function (msgData, index) {
            //                 setTimeout(function (messagesQueue) {
            //                     // try {
            //                     //     msgData.message[0].cInfo.body = JSON.parse(msgData.message[0].cInfo.body);
            //                     //     msgData.message[0].component = msgData.message[0].cInfo.body;
            //                     //     me.renderMessage(msgData);
            //                     // } catch (e) {
            //                     //     me.renderMessage(msgData);
            //                     // }
            //                     var _ignoreMsgs = messagesQueue.filter(function (queMsg) {
            //                         return queMsg.messageId === msgData.messageId;
            //                     });
            //                     //dont show the the history message if we already have same message came from socket connect  
            //                     if (!_ignoreMsgs.length) {
            //                         try {
            //                             msgData.message[0].cInfo.body = JSON.parse(msgData.message[0].cInfo.body);
            //                             if (msgData.message[0].cInfo.body && msgData.message[0].cInfo.body.text) {
            //                                 msgData.message[0].cInfo.body = msgData.message[0].cInfo.body.text;
            //                             }
            //                             msgData.message[0].component = msgData.message[0].cInfo.body;
            //                             if (msgData.message[0].component.payload.template_type === 'dropdown_template') {
            //                                 msgData.message[0].component.payload.fromHistory = true;
            //                                 msgData.message[0].component.selectedValue=res[1].messages[index+1].message[0].cInfo.body;                                    
            //                             }
            //                             if (msgData.message[0].component.payload.template_type === 'multi_select' || msgData.message[0].component.payload.template_type === 'advanced_multi_select') {
            //                                 msgData.message[0].component.payload.fromHistory = true;
            //                             }
            //                             if (msgData.message[0].component.payload.template_type === 'form_template') {
            //                                 msgData.message[0].component.payload.fromHistory = true;
            //                             }
            //                             if (msgData.message[0].component.payload.template_type === 'tableList') {
            //                                 msgData.message[0].component.payload.fromHistory = true;
            //                             }
            //                             if (msgData.message[0].component.payload.template_type === 'listView') {
            //                                 msgData.message[0].component.payload.fromHistory = true;
            //                             }
            //                             if (msgData.message[0].component.payload.template_type === 'List') {
            //                                 msgData.message[0].component.payload.fromHistory = true;
            //                             }
            //                             if (msgData.message[0].component.payload.template_type === 'feedbackTemplate') {
            //                                 msgData.message[0].component.payload.fromHistory = true;
            //                                 msgData.message[0].cInfo.body="Rate this chat session";
            //                             }
            //                                                                     if(msgData.message[0].component && msgData.message[0].component.payload && (msgData.message[0].component.payload.videoUrl || msgData.message[0].component.payload.audioUrl)){
            //                                 msgData.message[0].cInfo.body = "";
            //                             }
            //                             me.renderMessage(msgData);
            //                         } catch (e) {
            //                             me.renderMessage(msgData);
            //                         }
            //                     }
            //                     if (index === res[1].messages.length - 1) {
            //                         setTimeout(function (messagesQueue) {
            //                             $('.chat-container').show();
            //                             $('.chat-container').animate({
            //                                 scrollTop: $('.chat-container').prop("scrollHeight")
            //                             }, 2500);
            //                             $('.historyLoadingDiv').removeClass('showMsg');
            //                             if(!me.config.botOptions.maintainContext){
            //                                 $('.chat-container').append("<div class='endChatContainer' aria-live='off' aria-hidden='true' ><span class='endChatContainerText'>"+botMessages.endofchat+"</span></div>");
            //                             }
            //                             if(messagesQueue.length){
            //                                 messagesQueue.forEach(function(msg, currIndex){
            //                                     me.renderMessage(msg);
            //                                     if(messagesQueue.length-1 ===  currIndex) {
            //                                         messagesQueue = [];
            //                                         me.historyLoadingComplete();
            //                                     }
            //                                 });
            //                             }else{
            //                                 me.historyLoadingComplete();
            //                             }
        
            //                         },500,messagesQueue);
            //                     }
            //                 }, index * 100,messagesQueue);
            //             });
            //         }
            //         else {
            //            me.historyLoadingComplete();
            //         }
            //     }
            // }
            this.closeConversationSession = function () {
               if(chatInitialize){
                    chatInitialize.closeConversationSession();
               } 
            }
            /*************************************       Microphone code      **********************************************/
            var final_transcript = '';
            var recognizing = false;
            var recognition = null;
            var prevStr = "";
            setTimeout(function(){
                if(chatInitialize && chatInitialize.config && chatInitialize.config.stt && chatInitialize.config.stt.vendor === 'google') {
                    if(window.initGapi){
                        initGapi();
                    }else{
                        console.warn("Please uncomment Google Speech files('speech/app.js','speech/key.js' and 'client_api.js' in index.html")
                    }
        
                }
            },2000);
            function isChrome() {
                var isChromium = window.chrome,
                    winNav = window.navigator,
                    vendorName = winNav.vendor,
                    isOpera = winNav.userAgent.indexOf("OPR") > -1,
                    isIEedge = winNav.userAgent.indexOf("Edge") > -1,
                    isIOSChrome = winNav.userAgent.match("CriOS");

                if (isIOSChrome) {
                    return true;
                } else if (
                    isChromium !== null &&
                    typeof isChromium !== "undefined" &&
                    vendorName === "Google Inc." &&
                    isOpera === false &&
                    isIEedge === false
                ) {
                    return true;
                } else {
                    return false;
                }
            }
            chatWindow.prototype.unfreezeUIOnHistoryLoadingFail=function () {
                var me=this;
                setTimeout(function (me) {
                    if (me.loadHistory) {
                        $('.chatInputBox').focus();
                        $('.disableFooter').removeClass('disableFooter');
                        me.historyLoading = false;
                    }
                }, 20000,me);
            }
            // pallavi azure 13_02_2025 commented Its of webkit used mic
            //         if ('webkitSpeechRecognition' in window && isChrome()) {
            //             recognition = new window.webkitSpeechRecognition;
            //             final_transcript = '';
            //             recognition.continuous = true;
            //             recognition.interimResults = true;

            //             recognition.onstart = function () {
            //                 prevStr = "";
            //                 recognizing = true;
            //                 $('.recordingMicrophone').css('display', 'block');
            //                 $('.notRecordingMicrophone').css('display', 'none');
            //             };

            //             recognition.onerror = function (event) {
            //                 console.log(event.error);
            //                 $('.recordingMicrophone').trigger('click');
            //                 $('.recordingMicrophone').css('display', 'none');
            //                 $('.notRecordingMicrophone').css('display', 'block');
            //             };

            //             recognition.onend = function () {
            //                 recognizing = false;
            //                 $('.recordingMicrophone').trigger('click');
            //                 $('.recordingMicrophone').css('display', 'none');
            //                 $('.notRecordingMicrophone').css('display', 'block');
            //             };

            //             recognition.onresult = function (event) {
            //                 final_transcript = '';
            //                 var interim_transcript = '';
            //                 for (var i = event.resultIndex; i < event.results.length; ++i) {
            //                     if (event.results[i].isFinal) {
            //                         final_transcript += event.results[i][0].transcript;
            //                     } else {
            //                         interim_transcript += event.results[i][0].transcript;
            //                     }
            //                 }
            //                 final_transcript = capitalize(final_transcript);
            //                 final_transcript = linebreak(final_transcript);
            //                 interim_transcript = linebreak(interim_transcript);
            //                 if (final_transcript !== "") {
            //                     prevStr += final_transcript;
            //                 }
            //                 //console.log('Interm: ',interim_transcript);
            //                 //console.log('final: ',final_transcript);

	        // // hoonartek Kore customization for mic on off - Navya
            //                 if (recognizing && sessionStorage.getItem("mic")== 'true') {
            //                     $('.chatInputBox').html(prevStr + "" + interim_transcript);
            //                     $('.sendButton').removeClass('disabled');
            //                     micEnable();
            //                 }
            //             // Hoonartek kore customization starts
            //                 if (final_transcript !== "") {
            //                     var me = window.chatContainerConfig;
            //                     me.sendMessage($('.chatInputBox'));
            //                     final_transcript = "";  // hoonartek Kore customization for mic on off - Navya
            //                     prevStr ="";
            //                     // recognition.stop()  //for turn off mic after send 

            //                 }
            //             // Hoonartek customization ends
            //                 setTimeout(function () {
            //                     setCaretEnd(document.getElementsByClassName("chatInputBox"));
            //                     document.getElementsByClassName('chatInputBox')[0].scrollTop = document.getElementsByClassName('chatInputBox')[0].scrollHeight;
            //                 }, 350);
            //             };
            //         }
            // pallavi azure 13_02_2025 commented Its of webkit used mic

            // pallavi azure 13_02_2025 working android with webkit
            //         if ('webkitSpeechRecognition' in window && isChrome()) {
            //     recognition = new window.webkitSpeechRecognition();
            //     final_transcript = '';
            //     recognition.continuous = true;
            //     recognition.interimResults = true;
            
            //     let inputSent = false; // Prevent multiple sends
            //     let speechEndTimer = null; // Timer for handling speech end
            //     const SPEECH_END_DELAY = 1500; // Delay to detect speech end
            
            //     recognition.onstart = function () {
            //         if (!recognizing) {
            //             //alert("Speech recognition started");
            //             recognizing = true;
            //             prevStr = '';
            //             inputSent = false; // Reset the inputSent flag when recognition starts
            //             $('.recordingMicrophone').css('display', 'block');
            //             $('.notRecordingMicrophone').css('display', 'none');
            //         }
            //     };
            
            //     recognition.onerror = function (event) {
            //         console.error("Speech recognition error:", event.error);
            //         stopRecognition();
            //     };
            
            //     recognition.onend = function () {
            //         recognizing = false;
            //         stopRecognition();
            //     };
            
            //     recognition.onresult = function (event) {
            //         let interim_transcript = '';
            
            //         // Process speech recognition results
            //         for (let i = event.resultIndex; i < event.results.length; ++i) {
            //             if (event.results[i].isFinal) {
            //                 final_transcript = event.results[i][0].transcript;
            //             } else {
            //                 interim_transcript += event.results[i][0].transcript;
            //             }
            //         }
            
            //         // Display interim results dynamically without appending
            //         if (recognizing && sessionStorage.getItem("mic") === 'true') {
            //             $('.chatInputBox').html(interim_transcript); // Show only interim transcript temporarily
            //             $('.sendButton').removeClass('disabled'); // Enable the send button
            //         }
            
            //         // Send final transcript only once
            //         if (final_transcript !== "" && !inputSent) {
            //             // Clear previous speechEndTimer
            //             if (speechEndTimer) clearTimeout(speechEndTimer);
            
            //             // Start a timer to send final transcript after speech ends
            //             speechEndTimer = setTimeout(function () {
            //                 if (!inputSent) {
            //                     console.log("Sending final transcript: ", final_transcript);
            
            //                     // Update input box with clean final result
            //                     $('.chatInputBox').html(final_transcript); 
            //                     const me = window.chatContainerConfig;
            //                     me.sendMessage($('.chatInputBox')); // Send the message
            
            //                     // Reset variables
            //                     prevStr = ''; 
            //                     final_transcript = '';
            //                     inputSent = true; // Mark input as sent
            //                     recognition.stop(); // Stop recognition after sending
            //                 }
            //             }, SPEECH_END_DELAY);
            //         }
            
            //         // Adjust caret and scrolling
            //         setTimeout(function () {
            //             setCaretEnd(document.getElementsByClassName("chatInputBox"));
            //             document.getElementsByClassName('chatInputBox')[0].scrollTop = document.getElementsByClassName('chatInputBox')[0].scrollHeight;
            //         }, 350);
            //     };
            
            //     function stopRecognition() {
            //         if (recognition) {
            //             recognition.stop();
            //             recognizing = false;
            //             $('.recordingMicrophone').css('display', 'none');
            //             $('.notRecordingMicrophone').css('display', 'block');
            //         }
            //     }
            // }
            // pallavi azure 13_02_2025 working android with webkit

            var two_line = /\n\n/g;
            var one_line = /\n/g;
            function linebreak(s) {
                return s.replace(two_line, '<p></p>').replace(one_line, '<br>');
            }

            function capitalize(s) {
                return s.replace(s.substr(0, 1), function (m) { return m.toUpperCase(); });
            }
            function startGoogleWebKitRecognization() {
                if (recognizing) {
                    recognition.stop();
                    return;
                }
                final_transcript = '';
                recognition.lang = chatInitialize.config.stt.webapi.recognitionLanguage;
                recognition.start();
            }
            function startGoogleSpeech() {
                if (rec) {
                    rec.record();
                    $('.recordingMicrophone').css('display', 'block');
                    $('.notRecordingMicrophone').css('display', 'none');
                    console.log('recording...');
                    intervalKey = setInterval(function () {
                        rec.export16kMono(function (blob) {
                            console.log(new Date());
                            if (chatInitialize.config.stt.vendor === 'google') {
                                sendBlobToSpeech(blob, 'LINEAR16', 16000);
                            }
                            else {
                                socketSend(blob);
                            }
                            rec.clear();
                        }, 'audio/x-raw');
                    }, 1000);
                }
            }

            // pallavi azure 13_02_2025 commented
            // function getSIDToken() {      
            //     if(chatInitialize.config.stt.vendor === 'azure'){
            //         if (recognizer != null) {
            //             RecognizerStop(SDK, recognizer);
            //         }
            //         recognizer = RecognizerSetup(SDK, chatInitialize.config.stt.azure.recognitionMode, chatInitialize.config.stt.azure.recognitionLanguage, 0, chatInitialize.stt.azure.subscriptionKey);
            //         RecognizerStart(SDK, recognizer);
            //     } else if(chatInitialize.config.stt.vendor === 'google'){
            //         // using google cloud speech API
            //         micEnable();
            //     } else if(chatInitialize.config.stt.vendor === 'webapi') {
            //         // using webkit speech recognition
            //         startGoogleWebKitRecognization();
            //     }
            // }
            // pallavi azure 13_02_2025 commented

            // pallavi azure 13_02_2025
            function getSIDToken() {     
                console.log("In getSIDToken"); 
                if(chatInitialize.config.stt.vendor === 'azure'){
                    console.log("In getSIDToken IF condition"); 
                    // if (recognizer != null) {
                    //     RecognizerStop(SDK, recognizer);
                    // }
                    // recognizer = RecognizerSetup(SDK, chatInitialize.config.stt.azure.recognitionMode, chatInitialize.config.stt.azure.recognitionLanguage, 0, chatInitialize.config.stt.azure.subscriptionKey);
                    // RecognizerStart(SDK, recognizer);
                    
                    //pallavi-mic
                    if (window.currentSpeechRecognizer) {
                        window.currentSpeechRecognizer.stopContinuousRecognitionAsync(() => {
                            console.log("Speech Recognizer Stopped.");
                            window.currentSpeechRecognizer = null;
                        });
                    }
                    //pallavi-mic
		    //OFF GREEN MIC BEFORE RECOGNITION Pallavi_14_02_2025
                    // $('.recordingMicrophone').css('display', 'block');  
                    // $('.notRecordingMicrophone').css('display', 'none'); 
		    //OFF GREEN MIC BEFORE RECOGNITION Pallavi_14_02_2025
                    console.log("Mic ON: Session Started");
                    window.recognizeSpeechWithAzure()
                    // pallu 2
                    console.log("Hitting new stopSpeakingAzureTTS");
                    window.stopSpeakingAzureTTS();
                    // pallu 2
                } else if(chatInitialize.config.stt.vendor === 'google'){
                    // using google cloud speech API
                    micEnable();
                } else if(chatInitialize.config.stt.vendor === 'webapi') {
                    // using webkit speech recognition
                    startGoogleWebKitRecognization();
                }
            }
            // pallavi azure 13_02_2025

            function micEnable() {
                if (isRecordingStarted) {
                    return;
                }
                if (!navigator.getUserMedia) {
                    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
                }
                if (navigator.getUserMedia) {
                    isRecordingStarted = true;
                    navigator.getUserMedia({
                        audio: true
                    }, success, function (e) {
                        isRecordingStarted = false;
                        alert('Please enable the microphone permission for this page');
                        return;
                    });
                } else {
                    isRecordingStarted = false;
                    alert('getUserMedia is not supported in this browser.');
                }
            }

            function afterMicEnable() {
                if (navigator.getUserMedia) {
                    if (!rec) {
                        isRecordingStarted = false;
                        console.error("Recorder undefined");
                        return;
                    }
                    if (_connection) {
                        cancel();
                    }
                    try {
                        _connection = createSocket();
                    } catch (e) {
                        isRecordingStarted = false;
                        console.log(e);
                        console.error('Web socket not supported in the browser');
                    }
                }
            }

            function success(e) {
                isListening = true;
                mediaStream = e;
                if (!context) {
                    var Context = window.AudioContext || window.webkitAudioContext;
                    context = new Context();
                }
                mediaStreamSource = context.createMediaStreamSource(mediaStream);
                window.userSpeechAnalyser = context.createAnalyser();
                mediaStreamSource.connect(window.userSpeechAnalyser);
                console.log('Mediastream created');
                if (_connection) {
                    _connection.close();
                    _connection = null;
                }
                if (rec) {
                    rec.stop();
                    rec.clear();
                    //rec.destroy();
                    rec = null;
                }
                rec = new Recorder(mediaStreamSource, {
                    workerPath: recorderWorkerPath
                });
                console.log('Recorder Initialized');
                _permission = true;
                if (chatInitialize.config.stt.vendor === 'google') {
                    // afterMicEnable();
                    startGoogleSpeech();
                }
                setTimeout(function () {
                    setCaretEnd(document.getElementsByClassName("chatInputBox"));
                }, 600);
            }

            function cancel() {
                // Stop the regular sending of audio (if present) and disconnect microphone
                clearInterval(intervalKey);
                isRecordingStarted = false;
                if ($('.recordingMicrophone')) {
                    $('.recordingMicrophone').css('display', 'none');
                }
                if ($('.notRecordingMicrophone')) {
                    $('.notRecordingMicrophone').css('display', 'block');
                }
                if (mediaStream !== null && mediaStream && mediaStream.getTracks()[0].enabled) {
                    var track = mediaStream.getTracks()[0];
                    track.stop();
                }
                if (_connection) {
                    _connection.close();
                    _connection = null;
                }
                if (rec) {
                    rec.stop();
                    rec.clear();
                }
                sidToken = "";
            }

            function socketSend(item) {
                if (_connection) {
                    var state = _connection.readyState;
                    if (state === 1) {
                        if (item instanceof Blob) {
                            if (item.size > 0) {
                                _connection.send(item);
                                //console.log('Send: blob: ' + item.type + ', ' + item.size);
                            } else {
                                //console.log('Send: blob: ' + item.type + ', ' + item.size);
                            }
                        } else {
                            console.log(item);
                            _connection.send(item);
                            //console.log('send tag: '+ item);
                        }
                    } else {
                        isRecordingStarted = false;
                        console.error('Web Socket readyState != 1: ', state, 'failed to send :' + item.type + ', ' + item.size);
                        cancel();
                    }
                } else {
                    isRecordingStarted = false;
                    //console.error('No web socket connection: failed to send: ', item);
                }
            }


            function createSocket() {
                window.ENABLE_MICROPHONE = true;
                window.SPEECH_SERVER_SOCKET_URL = sidToken;
                var serv_url = window.SPEECH_SERVER_SOCKET_URL;
                var userEmail = userIdentity;
                window.WebSocket = window.WebSocket || window.MozWebSocket;
                var url = serv_url + '&' + CONTENT_TYPE + '&email=' + userEmail;
                var _connection = new WebSocket(url);
                // User is connected to server
                _connection.onopen = function (e) {
                    console.log('User connected');
                    _user_connection = true;
                    rec.record();
                    $('.recordingMicrophone').css('display', 'block');
                    $('.notRecordingMicrophone').css('display', 'none');
                    console.log('recording...');
                    prevStr = "";
                    intervalKey = setInterval(function () {
                        rec.export16kMono(function (blob) {
                            socketSend(blob);
                            rec.clear();
                        }, 'audio/x-raw');
                    }, INTERVAL);
                };
                // On receving message from server
                _connection.onmessage = function (msg) {
                    var data = msg.data;
                    var interim_transcript = '';
                    //console.log(data);
                    if (data instanceof Object && !(data instanceof Blob)) {
                        console.log('Got object that is not a blob');
                    } else if (data instanceof Blob) {
                        console.log('Got Blob');
                    } else {
                        var res = JSON.parse(data);
                        if (isListening && res.status === 0) {
                            interim_transcript = res.result.hypotheses[0].transcript;
                            if (res.result.final) {
                                prevStr += res.result.hypotheses[0].transcript + " ";
                                interim_transcript = "";
                            }

                            console.log('Interm: ', interim_transcript);
                            console.log('final: ', prevStr);
                            $('.chatInputBox').html(prevStr + "" + interim_transcript);
                            setTimeout(function () {
                                setCaretEnd(document.getElementsByClassName("chatInputBox"));
                                document.getElementsByClassName('chatInputBox')[0].scrollTop = document.getElementsByClassName('chatInputBox')[0].scrollHeight;
                            }, 350);
                            /*if (res.result.final) {
                                var final_result = res.result.hypotheses[0].transcript;
                                $('.chatInputBox').html($('.chatInputBox').html() + ' ' + final_result);
                                setTimeout(function () {
                                    setCaretEnd(document.getElementsByClassName("chatInputBox"));
                                    document.getElementsByClassName('chatInputBox')[0].scrollTop = document.getElementsByClassName('chatInputBox')[0].scrollHeight;
                                }, 350);
                            } else {
                                //$('.chatInputBox').html($('.chatInputBox').html() + ' '+ res.result.hypotheses[0].transcript);
                                console.log('Not final: ', res.result.hypotheses[0].transcript);
                            }*/
                        } else {
                            console.log('Server error : ', res.status);
                        }
                    }
                };
                // If server is closed
                _connection.onclose = function (e) {
                    if ($('.chatInputBox').text() !== '' && chatInitialize.config.autoEnableSpeechAndTTS) {
                        var me = window.chatContainerConfig;
                        me.sendMessage($('.chatInputBox'));
                    }
                    isRecordingStarted = false;
                    console.log('Server is closed');
                    console.log(e);
                    cancel();
                };
                // If there is an error while sending or receving data
                _connection.onerror = function (e) {
                    console.log("Error : ", e);
                };
                return _connection;
            }

            function stop() {
                if ($('.chatInputBox').text() !== '' && chatInitialize.config.autoEnableSpeechAndTTS) {
                    var me = window.chatContainerConfig;
                    me.sendMessage($('.chatInputBox'));
                }
                clearInterval(intervalKey);
                $('.recordingMicrophone').css('display', 'none');
                $('.notRecordingMicrophone').css('display', 'block');
                // pallavi azure 13_02_2025
                if (window.currentSpeechRecognizer) {
                    window.currentSpeechRecognizer.stopContinuousRecognitionAsync(() => {
                        console.log("Speech Recognizer Stopped.");
                        window.currentSpeechRecognizer = null;
                    });
                }
                // pallavi azure 13_02_2025
                if (rec) {
                    rec.stop();
                    isListening = false;
                    console.log('stopped recording..');
                    setTimeout(function () {
                        if (_connection) {
                            _connection.close();
                            _connection = null;
                        }
                    }, 1000); // waiting to send and receive last message

                    rec.export16kMono(function (blob) {
                        socketSend(blob);
                        rec.clear();
                        if (_connection) {
                            _connection.close();
                        }
                        var track = mediaStream.getTracks()[0];
                        track.stop();
                        //rec.destroy();
                        isRecordingStarted = false;
                    }, 'audio/x-raw');
                }
                if (recognizing) {
                    recognition.stop();
                    recognizing = false;
                }
            };

            $(window).on('beforeunload', function () {
                cancel();
            });

            /*************************************    Microphone code end here    **************************************/

            /*************************************    TTS code start here         **************************************/
    
            // pallavi azure 13_02_2025 commented webkit
    //         chatWindow.prototype.speakWithWebAPI= function(_txtToSpeak) {
    //             if(!_txtToSpeak){
    //                 return false;
    //             }
    //             if('speechSynthesis' in window){
    //                 // window.speechSynthesis.cancel();
    //                 // Create a new instance of SpeechSynthesisUtterance.
    //                 // var msg = new SpeechSynthesisUtterance();
    //                 // msg.text =_txtToSpeak;
    //                 //  msg.voice = speechSynthesis.getVoices().filter(function(voice) {        
    //                 //      return voice.default===true;
    //                 //     })[0];
    //                 // Queue this utterance.
    //                 // window.speechSynthesis.speak(msg);
    //                 audioMsgs.push(_txtToSpeak);
    //                 playMessageSequence();
    //            }else{
    //                console.warn("KORE:Your browser doesn't support TTS(Speech Synthesiser)")
    //            }
    //         }
    //         chatWindow.prototype.stopSpeaking= function() {
    //             var me = this;
    //             if (me.config.isTTSEnabled) {
    //                 if(me.config.ttsInterface && me.config.ttsInterface==="webapi"){
    //                     if('speechSynthesis' in window){
    //                         audioMsgs = [];
    //                         audioPlaying = false;
    //                         window.speechSynthesis.cancel();
    //                     }
    //                 }
    //             }
    //         }

    //         function playMessageSequence() {
	// //hoonartek kore customization for mic on off (stop the recognization while message playing through speaker)
    //             if(recognizing && audioPlaying){    //hoonartek kore customization for mic on off
    //                 recognition.stop();
    //             }
    //     //hoonartek kore customization for mic on off
    //             if (!speechSyn) {
    //                 speechSyn = new SpeechSynthesisUtterance();
    //             }
        
    //             if (audioMsgs.length > 0 && !audioPlaying) {
    //                 audioPlaying = true;
    //                 speechSyn.text = audioMsgs.shift();
	// 	//hoonartek kore customization for mic on off starts1 for checkbox/templates mic on off
    //                 if(speechSyn.text == 'Please select the value manually' || speechSyn.text == 'Please select the options manually'|| speechSyn.text == 'Please fill out the form manually'){
    //                     conMicOff = true;
    //                 }
    //                 else{
    //                     conMicOff = false;
    //                 }
    //             //hoonartek kore customization for mic on off ends1
    //                 window.speechSynthesis.speak(speechSyn);
    //                 speechSyn.onend = function () {
    //                     audioPlaying = false;
    //                     playMessageSequence();
    //                 }    
    //             }//hoonartek kore customization for mic on off
    //             if(recognizing && audioPlaying){    //hoonartek kore customization for mic on off
    //                 recognition.stop();
    //             }
    //             else if(sessionStorage.getItem("mic")== 'true' && !recognizing && !audioPlaying && !conMicOff){   //hoonartek kore customization for mic on off
    //                 recognition.start();  
    //             }
    //     //hoonartek kore customization for mic on off
    //         }
    // pallavi azure 13_02_2025 commented webkit

            // pallavi azure 13_02_2025
            // chatWindow.prototype.speakWithAzure = function(_txtToSpeak) {
            //     console.log("In chatWindow.prototype.speakWithAzure ");
            //     if (!_txtToSpeak) {
            //         console.log("In !_txtToSpeak ");
            //         console.log("No text to speak.");
            //         return;
            //     }
            //     console.warn("\n\n----------------------_txtToSpeak----------", _txtToSpeak);
            //     console.warn("\n\n----------------------audioMsgs----------", audioMsgs);

            //     if (typeof window.speakTextWithAzure === 'function') {
            //         console.log("Adding message to queue:", _txtToSpeak);
            //         console.log("Pushing _txtToSpeak to audiomsgs");
            //         audioMsgs.push(_txtToSpeak);
            //         console.warn("\n\n\n\n -------audioMsgs-------", audioMsgs);
            //         console.warn("\n\n\n\n -------audioPlaying-------", audioPlaying);

            //         // if (!audioPlaying) {
            //         //     console.warn("\n\n\n\n ---iffff----audioPlaying-------", audioPlaying);
            //         //     playMessageSequence();
            //         // }
            //         console.log("Hitting speakTextWithAzure in prototype");
            //         window.speakTextWithAzure(_txtToSpeak);
            //         console.log("after speakTextWithAzure audioMsgs in prototype", audioMsgs);
            //     } else {
            //         console.warn("Azure TTS is not properly initialized");
            //     }
            // };
	    // pallavi azure 18_02_2025
	    // Initialize tracking variables
            if (!window.lastSpokenMessage) {
                window.lastSpokenMessage = ''; // Initialize if not already done
            }

            if (!window.lastNonFormMessage) {
                window.lastNonFormMessage = ''; // Initialize
            }

            if (!window.lastUserMessage) {
                window.lastUserMessage = ''; // Initialize
            }

            chatWindow.prototype.speakWithAzure = function (_txtToSpeak, formId = null) {
                console.log("In chatWindow.prototype.speakWithAzure");

                if (!_txtToSpeak) {
                    console.log("No text to speak.");
                    return;
                }

                console.warn("\n\n----------------------_txtToSpeak----------", _txtToSpeak);

                // Define the form message
                const formMessage = "Please click on the button and fill the form manually";

                // Track if user has typed a message before form appears again
                let goahead = false;

                // If the message is the form prompt message
                if (_txtToSpeak.includes(formMessage)) {
                    console.log("Form message detected");

                    // Retrieve previous messages
                    const lastMessage = window.lastSpokenMessage;
                    const lastNonFormMessage = window.lastNonFormMessage;
                    const lastUserMessage = window.lastUserMessage;

                    // ✅ If user typed something, form message must be spoken
                    if (window.firsttext && window.firsttext.trim() !== '' && window.firsttext !== formMessage) {
                        console.log("User typed a message before form. Setting goahead = true.");
                        goahead = true;
                        window.lastUserMessage = window.firsttext; // Store user message
                        window.firsttext = ''; // Reset after processing
                    }

                    // ❌ Condition: Skip if form message is repeated without user/bot messages in between
                    if (_txtToSpeak === lastMessage && lastNonFormMessage === '' && !goahead) {
                        console.log("Skipping repeated form message (immediate repetition).");
                        return;
                    }

                    // Reset tracking for non-form bot messages
                    window.lastNonFormMessage = '';

                    // Update last spoken message
                    window.lastSpokenMessage = _txtToSpeak;
                    console.log("Speaking form message:", _txtToSpeak);
                } else {
                    // If it's NOT a form message, update lastNonFormMessage
                    window.lastNonFormMessage = _txtToSpeak;
                }

                // Proceed to speak the text (if not skipped)
                if (typeof window.speakTextWithAzure === 'function') {
                    console.log("Adding message to queue:", _txtToSpeak);
                    audioMsgs.push(_txtToSpeak);
                    console.warn("\n\n\n\n -------audioMsgs-------", audioMsgs);

                    console.log("Hitting speakTextWithAzure in prototype");
                    window.speakTextWithAzure(_txtToSpeak);
                } else {
                    console.warn("Azure TTS is not properly initialized");
                }
            };
	    // pallavi azure 18_02_2025

            // Stop speaking function
            chatWindow.prototype.stopSpeaking = function() {
                if (this.config.isTTSEnabled) {
                    if (this.config.ttsInterface === "webapi" && 'speechSynthesis' in window) {
                        audioMsgs = [];
                        audioPlaying = false;
                        window.speechSynthesis.cancel();
                    } else if (this.config.ttsInterface === "azure") {
                        console.log("In prototype stopSpeaking ");
                        console.warn('\n\n\n ---------------typeof window.stopSpeakingAzureTTS-------', typeof window.stopSpeakingAzureTTS)

                        if (typeof window.stopSpeakingAzureTTS === 'function') {
                            audioMsgs = [];
                            audioPlaying = false;
                            console.log("Hitting stopSpeakingAzureTTS");
                            window.stopSpeakingAzureTTS();
                        }
                    }
                }
            };
            // pallavi azure 13_02_2025

            function createSocketForTTS() {

                if(!ttsServerUrl){
                    console.warn("Please provide tts socket url");
                    return false;
                }
                window.TTS_SOCKET_URL = ttsServerUrl;
                var serv_url = window.TTS_SOCKET_URL;
                var userEmail = userIdentity;
                window.WebSocket = window.WebSocket || window.MozWebSocket;
                var _ttsConnection = new WebSocket(serv_url);
                _ttsConnection.binaryType = 'arraybuffer';
                // User is connected to server
                _ttsConnection.onopen = function (e) {
                    socketSendTTSMessage(_txtToSpeak);
                };
                // On receving message from server
                _ttsConnection.onmessage = function (msg) {
                    _txtToSpeak = "";
                    if (typeof msg.data === 'string') {
                        // do nothing
                    } else {
                        var _data = msg.data
                        if (chatInitialize.isTTSOn) {
                            playsound(_data);
                        }
                    }
                };
                // If server is closed
                _ttsConnection.onclose = function (e) {
                    //tts socket closed
                };
                // If there is an error while sending or receving data
                _ttsConnection.onerror = function (e) {
                    console.log("Error : ", e);
                };
                return _ttsConnection;
            }

            function cancelTTSConnection() {
                if (_ttsConnection) {
                    _ttsConnection.close();
                    _ttsConnection = null;
                }
            }
            function socketSendTTSMessage(item) {
                if (_ttsConnection) {
                    var state = _ttsConnection.readyState;
                    if (state === 1) {
                        var auth = (bearerToken) ? bearerToken : assertionToken;
                        var _message = {
                            message: item,
                            'user': _botInfo.name,
                            'authorization': auth
                        };
                        _ttsConnection.send(JSON.stringify(_message));
                    } else {
                        console.error('Web Socket readyState != 1: ', state);
                        cancelTTSConnection();
                    }
                } else {
                    console.error('No web socket connection: failed to send');
                }
            }
            function initTTSAudioContext() {
                if (!_ttsContext) {
                    if (!window.AudioContext) {
                        if (!window.webkitAudioContext) {
                            console.error("Your browser does not support any AudioContext and cannot play back this audio.");
                            return;
                        }
                        window.AudioContext = window.webkitAudioContext;
                    }
                    _ttsContext = new AudioContext();
                }
            }
            initTTSAudioContext();
            function playsound(raw) {
                _ttsContext.decodeAudioData(raw, function (buffer) {
                    if (!buffer) {
                        console.error("failed to decode:", "buffer null");
                        return;
                    }
                    try {
                        if (ttsAudioSource) {
                            ttsAudioSource.stop();
                        }
                        ttsAudioSource = _ttsContext.createBufferSource();
                        ttsAudioSource.buffer = buffer;
                        ttsAudioSource.connect(_ttsContext.destination);
                        ttsAudioSource.start(0);
                        ttsAudioSource.addEventListener('ended', function () {
                            setTimeout(function () {
                                if (chatInitialize.isTTSOn && chatInitialize.config.autoEnableSpeechAndTTS) {
                                    $('.notRecordingMicrophone').trigger('click');
                                }
                            }, 350);
                        });
                    } catch (e) {
                    }
                }, function (error) {
                    console.error("failed to decode:", error);
                });
            }
            /******************************** TTS code end here **********************************************/
            /*******************************    Function for Attachment ***********************************************/

            chatWindow.prototype.makeDroppable=function (element, callback) {
                var input = document.createElement('input');
                input.setAttribute('type', 'file');
                input.setAttribute('multiple', false);
                input.style.display = 'none';

                input.addEventListener('change', triggerCallback);
                element.appendChild(input);

                element.addEventListener('dragover', function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                    element.classList.add('dragover');
                });

                element.addEventListener('dragleave', function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                    element.classList.remove('dragover');
                });

                element.addEventListener('drop', function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                    element.classList.remove('dragover');
                    triggerCallback(e);
                });

                /*element.addEventListener('click', function() {
                  input.value = null;
                  input.click();
                });*/

                function triggerCallback(e) {
                    var files;
                    if (e.dataTransfer) {
                        files = e.dataTransfer.files;
                    } else if (e.target) {
                        files = e.target.files;
                    }
                    callback.call(null, files);
                }
            }
            function cnvertFiles(_this, _file, customFileName) {
                var _scope = _this, recState = {};
                if (_file && _file.size) {
                    if (_file.size > filetypes.file.limit.size) {
                        alert(filetypes.file.limit.msg);
                        return;
                    }
                }
                if (_file && customFileName) {
                    _file.name = customFileName;
                }
                if (_file && (_file.name || customFileName)) {
                    var _fileName = customFileName || _file.name;
                    var fileType = _fileName.split('.').pop().toLowerCase();
                    recState.name = _fileName;
                    recState.mediaName = getUID();
                    recState.fileType = _fileName.split('.').pop().toLowerCase();
                    var uploadFn;
                    if ((filetypes.image.indexOf(recState.fileType) > -1)) {
                        recState.type = 'image';
                        recState.uploadFn = 'acceptFileRecording';
                    } else if ((filetypes.video.indexOf(recState.fileType) > -1)) {
                        recState.type = 'video';
                        recState.uploadFn = 'acceptVideoRecording';
                    } else if ((filetypes.audio.indexOf(recState.fileType) > -1)) {
                        recState.type = 'audio';
                        recState.uploadFn = 'acceptFile';
                    } else {
                        recState.type = 'attachment';
                        recState.componentSize = _file.size;
                        recState.uploadFn = 'acceptFile';
                    }
                    if (allowedFileTypes && allowedFileTypes.indexOf(fileType) !== -1) {
                        if (recState.type === 'audio' || recState.type === 'video') {
                            //read duration;
                            var rd = new FileReader();
                            rd.onload = function (e) {
                                var blob = new Blob([e.target.result], { type: _file.type }), // create a blob of buffer
                                    url = (URL || webkitURL).createObjectURL(blob), // create o-URL of blob
                                    video = document.createElement(recState.type);              // create video element
                                video.preload = "metadata";                               // preload setting
                                if (video.readyState === 0) {
                                    video.addEventListener("loadedmetadata", function (evt) {     // whenshow duration
                                        var _dur = Math.round(evt.target.duration);
                                        if (recState.type === "audio") {
                                            (URL || webkitURL).revokeObjectURL(url); //fallback for webkit
                                            getFileToken(_this, _file, recState);
                                        }
                                    });
                                    if (recState.type === "video") {
                                        video.addEventListener('loadeddata', function (e) {
                                            recState.resulttype = getDataURL(video);
                                            (URL || webkitURL).revokeObjectURL(url); //fallback for webkit
                                            getFileToken(_this, _file, recState);
                                        });
                                    }
                                    video.src = url;                                          // start video load
                                } else {
                                    (URL || webkitURL).revokeObjectURL(url); //fallback for webkit
                                    getFileToken(_this, _file, recState);
                                }
                            };
                            rd.readAsArrayBuffer(_file);
                        } else {
                            if (_file.type.indexOf('image') !== (-1)) {
                                var imgRd = new FileReader();
                                imgRd.onload = function (e) {
                                    var blob = new Blob([e.target.result], { type: _file.type }), // create a blob of buffer
                                        url = (URL || webkitURL).createObjectURL(blob); // create o-URL of blob
                                    var img = new Image();
                                    img.src = url;
                                    img.onload = function () {
                                        recState.resulttype = getDataURL(img);
                                        getFileToken(_this, _file, recState);
                                    };
                                };
                                imgRd.readAsArrayBuffer(_file);
                            }
                            else {
                                getFileToken(_this, _file, recState);
                            }
                        }
                    } else {
                        alert("SDK not supported this type of file");
                    }
                }
            };
            function getUID(pattern) {
                var _pattern = pattern || 'xxxxyx';
                _pattern = _pattern.replace(/[xy]/g, function (c) {
                    var r = Math.random() * 16 | 0,
                        v = c === 'x' ? r : (r & 0x3 | 0x8);
                    return v.toString(16);
                });
                return _pattern;
            };
            function getDataURL(src) {
                var thecanvas = document.createElement("canvas");
                thecanvas.height = 180;
                thecanvas.width = 320;

                var context = thecanvas.getContext('2d');
                context.drawImage(src, 0, 0, thecanvas.width, thecanvas.height);
                var dataURL = thecanvas.toDataURL();
                return dataURL;
            };
            function acceptAndUploadFile(_this, file, recState) {
                var _scope = _this, ele;
                var uc = getfileuploadConf(recState);
                uc.chunkUpload = file.size > appConsts.CHUNK_SIZE;
                uc.chunkSize = appConsts.CHUNK_SIZE;
                uc.file = file;
                if (uc.chunkUpload) {
                    notifyFlie(_scope, recState);
                    ele = $('.chatInputBox');
                    initiateRcorder(recState, ele);
                    ele.uploader(uc);
                } else {
                    var reader = new FileReader();
                    reader.onloadend = function (evt) {
                        if (evt.target.readyState === FileReader.DONE) { // DONE == 2
                            var converted = reader.result.replace(/^.*;base64,/, '');
                            var relt = reader.result;
                            var resultGet = converted;
                            recState.resulttype = resultGet;
                            acceptFileRecording(_scope, recState, ele);
                        }
                    };
                    reader.readAsDataURL(file);
                }
            };
            function getFileToken(_obj, _file, recState) {
                var me=chatInitialize;
                var auth = (bearerToken) ? bearerToken : assertionToken;
                var url=koreAPIUrl + "1.1/attachment/file/token";
                if(me.config && me.config && me.config.botOptions && me.config.botOptions.webhookConfig && me.config.botOptions.webhookConfig.enable){
                    url=koreAPIUrl + "attachments/"+me.config.botOptions.webhookConfig.streamId+"/"+me.config.botOptions.webhookConfig.channelType+"/token";
                    auth='bearer '+me.config.botOptions.webhookConfig.token;
                }
                $.ajax({
                    type: "POST",
                    url: url,
                    dataType: "json",
                    headers: {
                        Authorization: auth
                    },
                    success: function (response) {
                        fileToken = response.fileToken;
                        acceptAndUploadFile(_obj, _file, recState);
                    },
                    error: function (msg) {
                        chatInitialize.config.botOptions._reconnecting=true;
                        _self.showError("Failed to upload file.Please try again");
                        if(msg.responseJSON && msg.responseJSON.errors && msg.responseJSON.errors.length && msg.responseJSON.errors[0].httpStatus==="401"){
                            setTimeout(function(){
                                _self.hideError();
                            },5000);
                            $(".kore-chat-window .reload-btn").trigger("click");
                        }
                        console.log("Oops, something went horribly wrong");
                    }
                });
            }
            function getfileuploadConf(_recState) {
                var me=chatInitialize;
                appConsts.UPLOAD = {
                    "FILE_ENDPOINT": koreAPIUrl + "1.1/attachment/file",
                    "FILE_TOKEN_ENDPOINT": koreAPIUrl + "1.1/attachment/file/token",
                    "FILE_CHUNK_ENDPOINT": koreAPIUrl + "1.1/attachment/file/:fileID/chunk"
                };
                _accessToke = "bearer " + chatInitialize.accessToken;
                if(me.config && me.config && me.config.botOptions && me.config.botOptions.webhookConfig && me.config.botOptions.webhookConfig.enable){
                    //appConsts.UPLOAD.FILE_ENDPOINT=koreAPIUrl + "attachments/file/"+me.config.botOptions.webhookConfig.streamId+"/"+me.config.botOptions.webhookConfig.channelType;
                    _accessToke='bearer '+me.config.botOptions.webhookConfig.token;
                    appConsts.UPLOAD = {
                        "FILE_ENDPOINT": koreAPIUrl + "attachments/file/"+me.config.botOptions.webhookConfig.streamId+"/"+me.config.botOptions.webhookConfig.channelType,
                        "FILE_TOKEN_ENDPOINT": koreAPIUrl + "attachments/"+me.config.botOptions.webhookConfig.streamId+"/"+me.config.botOptions.webhookConfig.channelType+"/token",
                        "FILE_CHUNK_ENDPOINT": koreAPIUrl + "attachments/"+me.config.botOptions.webhookConfig.streamId+"/"+me.config.botOptions.webhookConfig.channelType+"/token/:fileID/chunk"
                    };
                }
                _uploadConfg = {};
                _uploadConfg.url = appConsts.UPLOAD.FILE_ENDPOINT.replace(':fileID', fileToken);
                _uploadConfg.tokenUrl = appConsts.UPLOAD.FILE_TOKEN_ENDPOINT;
                _uploadConfg.chunkUrl = appConsts.UPLOAD.FILE_CHUNK_ENDPOINT.replace(':fileID', fileToken);
                _uploadConfg.fieldName = 'file';
                _uploadConfg.data = {
                    'fileExtension': _recState.fileType,
                    'fileContext': 'workflows',
                    thumbnailUpload: false,
                    filename: _recState.name
                };
                _uploadConfg.headers = {
                    Authorization: _accessToke
                };
                return _uploadConfg;
            };
            function notifyFlie(_this, _recState, _tofileId) {
                var _this = _this;
                var _data = {};
                _data.meta = {
                    thumbNail: _recState.resulttype ? _recState.resulttype : undefined
                };
                _data.values = {
                    componentId: _recState.mediaName,
                    componentType: _recState.type,
                    componentFileId: _tofileId,
                    componentData: {
                        filename: _recState.name
                    }

                };
                if (_recState.componentSize) {
                    _data.values.componentSize = _recState.componentSize;
                }
                onComponentReady(_this, _data);
            };
            function initiateRcorder(_recState, ele) {
                var _scope = this;
                ele = ele || _scope.ele;
                ele.on('success.ke.uploader', function (e) {
                    onFileToUploaded(_scope, e, _recState);
                });
                ele.on('error.ke.uploader', onUploadError);
            };
            function onFileToUploaded(_this, evt, _recState) {
                var _this = _this;
                var _data = evt.params;
                if (!_data || !_data.fileId) {
                    onError();
                    return;
                }
                if (_recState.mediaName) {
                    var _tofileId = _data.fileId;
                    notifyfileCmpntRdy(_this, _recState, _tofileId);
                }
            };
            function onUploadError(_this, evt, _recState) {
                var _scope = _this;
                _recfileLisnr.onError({
                    code: 'UPLOAD_FAILED'
                });
                _scope.removeCmpt(_recState);
            };
            function onError() {
                alert("Failed to upload content. Try again");
                attachmentInfo = {};
                $('.attachment').html('');
                $('.sendButton').addClass('disabled');
                fileUploaderCounter = 0;
            };
            function onComponentReady(_this, data) {
                var _this = _this,
                    _src,
                    _imgCntr, _img, base64Matcher, http,
                    _cmptVal, _cmpt;
                if (!_cmpt) {
                    _cmpt = $('<div/>').attr({
                        'class': 'msgCmpt ' + data.values.componentType + ' ' + data.values.componentId
                    });
                    _cmpt.data('value', data.values);

                    if (!data.values.componentFileId && data.values.componentType !== 'contact' && data.values.componentType !== 'location' && data.values.componentType !== 'filelink' && data.values.componentType !== 'alert' && data.values.componentType !== 'email') {
                        _cmpt.append('<div class="upldIndc"></div>');
                    }
                    if (data.values.componentType === 'attachment') {
                        var fileType, _fn;
                        if (data.values.componentDescription) {
                            fileType = data.values.componentDescription.split('.').pop().toLowerCase();
                        } else {
                            fileType = data.values.componentData.filename.split('.').pop().toLowerCase();
                        }
                        if (fileType === 'xls' || fileType === 'xlsx') {
                            _cmpt.append('<div class="uploadedFileIcon"><span class="icon cf-icon icon-files_excel"></span></div>');
                            _cmpt.append('<div class="uploadedFileName">' + data.values.componentData.filename + '</div>');
                        } else if (fileType === 'docx' || fileType === 'doc') {
                            _cmpt.append('<div class="uploadedFileIcon"><span class="icon cf-icon icon-files_word"></span></div>');
                            _cmpt.append('<div class="uploadedFileName">' + data.values.componentData.filename + '</div>');
                        }
                        else if (fileType === 'pdf') {
                            _cmpt.append('<div class="uploadedFileIcon"><span class="icon cf-icon icon-files_pdf"></span></div>');
                            _cmpt.append('<div class="uploadedFileName">' + data.values.componentData.filename + '</div>');
                        } else if (fileType === 'ppsx' || fileType === 'pptx' || fileType === 'ppt') {
                            _cmpt.append('<div class="uploadedFileIcon"><span class="icon cf-icon icon-files_ppt"></span></div>');
                            _cmpt.append('<div class="uploadedFileName">' + data.values.componentData.filename + '</div>');
                        } else if (fileType === 'zip' || fileType === 'rar') {
                            _cmpt.append('<div class="uploadedFileIcon"><span class="icon cf-icon icon-files_zip"></span></div>');
                            _cmpt.append('<div class="uploadedFileName">' + data.values.componentData.filename + '</div>');
                        } else {
                            _cmpt.append('<div class="uploadedFileIcon"><span class="icon cf-icon icon-files_other_doc"></span></div>');
                            _cmpt.append('<div class="uploadedFileName">' + data.values.componentData.filename + '</div>');
                        }
                    }
                    if (data.values.componentType === 'image') {
                        _cmpt.append('<div class="uploadedFileIcon"><span class="icon cf-icon icon-photos_active"></span></div>');
                        _cmpt.append('<div class="uploadedFileName">' + data.values.componentData.filename + '</div>');
                    }
                    if (data.values.componentType === 'audio') {
                        _cmpt.append('<div class="uploadedFileIcon"><span class="icon cf-icon icon-files_audio"></span></div>');
                        _cmpt.append('<div class="uploadedFileName">' + data.values.componentData.filename + '</div>');
                    }
                    if (data.values.componentType === 'video') {
                        _cmpt.append('<div class="uploadedFileIcon"><span class="icon cf-icon icon-video_active"></span></div>');
                        _cmpt.append('<div class="uploadedFileName">' + data.values.componentData.filename + '</div>');
                    }
                }
                _cmpt.append('<button class="removeAttachment" aria-label="Remove attachment" title="Remove attachment">X</button>');
                $('.footerContainer').find('.attachment').html(_cmpt);
                $('.chatInputBox').focus();
                chatInitialize.attachmentInfo.fileName = data.values.componentData.filename;
                chatInitialize.attachmentInfo.fileType = data.values.componentType;
                $('.sendButton').removeClass('disabled');
            };
            function acceptFileRecording(_this, _recState, ele) {
                var _scope = _this;
                var _uc = getfileuploadConf(_recState),
                    _imageCntn = _recState.resulttype;
                notifyfileCmpntRdy(_scope, _recState);
                _uc.data[_uc.fieldName] = {
                    fileName: _recState.name,
                    data: _imageCntn,
                    type: 'image/png'
                };
                _uc.data.thumbnail = {
                    fileName: _recState.name + '_thumb',
                    data: _imageCntn,
                    type: 'image/png'
                };
                ele = $('.chatInputBox');
                initiateRcorder(_recState, ele);
                ele.uploader(_uc);
            };
            function notifyfileCmpntRdy(_this, _recState, _tofileId) {
                var _this = _this;
                var _data = {};
                _data.meta = {
                    thumbNail: _recState.resulttype
                };
                _data.values = {
                    componentId: _recState.mediaName,
                    componentType: _recState.type,
                    componentFileId: _tofileId,
                    componentData: {
                        filename: _recState.name
                    }
                };
                onComponentReady(_this, _data);
            };
            /***************************************************** ke.uploader file code **********************************************/
            function MultipartData() {
                this.boundary = "--------MultipartData" + Math.random();
                this._fields = [];
            }
            MultipartData.prototype.append = function (key, value) {
                this._fields.push([key, value]);
            };
            MultipartData.prototype.toString = function () {
                var boundary = this.boundary;
                var body = "";
                this._fields.forEach(function (field) {
                    body += "--" + boundary + "\r\n";
                    // file upload
                    if (field[1].data) {
                        var file = field[1];
                        if (file.fileName) {
                            body += "Content-Disposition: form-data; name=\"" + field[0] + "\"; filename=\"" + file.fileName + "\"";
                        } else {
                            body += "Content-Disposition: form-data; name=\"" + field[0] + "\"";
                        }
                        body += "\r\n";
                        if (file.type) {
                            body += "Content-Type: UTF-8; charset=ISO-8859-1\r\n";
                        }
                        body += "Content-Transfer-Encoding: base64\r\n";
                        body += "\r\n" + file.data + "\r\n"; //base64 data
                    } else {
                        body += "Content-Disposition: form-data; name=\"" + field[0] + "\";\r\n\r\n";
                        body += field[1] + "\r\n";
                    }
                });
                body += "--" + boundary + "--";
                return body;
            };
            function Uploader(element, options) {
                this.options = options;
                this.$element = element;
                if (!this.options.chunkUpload) {
                    startUpload(this);
                } else {
                    startChunksUpload(this);
                }
            }
            var _cls = Uploader.prototype;
            _cls.events = {
                error: $.Event('error.ke.uploader'),
                progressChange: $.Event('progress.ke.uploader'),
                success: $.Event('success.ke.uploader')
            };
            function getConnection(_this) {
                return new kfrm.net.HttpRequest();
            };

            function loadListener(_this, evt) {
                if ($('.upldIndc').is(':visible')) {
                    _this.events.success.params = $.parseJSON(evt.target.response);
                    attachmentInfo.fileId = _this.events.success.params.fileId;
                    $('.sendButton').removeClass('disabled');
                    $('.kore-chat-window').addClass('kore-chat-attachment');
                    $('.chat-container').scrollTop($('.chat-container').prop('scrollHeight'));
                    fileUploaderCounter = 1;
                    $('.upldIndc').remove();
                    _this.$element.trigger(_this.events.success);
                }
            };

            function errorListener(_this, evt) {
                _this.events.error.params = evt;
                _this.$element.trigger(_this.events.error);
            };

            function progressListener(_this, evt) {
            };

            function setOptions(_this, opts) {
                _this.options = opts;
                return _this;
            };

            function commitFile(_this) {
                var _scope = _this,
                    _conc = getConnection(_this),
                    _mdat = new MultipartData();
                _conc.addEventListener('load', function (evt) {
                    if (evt.target.status === 200) {
                        if (_scope.$element.parent().length) {
                            loadListener(_scope, evt);
                        }
                    } else {
                        errorListener(_scope, evt);
                    }
                }, false);
                _conc.addEventListener('error', function (evt) {
                    errorListener(_scope, evt);
                }, false);
                _conc.withCredentials = false;
                _conc.open('PUT', _this.options.chunkUrl.replace(/\/chunk/, ''));

                if (_this.options.headers) {
                    for (var header in _this.options.headers) {
                        _conc.setRequestHeader(header, _this.options.headers[header]);
                    }
                }
                _mdat.append('totalChunks', _scope.totalChunks);
                _mdat.append('messageToken', _scope.messageToken);
                if (_this.options.data) {
                    for (var key in _this.options.data) {
                        _mdat.append(key, _this.options.data[key]);
                    }
                }
                _conc.setRequestHeader('Content-Type', "multipart/form-data; boundary=" + _mdat.boundary);
                _conc.send(_mdat.toString());
            };

            function uploadChunk(_this) {
                var _scope = _this,
                    _conc = getConnection(_this),
                    _mdat = new MultipartData();
                _conc.addEventListener('load', function (evt) {
                    if (evt.target.status === 200) {
                        _scope.currChunk++;
                        if (!_scope.$element.parent().length) {
                            return;
                        } else if (_scope.currChunk === _scope.totalChunks) {
                            commitFile(_scope);
                        } else {
                            initUploadChunk(_scope);
                        }
                    } else {
                        errorListener(_scope, evt);
                    }
                }, false);
                _conc.addEventListener('error', function (evt) {
                    errorListener(_scope, evt);
                }, false);
                _conc.withCredentials = false;
                _conc.open('POST', _this.options.chunkUrl);

                if (_this.options.headers) {
                    for (var header in _this.options.headers) {
                        _conc.setRequestHeader(header, _this.options.headers[header]);
                    }
                }
                _mdat.append('chunkNo', _scope.currChunk);
                _mdat.append('messageToken', _scope.messageToken);
                _mdat.append('chunk', {
                    data: _scope.chunk,
                    fileName: _scope.options.file.name
                });
                _conc.setRequestHeader('Content-Type', "multipart/form-data; boundary=" + _mdat.boundary);
                _conc.send(_mdat.toString());
            };

            function initUploadChunk(_this) {
                var _scope = _this;
                var file = _scope.options.file;
                var start = _scope.options.chunkSize * (_scope.currChunk);
                var stop = (_scope.currChunk === _scope.totalChunks - 1) ? file.size : (_scope.currChunk + 1) * _scope.options.chunkSize;
                var reader = new FileReader();
                var blob = file.slice(start, stop);
                reader.onloadend = function (evt) {
                    if (evt.target.readyState === FileReader.DONE && _scope.$element.parent().length) { // DONE == 2
                        var dataObj =  evt.target.result;
                        dataObj = dataObj.replace(/^.*;base64,/, "");
                        dataObj = dataObj.replace('data:application/octet-stream;base64,', '');
                        _scope.chunk = dataObj;
                        if (_scope.currChunk < _scope.totalChunks && _scope.$element.parent().length) {
                            uploadChunk(_scope);
                        }
                    } else {
                        errorListener(_scope, evt);
                    }
                };
                reader.readAsDataURL(blob);
            };

            function startChunksUpload(_this) {
                var _scope = _this,
                    _conc = getConnection(_this);
                _conc.addEventListener('error', function (evt) {
                    errorListener(_scope, evt);
                }, false);
                _conc.addEventListener('load', function (evt) {
                    if (evt.target.status === 200) {
                        _scope.messageToken = JSON.parse(evt.target.response).fileToken;
                        _scope.totalChunks = Math.floor(_scope.options.file.size / _scope.options.chunkSize) + 1;
                        _scope.currChunk = 0;
                        _scope.options.chunkUrl = _scope.options.chunkUrl.replace(':token', _scope.messageToken);
                        if (_scope.$element.parent().length) {
                            initUploadChunk(_scope);
                        }
                    } else {
                        errorListener(_scope, evt);
                    }
                }, false);
                _conc.withCredentials = false;
                _conc.open('POST', _this.options.tokenUrl);
                if (_this.options.headers) {
                    for (var header in _this.options.headers) {
                        _conc.setRequestHeader(header, _this.options.headers[header]);
                    }
                }
                _conc.send();
            };
            function startUpload(_this) {
                var _scope = _this;
                _conc = getConnection(_this),
                    _mdat = new MultipartData();
                if (_conc.upload && _conc.upload.addEventListener) {
                    _conc.upload.addEventListener('progress', function (evt) {
                        progressListener(_scope, evt);
                    }, false);
                }
                _conc.addEventListener('load', function (evt) {
                    if (_scope.$element.parent().length) {
                        loadListener(_scope, evt);
                    }
                }, false);
                _conc.addEventListener('error', function (evt) {
                    errorListener(_scope, evt);
                }, false);
                _conc.withCredentials = false;
                _conc.open('POST', _this.options.url);

                if (_this.options.headers) {
                    for (var header in _this.options.headers) {
                        _conc.setRequestHeader(header, _this.options.headers[header]);
                    }
                }
                if (_this.options.data) {
                    for (var key in _this.options.data) {
                        _mdat.append(key, _this.options.data[key]);
                    }
                }
                _conc.setRequestHeader('Content-Type', "multipart/form-data; boundary=" + _mdat.boundary);
                _conc.send(_mdat.toString());
            };

            function zoomChart() {
                var modal = document.getElementById('myPreviewModal');
                $(".largePreviewContent").empty();
                $(".largePreviewContent").addClass("addheight");
                $(".largePreviewContent").html("<div class='chartContainerDiv'></div>");
                modal.style.display = "block";
                // Get the <span> element that closes the modal
                var span = document.getElementsByClassName("closeElePreview")[0];

                // When the user clicks on <span> (x), close the modal
                span.onclick = function () {
                    modal.style.display = "none";
                    $(".largePreviewContent").removeClass("addheight");
                }
            }

            // listen to chart click
            function handleChartOnClick() {
                $('.piechartDiv,.barchartDiv, .linechartDiv').click(function (e) {
                    var firstEleId = e.currentTarget.firstElementChild.getAttribute("id");
                    //get chart data
                    var chart = null;
                    var data = null;
                    var container = null;
                    for (var i = 0; i < available_charts.length; i++) {
                        if (available_charts[i].id == firstEleId) {
                            data = jQuery.extend({}, available_charts[i]);
                            zoomChart();
                            break;
                        }
                    }
                    if (graphLibGlob === "d3") {
                        zoomChart();
                        if (data.data.message[0].component.payload.pie_type === undefined) {
                            data.data.message[0].component.payload.pie_type = 'regular';
                        }
                        if (data.data.message[0].component.payload.template_type !== 'linechart' && data.data.message[0].component.payload.template_type !== 'piechart') {
                            var dimens = {};
                            dimens.outerWidth = 650;
                            dimens.outerHeight = 460;
                            dimens.innerWidth = 450;
                            dimens.innerHeight = 350;
                            dimens.legendRectSize = 15;
                            dimens.legendSpacing = 4;
                            $('.chartContainerDiv').html('');
                            if (data.data.message[0].component.payload.template_type === 'barchart' && data.data.message[0].component.payload.direction === 'vertical' && data.type === "barchart") {
                                dimens.innerWidth = 500;
                                KoreGraphAdapter.drawD3barChart(data.data, dimens, '.chartContainerDiv', 12);
                            } else if (data.data.message[0].component.payload.template_type === 'barchart' && data.data.message[0].component.payload.direction === 'horizontal' && data.type === "stackedBarchart") {
                                KoreGraphAdapter.drawD3barStackedChart(data.data, dimens, '.chartContainerDiv', 12);
                            } else if (data.data.message[0].component.payload.template_type === 'barchart' && data.data.message[0].component.payload.direction === 'vertical' && data.type === "stackedBarchart") {
                                dimens.innerWidth = 550;
                                KoreGraphAdapter.drawD3barVerticalStackedChart(data.data, dimens, '.chartContainerDiv', 12);
                            } else if (data.data.message[0].component.payload.template_type === 'barchart' && data.data.message[0].component.payload.direction === 'horizontal' && data.type === "barchart") {
                                dimens.outerWidth = 650;
                                dimens.outerHeight = 350;
                                dimens.innerWidth = 450;
                                dimens.innerHeight = 310;
                                KoreGraphAdapter.drawD3barHorizontalbarChart(data.data, dimens, '.chartContainerDiv', 12);
                            }
                        }
                        else if (data.data.message[0].component.payload.template_type === "linechart") {
                            var dimens = {};
                            dimens.outerWidth = 650;
                            dimens.outerHeight = 450;
                            dimens.innerWidth = 480;
                            dimens.innerHeight = 350;
                            dimens.legendRectSize = 15;
                            dimens.legendSpacing = 4;
                            $('.chartContainerDiv').html('');
                            //  KoreGraphAdapter.drawD3lineChart(data.data, dimens, '.chartContainerDiv', 12);
                            KoreGraphAdapter.drawD3lineChartV2(data.data, dimens, '.chartContainerDiv', 12);

                        }
                        else if (data.data.message[0].component.payload.pie_type) {
                            var dimens = {};
                            dimens.width = 600;
                            dimens.height = 400;
                            dimens.legendRectSize = 15;
                            dimens.legendSpacing = 4;
                            $('chartContainerDiv').html('');
                            if (data.data.message[0].component.payload.pie_type === "regular") {
                                KoreGraphAdapter.drawD3Pie(data.data, dimens, '.chartContainerDiv', 16);
                            }
                            else if (data.data.message[0].component.payload.pie_type === "donut") {
                                KoreGraphAdapter.drawD3PieDonut(data.data, dimens, '.chartContainerDiv', 16, 'donut');
                            }
                            else if (data.data.message[0].component.payload.pie_type === "donut_legend") {
                                $('chartContainerDiv').html('');
                                KoreGraphAdapter.drawD3PieDonut(data.data, dimens, '.chartContainerDiv', 16, 'donut_legend');
                            }
                        }
                    }
                    else if (graphLibGlob === "google") {
                        if (data.type === "piechart") {
                            google.charts.load('current', { 'packages': ['corechart'] });
                            google.charts.setOnLoadCallback(drawChart);
                            function drawChart() {
                                container = document.getElementsByClassName('chartContainerDiv');
                                chart = new google.visualization.PieChart(container[0]);
                            }
                        }
                        else if (data.type === "linechart") {
                            google.charts.load('current', { packages: ['corechart', 'line'] });
                            google.charts.setOnLoadCallback(drawChart);
                            function drawChart() {
                                container = document.getElementsByClassName('chartContainerDiv');
                                chart = new google.visualization.LineChart(container[0]);
                            }
                        }
                        else if (data.type === "barchart") {
                            google.charts.load('current', { packages: ['corechart', 'bar'] });
                            google.charts.setOnLoadCallback(drawChart);
                            function drawChart() {
                                container = document.getElementsByClassName('chartContainerDiv');
                                if (data.direction === 'vertical') {
                                    chart = new google.visualization.ColumnChart(container[0]);
                                }
                                else {
                                    chart = new google.visualization.BarChart(container[0]);
                                }
                            }
                        }
                        setTimeout(function () {
                            var chartAreaObj = { "height": "85%", "width": "85%" };
                            data.options.chartArea = chartAreaObj;
                            google.visualization.events.addListener(chart, 'ready', function () {
                                setTimeout(function () {
                                    $(".largePreviewContent .chartContainerDiv").css("height", "91%");
                                });
                            });
                            chart.draw(data.data, data.options);
                        }, 200);
                    }
                });
            }
            var old = $.fn.uploader;

            $.fn.uploader = function (option) {
                var _args = Array.prototype.slice.call(arguments, 1);
                return this.each(function () {
                    var $this = $(this),
                        data = '';//$this.data('ke.uploader'),
                    options = typeof option === 'object' && option;

                    if (!data) {
                        $this.data('ke.uploader', (data = new Uploader($this, options)));
                    } else if (option) {
                        if (typeof option === 'string' && data[option]) {
                            data[option].apply(data, _args);
                        } else if (options) {
                            startUpload(setOptions(data, options));
                        }
                    }
                    return option && data[option] && data[option].apply(data, _args);
                });
            };

            $.fn.uploader.Constructor = Uploader;

            $.fn.uploader.noConflict = function () {
                $.fn.uploader = old;
                return this;
            };
            /************************************************************************************************************************************************
            ********************************************** kore.ai framework file ******************************************************************************
            ************************************************************************************************************************************************/
            +function () {
                function getHTTPConnecton() {
                    var xhr = false;
                    xhr = new XMLHttpRequest();
                    if (xhr) {
                        return xhr;
                    } else if (typeof XDomainRequest !== "undefined") {
                        return new XDomainRequest();
                    }
                    return xhr;
                }

                function HttpRequest() {
                    var xhr = getHTTPConnecton();
                    if (!xhr) {
                        throw "Unsupported HTTP Connection";
                    }
                    try {
                        xhr.withCredentials = true;
                    } catch (e) {
                    }
                    xhr.onreadystatechange = function () {
                        return xhr.onReadyStateChange && xhr.onReadyStateChange.call(xhr);
                    };
                    return xhr;
                }
                kfrm.net.HttpRequest = HttpRequest;
            }();

            return {
                initToken: initToken,
                addListener: addListener,
                removeListener: removeListener,
                show: show,
                destroy: destroy,
                showError: showError,
                botDetails: botDetails,
                chatHistory: chatHistory,
                getSDKInstance:function(){
                    return bot;
                },
                instance:chatInitialize,
                sdkInstance:bot,
                chatWindow:chatWindow,
                addWidgetEvents:addWidgetEvents,
                setWidgetInstance:setWidgetInstance,
                closeConversationSession:closeConversationSession,
                applySDKBranding:applySDKBranding
            };

            //Actual chatwindow.js koreBotChat function code end here
        })(koreJquery,KRPerfectScrollbar);
        return returnFun;
    }
});
