(function (window) {
    console.log("Initializing Azure TTS...");
    var audioStatus = 'idle';
    var speechConfig;
    var synthesizer;
    var player;
    var isPlaying = false;
    var audioMessages = [];
    var audioContext;
    var audioStream;
    var bufferSource;
    window.audioPlaying = false;
    window.audioMsgs = []; // Ensuring global access
    // Track if the form message has been spoken
    window.formQueue = [];

    // Initialize Azure TTS
    function initAzureTTS() {
        console.log("In initAzureTTS");
        if (!window.KoreSDK?.chatConfig?.azureTTS?.key) {
            console.error("Azure TTS: API key is required");
            return;
        }

        try {
            speechConfig = SpeechSDK.SpeechConfig.fromSubscription(
                window.KoreSDK.chatConfig.azureTTS.key,
                window.KoreSDK.chatConfig.azureTTS.region || 'centralindia'
            );

            // ✅ Set voice explicitly
            // speechConfig.speechSynthesisVoiceName = "en-US-DavisNeural"; //pallavi new
            // speechConfig.speechSynthesisVoiceName = "en-US-EmmaNeural"; //pallavi new
            speechConfig.speechSynthesisVoiceName = "en-IN-AartiNeural"; //pallavi new

            audioContext = new AudioContext();
            // player = new SpeechSDK.SpeakerAudioDestination();
            // var audioConfig = SpeechSDK.AudioConfig.fromSpeakerOutput(player);

            audioStream = SpeechSDK.PullAudioOutputStream.create();
            var audioConfig  = SpeechSDK.AudioConfig.fromStreamOutput(audioStream);

            synthesizer = new SpeechSDK.SpeechSynthesizer(speechConfig, audioConfig);

            console.log("Azure TTS initialized successfully.");
        } catch (error) {
            console.error("Azure TTS initialization failed:", error);
        }
    }

    // pallavi new
    function listAllAvailableVoices() {
        console.log("🔎 Fetching available voices...");
        if (!synthesizer) {
            console.error("❌ Synthesizer not initialized.");
            return;
        }
        
        synthesizer.getVoicesAsync().then((result) => {
            console.log("🟢 Voice fetch API called.");
            if (result && result.voices.length > 0) {
                console.log(`✅ Found ${result.voices.length} voices.`);
                
                // Store all voices in an array
                let voicesArray = result.voices.map(voice => ({
                    name: voice.name,
                    locale: voice.locale,
                    gender: voice.gender
                }));

                let voicesArray2 = result.voices
                    .filter(voice => ["en-IN", "en-GB", "en-US"].includes(voice.locale))
                    .map(voice => ({
                        name: voice.name,
                        locale: voice.locale,
                        gender: voice.gender
                    }));
                
                // Print all voices in one go
                console.log("Available Voices:", voicesArray);
                console.log("Available Voices en-IN, en-GB, and en-US:", voicesArray2);
                console.log("Current voice set in config new:", speechConfig.speechSynthesisVoiceName); // pallavi new
            } else {
                console.error("⚠️ No voices found.");
            }
        }).catch(error => {
            console.error("❌ Error fetching voices:", error);
        });
    }
    // pallavi new

    function speakMsgs() {
        //pallavi new
        console.log("Starting manual false");
        var manual = false;
        console.log("msgData", msgData);
        // listAllAvailableVoices();  //pallavi new for now commented
        let firsttextt = msgData.message[0].cInfo.body;
        console.log("firsttext", firsttextt);
        // Check if `template_type` exists and matches the ones where mic should be off
        let payload = msgData.message[0].component?.payload;
        console.log("payload", payload);
        let templateType = payload?.template_type ?? null;
        console.log("templateType", templateType);
        console.log("window.formvalue", window.formvalue); //pallavi form
    
        let disableMicTemplates = [
            "dropdown_template",
            "multi_select",
            "carousel",
            "countryDropdownTemplate",
            "insuranceTemplate",
            "dateTemplate",
            "healthAddonTemplate",
            "checkBoxesTemplate",
            "calendarDropdown"
        ];
        
        // micccc
        // if (firsttextt.includes("You're verified")) {
        //     manual = true;
        //     console.log("Starting manual true");
        // }
        // if (firsttextt.includes("Based on your selection, here’s the premium")) {
        //     manual = true;
        //     console.log("Starting manual true");
        // }
        // if (firsttextt.includes("Please wait for a moment")) {
        //     manual = true;
        //     console.log("Starting manual true");
        // }
        // if (firsttextt.includes("It seems like there are no agents that can help you at this time.")) {
        //     manual = true;
        //     console.log("Starting manual true");
        // }
        // if (firsttextt.includes("Please hold while I find the right customer service executive for you")) {
        //     manual = true;
        //     console.log("Starting manual true");
        // }
        // if (firsttextt.includes("Ready to elevate your experience? Choose your preferred plan")) {
        //     manual = true;
        //     console.log("Starting manual true");
        // }
        // if (firsttextt.includes("We're thrilled! Here’s the proposal summary")) {
        //     manual = true;
        //     console.log("Starting manual true");
        // }
        // if (firsttextt.includes("Ready to proceed")) {
        //     manual = true;
        //     console.log("Starting manual true");
        // }
        // if (firsttextt.includes("That's okay. Let's work together to find the best coverage for you")) {
        //     manual = true;
        //     console.log("Starting manual true");
        // }
        // if (firsttextt.includes("Please wait, we are currently awaiting your payment confirmation status")) {
        //     manual = true;
        //     console.log("Starting manual true");
        // }
        // if (firsttextt.includes("Oops! Your payment is still not through. Please Pay Now to proceed")) {
        //     manual = true;
        //     console.log("Starting manual true");
        // }
        // if (firsttextt.includes("You can also download it here")) {
        //     manual = true;
        //     console.log("Starting manual true");
        // }
        // if (firsttextt.includes("Please complete your payment process using the link below. Thank you")) {
        //     manual = true;
        //     console.log("Starting manual true");
        // }
        // if (firsttextt.includes("Please click the button below to download your policy soft copy")) {
        //     manual = true;
        // }
        // if (firsttextt.includes("Thank you for your valuable feedback! Please feel free to reach out if you need any further assistance")) {
        //     manual = true;
        //     console.log("Starting manual true");
        // }
        // if (firsttextt.includes("Thank you for waiting")) {
        //     manual = true;
        //     console.log("Starting manual true");
        // }
        // if (firsttextt.includes("Please reach out to us if you need any assistance again")) {
        //     manual = true;
        //     console.log("Starting manual true");
        // }
        // if (firsttextt.includes("You're welcome! Have a great day")) {
        //     manual = true;
        //     console.log("Starting manual true");
        // }
        // if (firsttextt.includes("thank you for reaching out to us. I hope I assisted you well. Have a great day")) {
        //     manual = true;
        //     console.log("Starting manual true");
        // }
        // if (firsttextt.includes("but we couldn't retrieve the information you're looking for at the moment")) {
        //     manual = true;
        //     console.log("Starting manual true");
        // }
        // if (firsttextt.includes("Please click on below button to proceed")) {
        //     manual = true;
        //     console.log("Starting manual true");
        // }
        // if (firsttextt.includes("We apologize for the delay and appreciate your patience")) {
        //     manual = true;
        //     console.log("Starting manual true");
        // }
        // if (firsttextt.includes("Dear Customer, transferring your chat to our customer service executive")) {
        //     manual = true;
        //     console.log("Starting manual true");
        // }
        // if (firsttextt.includes("It looks like you haven’t responded for a while, so I’ll be closing this chat")) {
        //     manual = true;
        //     console.log("Starting manual true");
        // }
        // if (firsttextt.includes("Please complete your payment process here")) {
        //     manual = true;
        //     console.log("Starting manual true");
        // }
        // if (firsttextt.includes("Please give me a moment while I fetch all your details")) {
        //     manual = true;
        //     console.log("Starting manual true");
        // }
        // if (firsttextt.includes("Please click on the *Self-Help* link below to continue")) {
        //     manual = true;
        //     console.log("Starting manual true");
        // }
        // if (firsttextt.includes("I’m sorry, all our live agents are currently offline. Our working hours are Monday to Friday from 9am to 5pm IST")) {
        //     manual = true;
        //     console.log("Starting manual true");
        // }
        // if (firsttextt.includes("Please click on the below button to get your TP details")) {
        //     manual = true;
        //     console.log("Starting manual true");
        // }
        // if (firsttextt.includes("Please find the link to the Branch Locator for the complete list of branches")) {
        //     manual = true;
        //     console.log("Starting manual true");
        // }
        // if (firsttextt.includes("Dear user as we are unable to fetch the Reliance connected hospital based on your pincode, please check reliance connected hospitals here")) {
        //     manual = true;
        //     console.log("Starting manual true");
        // }
        // if (firsttextt.includes("Please click on below button to check Garage List")) {
        //     manual = true;
        //     console.log("Starting manual true");
        // }
        // if (firsttextt.includes("Thank you! I can assist you with updating your vehicle model or variant details")) {
        //     manual = true;
        //     console.log("Starting manual true");
        // }
        // if (firsttextt.includes("It appears that the vehicle details you provided are invalid. Please double-check and enter the correct details")) {
        //     manual = true;
        //     console.log("Starting manual true");
        // }
        // if (firsttextt.includes("It seems the Pincode you entered is not valid. Could you please check and provide a valid Pincode")) {
        //     manual = true;
        //     console.log("Starting manual true");
        // }
        // if (firsttextt.includes("It seems the claim number you provided is incorrect. Could you please provide the correct claim number so we can assist you further")) {
        //     manual = true;
        //     console.log("Starting manual true");
        // }
        // if (firsttextt.includes("Thanks! Allow me sometime while I quickly get your Claim Details")) {
        //     manual = true;
        //     console.log("Starting manual true");
        // }
        // if (firsttextt.includes("Oops! I could not find any Claim with the details you just entered")) {
        //     manual = true;
        //     console.log("Starting manual true");
        // }

             let disableMicPhrases = [
                    "You're verified", "Based on your selection, here’s the premium", "Please wait for a moment",
                    "It seems like there are no agents that can help you at this time.",
                    "Please hold while I find the right customer service executive for you",
                    "Ready to elevate your experience? Choose your preferred plan",
                    "We're thrilled! Here’s the proposal summary", "Ready to proceed",
                    "That's okay. Let's work together to find the best coverage for you",
                    "Please wait, we are currently awaiting your payment confirmation status",
                    "Oops! Your payment is still not through. Please Pay Now to proceed",
                    "You can also download it here", "Please complete your payment process using the link below. Thank you",
                    "Please click the button below to download your policy soft copy",
                    "Thank you for your valuable feedback! Please feel free to reach out if you need any further assistance",
                    "Thank you for waiting", "Please reach out to us if you need any assistance again",
                    "You're welcome! Have a great day",
                    "thank you for reaching out to us. I hope I assisted you well. Have a great day",
                    "but we couldn't retrieve the information you're looking for at the moment",
                    "Please click on below button to proceed",
                    "We apologize for the delay and appreciate your patience",
                    "Dear Customer, transferring your chat to our customer service executive",
                    "It looks like you haven’t responded for a while, so I’ll be closing this chat",
                    "Please complete your payment process here",
                    "Please give me a moment while I fetch all your details",
                    "Please click on the *Self-Help* link below to continue",
                    "I’m sorry, all our live agents are currently offline. Our working hours are Monday to Friday from 9am to 5pm IST",
                    "Please click on the below button to get your TP details",
                    "Please find the link to the Branch Locator for the complete list of branches",
                    "Dear user as we are unable to fetch the Reliance connected hospital based on your pincode, please check reliance connected hospitals here",
                    "Please click on below button to check Garage List",
                    "Thank you! I can assist you with updating your vehicle model or variant details",
                    "It appears that the vehicle details you provided are invalid. Please double-check and enter the correct details",
                    "It seems the Pincode you entered is not valid. Could you please check and provide a valid Pincode",
                    "It seems the claim number you provided is incorrect. Could you please provide the correct claim number so we can assist you further",
                    "Thanks! Allow me sometime while I quickly get your Claim Details",
                    "Oops! I could not find any Claim with the details you just entered",
                    "Thank You for uploading the documents",
                    "Please merge/combine the required documents listed below into a single file and upload it all at once",
                    "Dear customer, Your claim status is",
                    "Please review the details of your claim and select your desired claim number from the options below to check the claim status",
                    "I'm sorry. But we couldn't find Claim status for Date of Admission, event or loss you provided",
                    "You have selected an invalid Claim Number",
                    "Thanks! Allow me sometime while I quickly get your Claim details",
                    "Date of admission must be within the past 6 months and cannot be a future date",
                    "It seems the policy number you entered is incorrect, and I'm unable to retrieve the associated policy data",
                    "Sure! I can help you to retrieve your Claim Status",
                    "A recovery letter is not applicable for this policy number",
                    "Dear user, We are pleased to provide you with your NCB Letter, Kindly download your NCB Letter. We are here to assist you with any questions or concerns you may have",
                    "Thank You for uploading the documents",
                    "Hello! I’m here to help you obtain your claim form. To get started, please share the necessary details, and I’ll guide you through the process",
                    "Please note, currently RGI doesn’t offer a renewal plan for the Travel product. I’ll connect you with a customer service executive who can assist you further",
                    "Thanks for getting in touch! We’ve scheduled your call for your request. One of our insurance experts will be speaking with you shortly",
                    "Verification successful! Retrieving your policy details",
                    "It appears your policy is due for renewal. Let’s begin with the Reliance General Insurance renewal process. Please note, we currently RGI doesn’t offer a renewal plan for the Travel product. I’ll connect you with a live agent who can assist you further",
                    "Dear user, we’re experiencing a technical issue.We are transferring your chat to our customer service executive for further assistance",
                    "Thank you for submitting all the necessary documents",
                    "We will update you the resolution of your service request, via sms and email, upon resolution of the same",
                    "I apologise for delay in resolving your request",
                    "Your pending documents are as follows",
                    "I couldn't find any active Service Request on the SR number",
                    "Your service request is under process as the document requested are not yet received at our end",
                    "the resolution remark is",
                    "Please try using your Policy number or SR number",
                    "You’re welcome! Have a great day",
                    "The policy number you provided is associated with SR number",
                    "I'm sorry, the policy number you entered doesn't seem to be valid",
                    "But don't worry, I'm here to help you with your SR status",
                    "But don’t worry, I’m here to help you with your 80 D Certificate",
                    "Dear user, We are pleased to provide you with your 80 D Certificate, Kindly download your 80 D Certificate",
                    "As a result, we’re unable to proceed with the requested service at this time",
                    "Please download the required claim forms for Motor from below",
                    "Please download the required claim forms for Health from below",
                    "Please download the required claim forms for Travel from below"
        ];
    
        // Disable mic if the message contains any of the disableMicPhrases or the template type requires it
        if (disableMicPhrases.some(phrase => firsttextt.includes(phrase)) || disableMicTemplates.includes(templateType) || window.formvalue) {
            manual = true;
            console.log("Mic will remain OFF due to template type or message content");
        }
        
        // miccccc
        // pallavi form
        // if (disableMicTemplates.includes(templateType) || window.formvalue) {
        //     manual = true;
        //     console.log("Mic will remain OFF due to template type:", templateType);
        // }
    
        //pallavi new

        console.log("In function speakMsgs");
        console.log("Doing isplaying true");
        isPlaying = true;
        console.log("In audiomsgs", audioMessages);
        synthesizer.speakTextAsync(
            audioMessages.shift(),
            result => {
                console.log("In function speechSynthesisVoice",speechConfig.speechSynthesisVoice);
                console.log("In function speakTextAsync audioMessages", audioMessages);
                if (result) {
                    console.log("In if result");
                    console.log("Speech synthesis succeeded for audiomessages:", audioMessages);
                    audioStatus = 'idle';
                    
                }
                audioContext.decodeAudioData(result.audioData, (buffer) => {
                    bufferSource = audioContext.createBufferSource();
                    console.log("bufferSource", bufferSource);

                    // pallavi 06_03_2025
                    // List of phrases where the mic should turn ON
                    let enableMicPhrases = [
                        "Please provide your PAN details for KYC verification.",
                        "Thanks! Now, please share your Date of Birth (DD-MM-YYYY) to complete the KYC.",
                        "Thanks! Now, please share your Date of Birth in day, month, year format to complete the KYC",
                        "May I have your name to assist you better",
                        "I'm sorry, I am unable to recognize your input. Please enter a valid input"
                    ];
                    
                    if (enableMicPhrases.some(phrase => firsttextt.includes(phrase))) {
                        manual = false;  // Reset manual to allow mic activation
                        console.log("Mic turned ON for:", firsttextt);
                    }                
                    // pallavi 06_03_2025

                    console.log("manual isPlaying", manual, isPlaying);
                    bufferSource.buffer = buffer;
                    bufferSource.connect(audioContext.destination);
                    bufferSource.start(0);
                    bufferSource.onended = () => {
                        //pallavi 06_03_2025
                        // console.log("firsttextt pallu",firsttextt);
                        // if (firsttextt.includes("May I have your name to assist you better")) {
                        //     console.log("manual isPlaying pallu", manual, isPlaying );
                        //     isPlaying = true;
                        //     manual = false;
                        //     console.log("manual isPlaying pallu after", manual, isPlaying );
                        // };
                        // if (firsttextt.includes("Please provide your PAN details for KYC verification")) {
                        //     console.log("manual isPlaying pallu", manual, isPlaying );
                        //     isPlaying = true;
                        //     manual = false;
                        //     console.log("manual isPlaying pallu after", manual, isPlaying );
                        // };
                        // console.log("manual isPlaying", manual, isPlaying);
                        //pallavi 06_03_2025
                        if (audioMessages.length > 0) {
                            console.log("Hitting speakmsg in audiomsgs.length");
                            console.log("manual isPlaying", manual, isPlaying);
                            manual = false; // Pallavi 06_03_2025
                            console.log("manual isPlaying", manual, isPlaying);
                            speakMsgs();
                        } else if(isPlaying && !manual) {
                            console.log("manual isPlaying", manual, isPlaying);
                            isPlaying = false;
                            console.log("TTS finished, activating STT..."); //pallavi-mic
                            window.recognizeSpeechWithAzure(); //pallavi-mic
                        }else{
                            isPlaying = false;
                            console.log("manual isPlaying in else", manual, isPlaying);
                        };
                        manual = false;
                        console.log("After over manual isPlaying", manual, isPlaying);
                    }
                })
            },
            error => {
                console.error("Speech synthesis failed:", error);
                audioStatus = 'idle';
            }
        );
    }

    // Speak text using Azure TTS
    window.speakTextWithAzure = function (textToSpeak, isForm = false) {
        console.log("In window.speakTextWithAzure textToSpeak", textToSpeak);
         // 🟢 If a new form appears, check if we should announce the message
         if (isForm) {
            window.formQueue.push("Please click on button and fill form manually");
            console.log(`🟢 New form added to queue. Current queue: ${window.formQueue.length}`);
        }
        audioMessages.push(textToSpeak);
        console.log("audioMessages after pushing", audioMessages);
        
        if (!isPlaying) {
            console.log("isPlaying in !isplaying", isPlaying);
            console.warn('\n\n\n ---------------speakTextWithAzure-------', textToSpeak)

            // player = new SpeechSDK.SpeakerAudioDestination();
            audioContext = new AudioContext();
            console.log("audioContext", audioContext);
            // player = new SpeechSDK.SpeakerAudioDestination();
            // var audioConfig = SpeechSDK.AudioConfig.fromSpeakerOutput(player);

            audioStream = SpeechSDK.PullAudioOutputStream.create();
            console.log("audioStream", audioStream);
            var audioConfig  = SpeechSDK.AudioConfig.fromStreamOutput(audioStream);
            console.log("audioConfig", audioConfig);
            // var audioConfig = SpeechSDK.AudioConfig.fromSpeakerOutput(player);
            synthesizer = new SpeechSDK.SpeechSynthesizer(speechConfig, audioConfig);
            console.log("synthesizer", synthesizer);

            if (!synthesizer) {
                console.error("Azure TTS not initialized");
                return;
            }

            if (audioStatus === 'speaking') {
                console.log("Already speaking, waiting for current speech to finish.");
                return;
            }

            audioStatus = 'speaking';
            isPlaying = true; // 🔹 Ensure isPlaying is set before calling speakMsgs() pallavi new
            speakMsgs();
        }

    };

        // Function to announce form messages from the queue
        window.announceNextForm = function () {
            if (window.formQueue.length > 0) {
                var formMessage = window.formQueue.shift(); // Pop from queue
                console.log(`🔊 Announcing form message: ${formMessage}`);
                window.speakTextWithAzure(formMessage);
            }
        };

    // Stop speaking function
    window.stopSpeakingAzureTTS = function () {
        console.log("In window.stopSpeakingAzureTTS");
        console.warn('\n\n\n ---------------stopSpeakingAzureTTS-------')
        if (isPlaying) {
            // player.pause();
            audioStatus = 'idle';
            console.log("Speech stopped.");
            audioMessages = [];
            isPlaying = false;
            bufferSource.stop();
        } else {
        //     console.warn("Player is not initialized. Cannot stop speech.");
        }
    };
    console.log("Hitting initAzureTTS");
    initAzureTTS();
})(window);
