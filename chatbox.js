/*!
 * Bins Chatbox
 * A chat library
 * Copyright BinsSoft
 * Released under the MIT license
 * Date: 2019-09-17
 */
class ChatBox {
    constructor(config) {

        this.emojiList = [
            {
                "name": "Smileys",
                "icon": "&#x1F642;",
                "slug": "S",
                "smilyList": [
                    {
                        "title": "Happy smiley face",
                        "slug": "(happy-smiley-face)",
                        "code": "&#x1F642;"
                    },
                    {
                        "title": "Grinning smiley face",
                        "slug": "(grinning-smiley-face)",
                        "code": "&#x1F600;"
                    },
                    {
                        "title": "Toothy grin",
                        "slug": "(toothy-grin)",
                        "code": "&#x1F604;"
                    },
                    {
                        "title": "Grinning and squinting eyes",
                        "slug": "(grinning-and-squinting-eyes)",
                        "code": "&#x1F606;"
                    },
                    {
                        "title": "Grinning with sweat drop",
                        "slug": "(grinning-with-sweat-drop)",
                        "code": "&#x1F605;"
                    },
                    {
                        "title": "Laughing with tears of joy",
                        "slug": "(laughing-with-tears-of-joy)",
                        "code": "&#x1F602;"
                    },
                    {
                        "title": "Rolling on the floor laughing",
                        "slug": "(rolling-on-the-floor-laughing)",
                        "code": "&#x1F923;"
                    },
                    {
                        "title": "Smug smile and blushing",
                        "slug": "(smug-smile-and-blushing)",
                        "code": "&#x1F60A;"
                    },
                    {
                        "title": "Big smile and blushing",
                        "slug": "(big-smile-and-blushing)",
                        "code": "&#x263A;&#xFE0F;"
                    },
                    {
                        "title": "Relieved and content",
                        "slug": "(relieved-and-content)",
                        "code": "&#x1F60C;"
                    },
                    {
                        "title": "Winking smiley",
                        "slug": "(winking-smiley)",
                        "code": "&#x1F609;"
                    },
                    {
                        "title": "Smirking face",
                        "slug": "(smirking-face)",
                        "code": "&#x1F60F;"
                    },
                    {
                        "title": "Smiley with heart-eyes",
                        "slug": "(smiley-with-heart-eyes)",
                        "code": "&#x1F60D;"
                    },
                    {
                        "title": "Throwing a kiss",
                        "slug": "(throwing-a-kiss)",
                        "code": "&#x1F618;"
                    },
                    {
                        "title": "Kissing smiley face",
                        "slug": "(kissing-smiley-face)",
                        "code": "&#x1F617;"
                    },
                    {
                        "title": "Kissing smiley with closed eyes",
                        "slug": "(kissing-smiley-with-closed-eyes)",
                        "code": "&#x1F619;"
                    },
                    {
                        "title": "Kissing smiley face blushing",
                        "slug": "(kissing-smiley-face-blushing)",
                        "code": "&#x1F61A;"
                    },
                    {
                        "title": "Hugging smiley face",
                        "slug": "(hugging-smiley-face)",
                        "code": "&#x1F917;"
                    },
                    {
                        "title": "Blushing smiley face",
                        "slug": "(blushing-smiley-face)",
                        "code": "&#x1F633;"
                    },
                    {
                        "title": "Upside-down smiley face",
                        "slug": "(upside-down-smiley-face)",
                        "code": "&#x1F643;"
                    },
                    {
                        "title": "Angel smiley",
                        "slug": "(angel-smiley)",
                        "code": "&#x1F607;"
                    },
                    {
                        "title": "Devil smiley",
                        "slug": "(devil-smiley)",
                        "code": "&#x1F608;"
                    },
                    {
                        "title": "Sticking tongue out",
                        "slug": "(sticking-tongue-out)",
                        "code": "&#x1F61B;"
                    },
                    {
                        "title": "Tongue-out and squinting",
                        "slug": "(tongue-out-and-squinting)",
                        "code": "&#x1F61D;"
                    },
                    {
                        "title": "Tongue-out and winking",
                        "slug": "(tongue-out-and-winking)",
                        "code": "&#x1F61C;"
                    },
                    {
                        "title": "Smiley licking its mouth",
                        "slug": "(smiley-licking-its-mouth)",
                        "code": "&#x1F60B;"
                    },
                    {
                        "title": "Drooling smiley",
                        "slug": "(drooling-smiley)",
                        "code": "&#x1F924;"
                    },
                    {
                        "title": "Smiley face with eyeglasses",
                        "slug": "(smiley-face-with-eyeglasses)",
                        "code": "&#x1F913;"
                    },
                    {
                        "title": "Smiley face with sunglasses",
                        "slug": "(smiley-face-with-sunglasses)",
                        "code": "&#x1F60E;"
                    },
                    {
                        "title": "Money smiley",
                        "slug": "(money-smiley)",
                        "code": "&#x1F911;"
                    },
                    {
                        "title": "Unamused face",
                        "slug": "(unamused-face)",
                        "code": "&#x1F612;"
                    },
                    {
                        "title": "Frowny face",
                        "slug": "(frowny-face)",
                        "code": "&#x1F641;"
                    },
                    {
                        "title": "Big frown",
                        "slug": "(big-frown)",
                        "code": "&#x2639;&#xFE0F;"
                    },
                    {
                        "title": "Disappointed",
                        "slug": "(disappointed)",
                        "code": "&#x1F61E;"
                    },
                    {
                        "title": "Sad and pensive",
                        "slug": "(sad-and-pensive)",
                        "code": "&#x1F614;"
                    },
                    {
                        "title": "Quivering mouth",
                        "slug": "(quivering-mouth)",
                        "code": "&#x1F616;"
                    },
                    {
                        "title": "Sad face with sweat drop",
                        "slug": "(sad-face-with-sweat-drop)",
                        "code": "&#x1F613;"
                    },
                    {
                        "title": "Frowny face with sweat drop",
                        "slug": "(frowny-face-with-sweat-drop)",
                        "code": "&#x1F622;"
                    },
                    {
                        "title": "Crying face",
                        "slug": "(crying-face)",
                        "code": "&#x1F622;"
                    },
                    {
                        "title": "Sobbing",
                        "slug": "(sobbing)",
                        "code": "&#x1F62D;"
                    },
                    {
                        "title": "Worrying face",
                        "slug": "(worrying-face)",
                        "code": "&#x1F61F;"
                    },
                    {
                        "title": "Helpless",
                        "slug": "(helpless)",
                        "code": "&#x1F623;"
                    },
                    {
                        "title": "Weary",
                        "slug": "(weary)",
                        "code": "&#x1F629;"
                    },
                    {
                        "title": "Exhausted",
                        "slug": "(exhausted)",
                        "code": "&#x1F62B;"
                    },
                    {
                        "title": "Unamused",
                        "slug": "(unamused)",
                        "code": "&#x1F615;"
                    },
                    {
                        "title": "Thinking",
                        "slug": "(thinking)",
                        "code": "&#x1F914;"
                    },
                    {
                        "title": "Rolling eyes",
                        "slug": "(rolling-eyes)",
                        "code": "&#x1F644;"
                    },
                    {
                        "title": "Steaming mad",
                        "slug": "(steaming-mad)",
                        "code": "&#x1F624;"
                    },
                    {
                        "title": "Angry face",
                        "slug": "(angry-face)",
                        "code": "&#x1F620;"
                    },
                    {
                        "title": "Grumpy",
                        "slug": "(grumpy)",
                        "code": "&#x1F621;"
                    },
                    {
                        "title": "Silent blank face",
                        "slug": "(silent-blank-face)",
                        "code": "&#x1F636;"
                    },
                    {
                        "title": "Lips sealed",
                        "slug": "(lips-sealed)",
                        "code": "&#x1F910;"
                    },
                    {
                        "title": "Neutral face",
                        "slug": "(neutral-face)",
                        "code": "&#x1F610;"
                    },
                    {
                        "title": "Expressionless",
                        "slug": "(expressionless)",
                        "code": "&#x1F611;"
                    },
                    {
                        "title": "Surprised",
                        "slug": "(surprised)",
                        "code": "&#x1F62F;"
                    },
                    {
                        "title": "Shocked",
                        "slug": "(shocked)",
                        "code": "&#x1F632;"
                    },
                    {
                        "title": "Anguished",
                        "slug": "(anguished)",
                        "code": "&#x1F627;"
                    },
                    {
                        "title": "Scared",
                        "slug": "(scared)",
                        "code": "&#x1F628;"
                    },
                    {
                        "title": "Terrified",
                        "slug": "(terrified)",
                        "code": "&#x1F630;"
                    },
                    {
                        "title": "Screaming in fear",
                        "slug": "(screaming-in-fear)",
                        "code": "&#x1F631;"
                    },
                    {
                        "title": "Sleepy emoji with snot bubble",
                        "slug": "(sleepy-emoji-with-snot-bubble)",
                        "code": "&#x1F62A;"
                    },
                    {
                        "title": "Sleeping and snoring",
                        "slug": "(sleeping-and-snoring)",
                        "code": "&#x1F634;"
                    },
                    {
                        "title": "Nervous",
                        "slug": "(nervous)",
                        "code": "&#x1F62C;"
                    },
                    {
                        "title": "Liar with big nose",
                        "slug": "(liar-with-big-nose)",
                        "code": "&#x1F925;"
                    },
                    {
                        "title": "Sneezing",
                        "slug": "(sneezing)",
                        "code": "&#x1F927;"
                    },
                    {
                        "title": "Sick emoji with thermometer",
                        "slug": "(sick-emoji-with-thermometer)",
                        "code": "&#x1F912;"
                    },
                    {
                        "title": "Smiley with medical mask",
                        "slug": "(smiley-with-medical-mask)",
                        "code": "&#x1F637;"
                    },
                    {
                        "title": "Head-bandage",
                        "slug": "(head-bandage)",
                        "code": "&#x1F915;"
                    },
                    {
                        "title": "Dizzy",
                        "slug": "(dizzy)",
                        "code": "&#x1F635;"
                    },
                    {
                        "title": "Nauseated",
                        "slug": "(nauseated)",
                        "code": "&#x1F922;"
                    },
                    {
                        "title": "Smiley with cowboy hat",
                        "slug": "(smiley-with-cowboy-hat)",
                        "code": "&#x1F920;"
                    },
                    {
                        "title": "Smiling clown face",
                        "slug": "(smiling-clown-face)",
                        "code": "&#x1F921;"
                    },
                    {
                        "title": "Angry devil",
                        "slug": "(angry-devil)",
                        "code": "&#x1F47F;"
                    },
                    {
                        "title": "Ogre",
                        "slug": "(ogre)",
                        "code": "&#x1F479;"
                    },
                    {
                        "title": "Goblin",
                        "slug": "(goblin)",
                        "code": "&#x1F47A;"
                    },
                    {
                        "title": "Ghost emoji",
                        "slug": "(ghost-emoji)",
                        "code": "&#x1F47B;"
                    },
                    {
                        "title": "Skull emoji",
                        "slug": "(skull-emoji)",
                        "code": "&#x1F480;"
                    },
                    {
                        "title": "Alien emoji",
                        "slug": "(alien-emoji)",
                        "code": "&#x1F47D;"
                    },
                    {
                        "title": "Monster game character",
                        "slug": "(monster-game-character)",
                        "code": "&#x1F47E;"
                    },
                    {
                        "title": "Robot emoji",
                        "slug": "(robot-emoji)",
                        "code": "&#x1F916;"
                    },
                    {
                        "title": "Smiling poop emoji",
                        "slug": "(smiling-poop-emoji)",
                        "code": "&#x1F4A9;"
                    },
                    {
                        "title": "Jack-o'lantern",
                        "slug": "(jack-o'lantern)",
                        "code": "&#x1F383;"
                    }
                ]
            },
            {
                "name": "Gestures and People",
                "icon": "&#x1F44D;",
                "slug": "GAP",
                "smilyList": [
                    {
                        "title": "Thumbs up",
                        "slug": "(thumbs-up)",
                        "code": "&#x1F44D;"
                    },
                    {
                        "title": "Thumbs down",
                        "slug": "(thumbs-down)",
                        "code": "&#x1F44E;"
                    },
                    {
                        "title": "Peace fingers",
                        "slug": "(peace-fingers)",
                        "code": "&#x270C;&#xFE0F;"
                    },
                    {
                        "title": "Crossed fingers",
                        "slug": "(crossed-fingers)",
                        "code": "&#x1F91E;"
                    },
                    {
                        "title": "Perfect",
                        "slug": "(perfect)",
                        "code": "&#x1F44C;"
                    },
                    {
                        "title": "Call me",
                        "slug": "(call-me)",
                        "code": "&#x1F919;"
                    },
                    {
                        "title": "Rock on",
                        "slug": "(rock-on)",
                        "code": "&#x1F918;"
                    },
                    {
                        "title": "Rude finger",
                        "slug": "(rude-finger)",
                        "code": "&#x1F595;"
                    },
                    {
                        "title": "Index finger",
                        "slug": "(index-finger)",
                        "code": "&#x261D;&#xFE0F;"
                    },
                    {
                        "title": "Nail polish",
                        "slug": "(nail-polish)",
                        "code": "&#x1F485;"
                    },
                    {
                        "title": "Pointing right",
                        "slug": "(pointing-right)",
                        "code": "&#x1F449;"
                    },
                    {
                        "title": "Pointing left",
                        "slug": "(pointing-left)",
                        "code": "&#x1F448;"
                    },
                    {
                        "title": "Pointing down",
                        "slug": "(pointing-down)",
                        "code": "&#x1F447;"
                    },
                    {
                        "title": "Pointing up",
                        "slug": "(pointing-up)",
                        "code": "&#x1F446;"
                    },
                    {
                        "title": "Fist bump",
                        "slug": "(fist-bump)",
                        "code": "&#x1F44A;"
                    },
                    {
                        "title": "Raised fist",
                        "slug": "(raised-fist)",
                        "code": "&#x270A;"
                    },
                    {
                        "title": "Right-facing fist",
                        "slug": "(right-facing-fist)",
                        "code": "&#x1F91C;"
                    },
                    {
                        "title": "Left-facing fist",
                        "slug": "(left-facing-fist)",
                        "code": "&#x1F91B;"
                    },
                    {
                        "title": "Flexed biceps",
                        "slug": "(flexed-biceps)",
                        "code": "&#x1F4AA;"
                    },
                    {
                        "title": "Writing hand",
                        "slug": "(writing-hand)",
                        "code": "&#x270D;&#xFE0F;"
                    },
                    {
                        "title": "Praying hands",
                        "slug": "(praying-hands)",
                        "code": "&#x1F64F;"
                    },
                    {
                        "title": "Selfie hand",
                        "slug": "(selfie-hand)",
                        "code": "&#x1F933;"
                    },
                    {
                        "title": "Applause",
                        "slug": "(applause)",
                        "code": "&#x1F44F;"
                    },
                    {
                        "title": "Handshake",
                        "slug": "(handshake)",
                        "code": "&#x1F91D;"
                    },
                    {
                        "title": "Celebrating",
                        "slug": "(celebrating)",
                        "code": "&#x1F64C;"
                    },
                    {
                        "title": "Open hands",
                        "slug": "(open-hands)",
                        "code": "&#x1F450;"
                    },
                    {
                        "title": "High five",
                        "slug": "(high-five)",
                        "code": "&#x270B;"
                    },
                    {
                        "title": "Open hand",
                        "slug": "(open-hand)",
                        "code": "&#x1F590;&#xFE0F;"
                    },
                    {
                        "title": "Waving hand",
                        "slug": "(waving-hand)",
                        "code": "&#x1F44B;"
                    },
                    {
                        "title": "Vulcan salute",
                        "slug": "(vulcan-salute)",
                        "code": "&#x1F596;"
                    },
                    {
                        "title": "Ear",
                        "slug": "(ear)",
                        "code": "&#x1F442;"
                    },
                    {
                        "title": "Nose",
                        "slug": "(nose)",
                        "code": "&#x1F443;"
                    },
                    {
                        "title": "Eye",
                        "slug": "(eye)",
                        "code": "&#x1F441;&#xFE0F;"
                    },
                    {
                        "title": "Eyes",
                        "slug": "(eyes)",
                        "code": "&#x1F440;"
                    },
                    {
                        "title": "Eye",
                        "slug": "(eye)",
                        "code": "&#x1F441;&#xFE0F;&#x200D;&#x1F5E8;&#xFE0F;"
                    },
                    {
                        "title": "Tongue out",
                        "slug": "(tongue-out)",
                        "code": "&#x1F445;"
                    },
                    {
                        "title": "Footprints",
                        "slug": "(footprints)",
                        "code": "&#x1F463;"
                    },
                    {
                        "title": "Silhouette",
                        "slug": "(silhouette)",
                        "code": "&#x1F464;"
                    },
                    {
                        "title": "Silhouette pair",
                        "slug": "(silhouette-pair)",
                        "code": "&#x1F465;"
                    },
                    {
                        "title": "Speaking head",
                        "slug": "(speaking-head)",
                        "code": "&#x1F5E3;&#xFE0F;"
                    },
                    {
                        "title": "Baby face",
                        "slug": "(baby-face)",
                        "code": "&#x1F476;"
                    },
                    {
                        "title": "Boy",
                        "slug": "(boy)",
                        "code": "&#x1F466;"
                    },
                    {
                        "title": "Girl",
                        "slug": "(girl)",
                        "code": "&#x1F467;"
                    },
                    {
                        "title": "Man with moustache",
                        "slug": "(man-with-moustache)",
                        "code": "&#x1F468;"
                    },
                    {
                        "title": "Woman",
                        "slug": "(woman)",
                        "code": "&#x1F469;"
                    },
                    {
                        "title": "Blonde man",
                        "slug": "(blonde-man)",
                        "code": "&#x1F471;"
                    },
                    {
                        "title": "Older man",
                        "slug": "(older-man)",
                        "code": "&#x1F474;"
                    },
                    {
                        "title": "Older woman",
                        "slug": "(older-woman)",
                        "code": "&#x1F475;"
                    },
                    {
                        "title": "Santa Claus",
                        "slug": "(santa-claus)",
                        "code": "&#x1F385;"
                    },
                    {
                        "title": "Mrs. Claus",
                        "slug": "(mrs.-claus)",
                        "code": "&#x1F936;"
                    },
                    {
                        "title": "Police officer",
                        "slug": "(police-officer)",
                        "code": "&#x1F46E;"
                    },
                    {
                        "title": "Construction worker",
                        "slug": "(construction-worker)",
                        "code": "&#x1F477;"
                    },
                    {
                        "title": "Guard",
                        "slug": "(guard)",
                        "code": "&#x1F482;"
                    },
                    {
                        "title": "Detective",
                        "slug": "(detective)",
                        "code": "&#x1F575;&#xFE0F;"
                    },
                    {
                        "title": "Person with turban",
                        "slug": "(person-with-turban)",
                        "code": "&#x1F473;"
                    },
                    {
                        "title": "Man with Chinese cap",
                        "slug": "(man-with-chinese-cap)",
                        "code": "&#x1F472;"
                    },
                    {
                        "title": "Groom",
                        "slug": "(groom)",
                        "code": "&#x1F935;"
                    },
                    {
                        "title": "Bride",
                        "slug": "(bride)",
                        "code": "&#x1F470;"
                    },
                    {
                        "title": "Prince",
                        "slug": "(prince)",
                        "code": "&#x1F934;"
                    },
                    {
                        "title": "Princess",
                        "slug": "(princess)",
                        "code": "&#x1F478;"
                    },
                    {
                        "title": "Girl waving hello",
                        "slug": "(girl-waving-hello)",
                        "code": "&#x1F64B;"
                    },
                    {
                        "title": "Girl raising hand",
                        "slug": "(girl-raising-hand)",
                        "code": "&#x1F481;"
                    },
                    {
                        "title": "Girl with arms forming an X",
                        "slug": "(girl-with-arms-forming-an-x)",
                        "code": "&#x1F645;"
                    },
                    {
                        "title": "Girl with arms above her head",
                        "slug": "(girl-with-arms-above-her-head)",
                        "code": "&#x1F646;"
                    },
                    {
                        "title": "Girl shrugging",
                        "slug": "(girl-shrugging)",
                        "code": "&#x1F937;"
                    },
                    {
                        "title": "Girl facepalming",
                        "slug": "(girl-facepalming)",
                        "code": "&#x1F926;"
                    },
                    {
                        "title": "Sad girl",
                        "slug": "(sad-girl)",
                        "code": "&#x1F64E;"
                    },
                    {
                        "title": "Angry girl frowning",
                        "slug": "(angry-girl-frowning)",
                        "code": "&#x1F64D;"
                    },
                    {
                        "title": "Girl getting massage",
                        "slug": "(girl-getting-massage)",
                        "code": "&#x1F486;"
                    },
                    {
                        "title": "Girl getting haircut",
                        "slug": "(girl-getting-haircut)",
                        "code": "&#x1F487;"
                    },
                    {
                        "title": "Pregnant woman emoji",
                        "slug": "(pregnant-woman-emoji)",
                        "code": "&#x1F930;"
                    },
                    {
                        "title": "Woman with bunny ears",
                        "slug": "(woman-with-bunny-ears)",
                        "code": "&#x1F46F;"
                    },
                    {
                        "title": "Person bowing",
                        "slug": "(person-bowing)",
                        "code": "&#x1F647;"
                    },
                    {
                        "title": "Baby angel",
                        "slug": "(baby-angel)",
                        "code": "&#x1F47C;"
                    },
                    {
                        "title": "Couple in love",
                        "slug": "(couple-in-love)",
                        "code": "&#x1F491;"
                    },
                    {
                        "title": "Female couple in love",
                        "slug": "(female-couple-in-love)",
                        "code": "&#x1F469;&#x200D;&#x2764;&#xFE0F;&#x200D;&#x1F469;"
                    },
                    {
                        "title": "Male couple in love",
                        "slug": "(male-couple-in-love)",
                        "code": "&#x1F468;&#x200D;&#x2764;&#xFE0F;&#x200D;&#x1F468;"
                    },
                    {
                        "title": "Kissing couple",
                        "slug": "(kissing-couple)",
                        "code": "&#x1F48F;"
                    },
                    {
                        "title": "Female couple kissing",
                        "slug": "(female-couple-kissing)",
                        "code": "&#x1F469;&#x200D;&#x2764;&#xFE0F;&#x200D;&#x1F48B;&#x200D;&#x1F469;"
                    },
                    {
                        "title": "Male couple kissing",
                        "slug": "(male-couple-kissing)",
                        "code": "&#x1F468;&#x200D;&#x2764;&#xFE0F;&#x200D;&#x1F48B;&#x200D;&#x1F468;"
                    },
                    {
                        "title": "Person walking",
                        "slug": "(person-walking)",
                        "code": "&#x1F6B6;"
                    },
                    {
                        "title": "Person running",
                        "slug": "(person-running)",
                        "code": "&#x1F3C3;"
                    },
                    {
                        "title": "Person in business suit",
                        "slug": "(person-in-business-suit)",
                        "code": "&#x1F574;&#xFE0F;"
                    },
                    {
                        "title": "Female dancer",
                        "slug": "(female-dancer)",
                        "code": "&#x1F483;"
                    },
                    {
                        "title": "Male dancer",
                        "slug": "(male-dancer)",
                        "code": "&#x1F57A;"
                    },
                    {
                        "title": "Having a bath",
                        "slug": "(having-a-bath)",
                        "code": "&#x1F6C0;"
                    },
                    {
                        "title": "Person sleeping",
                        "slug": "(person-sleeping)",
                        "code": "&#x1F6CC;"
                    },
                    {
                        "title": "Couple holding hands",
                        "slug": "(couple-holding-hands)",
                        "code": "&#x1F46B;"
                    },
                    {
                        "title": "Female couple holding hands",
                        "slug": "(female-couple-holding-hands)",
                        "code": "&#x1F46D;"
                    },
                    {
                        "title": "Male couple holding hands",
                        "slug": "(male-couple-holding-hands)",
                        "code": "&#x1F46C;"
                    },
                    {
                        "title": "Cartwheel",
                        "slug": "(cartwheel)",
                        "code": "&#x1F938;"
                    },
                    {
                        "title": "Weight lifter",
                        "slug": "(weight-lifter)",
                        "code": "&#x1F3CB;&#xFE0F;"
                    },
                    {
                        "title": "Basketball player",
                        "slug": "(basketball-player)",
                        "code": "&#x26F9;&#xFE0F;"
                    },
                    {
                        "title": "Handball player",
                        "slug": "(handball-player)",
                        "code": "&#x1F93E;"
                    },
                    {
                        "title": "Skier",
                        "slug": "(skier)",
                        "code": "&#x26F7;&#xFE0F;"
                    },
                    {
                        "title": "Snowboarder",
                        "slug": "(snowboarder)",
                        "code": "&#x1F3C2;"
                    },
                    {
                        "title": "Golfer",
                        "slug": "(golfer)",
                        "code": "&#x1F3CC;&#xFE0F;"
                    },
                    {
                        "title": "Surfer",
                        "slug": "(surfer)",
                        "code": "&#x1F3C4;"
                    },
                    {
                        "title": "Swimmer",
                        "slug": "(swimmer)",
                        "code": "&#x1F3CA;"
                    },
                    {
                        "title": "Water polo",
                        "slug": "(water-polo)",
                        "code": "&#x1F93D;"
                    },
                    {
                        "title": "Fencer",
                        "slug": "(fencer)",
                        "code": "&#x1F93A;"
                    },
                    {
                        "title": "Wrestlers",
                        "slug": "(wrestlers)",
                        "code": "&#x1F93C;"
                    },
                    {
                        "title": "Rowing",
                        "slug": "(rowing)",
                        "code": "&#x1F6A3;"
                    },
                    {
                        "title": "Jockey",
                        "slug": "(jockey)",
                        "code": "&#x1F3C7;"
                    },
                    {
                        "title": "Cyclist",
                        "slug": "(cyclist)",
                        "code": "&#x1F6B4;"
                    },
                    {
                        "title": "Parents with son",
                        "slug": "(parents-with-son)",
                        "code": "&#x1F46A;"
                    },
                    {
                        "title": "Parents with daughter",
                        "slug": "(parents-with-daughter)",
                        "code": "&#x1F468;&#x200D;&#x1F469;&#x200D;&#x1F467;"
                    },
                    {
                        "title": "Parents with two kids",
                        "slug": "(parents-with-two-kids)",
                        "code": "&#x1F468;&#x200D;&#x1F469;&#x200D;&#x1F467;&#x200D;&#x1F466;"
                    },
                    {
                        "title": "Parents with two sons",
                        "slug": "(parents-with-two-sons)",
                        "code": "&#x1F468;&#x200D;&#x1F469;&#x200D;&#x1F466;&#x200D;&#x1F466;"
                    },
                    {
                        "title": "Parents with two daughters",
                        "slug": "(parents-with-two-daughters)",
                        "code": "&#x1F468;&#x200D;&#x1F469;&#x200D;&#x1F467;&#x200D;&#x1F467;"
                    },
                    {
                        "title": "Female parents with son",
                        "slug": "(female-parents-with-son)",
                        "code": "&#x1F469;&#x200D;&#x1F469;&#x200D;&#x1F466;"
                    },
                    {
                        "title": "Female parents with daughter",
                        "slug": "(female-parents-with-daughter)",
                        "code": "&#x1F469;&#x200D;&#x1F469;&#x200D;&#x1F467;"
                    },
                    {
                        "title": "Female parents with two kids",
                        "slug": "(female-parents-with-two-kids)",
                        "code": "&#x1F469;&#x200D;&#x1F469;&#x200D;&#x1F467;&#x200D;&#x1F466;"
                    },
                    {
                        "title": "Female parents with two sons",
                        "slug": "(female-parents-with-two-sons)",
                        "code": "&#x1F469;&#x200D;&#x1F469;&#x200D;&#x1F466;&#x200D;&#x1F466;"
                    },
                    {
                        "title": "Female parents with two daughters",
                        "slug": "(female-parents-with-two-daughters)",
                        "code": "&#x1F469;&#x200D;&#x1F469;&#x200D;&#x1F467;&#x200D;&#x1F467;"
                    },
                    {
                        "title": "Male parents with son",
                        "slug": "(male-parents-with-son)",
                        "code": "&#x1F468;&#x200D;&#x1F468;&#x200D;&#x1F466;"
                    },
                    {
                        "title": "Male parents with daughter",
                        "slug": "(male-parents-with-daughter)",
                        "code": "&#x1F468;&#x200D;&#x1F468;&#x200D;&#x1F467;"
                    },
                    {
                        "title": "Male parents with two kids",
                        "slug": "(male-parents-with-two-kids)",
                        "code": "&#x1F468;&#x200D;&#x1F468;&#x200D;&#x1F467;&#x200D;&#x1F466;"
                    },
                    {
                        "title": "Male parents with two sons",
                        "slug": "(male-parents-with-two-sons)",
                        "code": "&#x1F468;&#x200D;&#x1F468;&#x200D;&#x1F466;&#x200D;&#x1F466;"
                    },
                    {
                        "title": "Male parents with two daughters",
                        "slug": "(male-parents-with-two-daughters)",
                        "code": "&#x1F468;&#x200D;&#x1F468;&#x200D;&#x1F467;&#x200D;&#x1F467;"
                    }
                ]
            },
            {
                "name": "Hearts, Clothes, Activities",
                "icon": "&#x2665;&#xFE0F;",
                "slug": "HCA",
                "smilyList": [
                    {
                        "title": "Heart emoji",
                        "slug": "(heart-emoji)",
                        "code": "&#x2665;&#xFE0F;"
                    },
                    {
                        "title": "Red heart",
                        "slug": "(red-heart)",
                        "code": "&#x2764;&#xFE0F;"
                    },
                    {
                        "title": "Yellow heart",
                        "slug": "(yellow-heart)",
                        "code": "&#x1F49B;"
                    },
                    {
                        "title": "Green heart",
                        "slug": "(green-heart)",
                        "code": "&#x1F49A;"
                    },
                    {
                        "title": "Blue heart",
                        "slug": "(blue-heart)",
                        "code": "&#x1F499;"
                    },
                    {
                        "title": "Purple heart",
                        "slug": "(purple-heart)",
                        "code": "&#x1F49C;"
                    },
                    {
                        "title": "Black heart",
                        "slug": "(black-heart)",
                        "code": "&#x1F5A4;"
                    },
                    {
                        "title": "Sparkly heart",
                        "slug": "(sparkly-heart)",
                        "code": "&#x1F496;"
                    },
                    {
                        "title": "Heart with ribbon",
                        "slug": "(heart-with-ribbon)",
                        "code": "&#x1F49D;"
                    },
                    {
                        "title": "Broken heart",
                        "slug": "(broken-heart)",
                        "code": "&#x1F494;"
                    },
                    {
                        "title": "Exclamation heart",
                        "slug": "(exclamation-heart)",
                        "code": "&#x2763;&#xFE0F;"
                    },
                    {
                        "title": "Two hearts",
                        "slug": "(two-hearts)",
                        "code": "&#x1F495;"
                    },
                    {
                        "title": "Revolving hearts",
                        "slug": "(revolving-hearts)",
                        "code": "&#x1F49E;"
                    },
                    {
                        "title": "Beating heart",
                        "slug": "(beating-heart)",
                        "code": "&#x1F493;"
                    },
                    {
                        "title": "Growing heart",
                        "slug": "(growing-heart)",
                        "code": "&#x1F497;"
                    },
                    {
                        "title": "Heart with arrow",
                        "slug": "(heart-with-arrow)",
                        "code": "&#x1F498;"
                    },
                    {
                        "title": "Heart badge",
                        "slug": "(heart-badge)",
                        "code": "&#x1F49F;"
                    },
                    {
                        "title": "Love letter",
                        "slug": "(love-letter)",
                        "code": "&#x1F48C;"
                    },
                    {
                        "title": "Kiss mark",
                        "slug": "(kiss-mark)",
                        "code": "&#x1F48B;"
                    },
                    {
                        "title": "Mouth emoji",
                        "slug": "(mouth-emoji)",
                        "code": "&#x1F444;"
                    },
                    {
                        "title": "Lipstick",
                        "slug": "(lipstick)",
                        "code": "&#x1F484;"
                    },
                    {
                        "title": "Diamond ring",
                        "slug": "(diamond-ring)",
                        "code": "&#x1F48D;"
                    },
                    {
                        "title": "Necklace",
                        "slug": "(necklace)",
                        "code": "&#x1F4FF;"
                    },
                    {
                        "title": "Gift",
                        "slug": "(gift)",
                        "code": "&#x1F381;"
                    },
                    {
                        "title": "Bikini emoji",
                        "slug": "(bikini-emoji)",
                        "code": "&#x1F459;"
                    },
                    {
                        "title": "Dress emoji",
                        "slug": "(dress-emoji)",
                        "code": "&#x1F457;"
                    },
                    {
                        "title": "Woman's blouse",
                        "slug": "(woman's-blouse)",
                        "code": "&#x1F45A;"
                    },
                    {
                        "title": "T-shirt",
                        "slug": "(t-shirt)",
                        "code": "&#x1F455;"
                    },
                    {
                        "title": "Kimono",
                        "slug": "(kimono)",
                        "code": "&#x1F458;"
                    },
                    {
                        "title": "Running shirt",
                        "slug": "(running-shirt)",
                        "code": "&#xFE0F;&#x1F3BD;"
                    },
                    {
                        "title": "Shirt and tie",
                        "slug": "(shirt-and-tie)",
                        "code": "&#x1F458;"
                    },
                    {
                        "title": "Jeans emoji",
                        "slug": "(jeans-emoji)",
                        "code": "&#x1F456;"
                    },
                    {
                        "title": "High heels",
                        "slug": "(high-heels)",
                        "code": "&#x1F460;"
                    },
                    {
                        "title": "Woman's sandal",
                        "slug": "(woman's-sandal)",
                        "code": "&#x1F461;"
                    },
                    {
                        "title": "Woman's boot",
                        "slug": "(woman's-boot)",
                        "code": "&#x1F462;"
                    },
                    {
                        "title": "Sneaker emoji",
                        "slug": "(sneaker-emoji)",
                        "code": "&#x1F45F;"
                    },
                    {
                        "title": "Man's shoe",
                        "slug": "(man's-shoe)",
                        "code": "&#x1F45E;"
                    },
                    {
                        "title": "Woman's hat",
                        "slug": "(woman's-hat)",
                        "code": "&#x1F452;"
                    },
                    {
                        "title": "Top hat",
                        "slug": "(top-hat)",
                        "code": "&#x1F3A9;"
                    },
                    {
                        "title": "Graduation hat",
                        "slug": "(graduation-hat)",
                        "code": "&#x1F393;"
                    },
                    {
                        "title": "Crown",
                        "slug": "(crown)",
                        "code": "&#x1F451;"
                    },
                    {
                        "title": "Rescue worker's helmet",
                        "slug": "(rescue-worker's-helmet)",
                        "code": "&#x26D1;&#xFE0F;"
                    },
                    {
                        "title": "Eyeglasses",
                        "slug": "(eyeglasses)",
                        "code": "&#x1F453;"
                    },
                    {
                        "title": "Sunglasses",
                        "slug": "(sunglasses)",
                        "code": "&#x1F576;&#xFE0F;"
                    },
                    {
                        "title": "Closed umbrella",
                        "slug": "(closed-umbrella)",
                        "code": "&#x1F302;"
                    },
                    {
                        "title": "Purse",
                        "slug": "(purse)",
                        "code": "&#x1F45B;"
                    },
                    {
                        "title": "Pouch",
                        "slug": "(pouch)",
                        "code": "&#x1F45D;"
                    },
                    {
                        "title": "Handbag",
                        "slug": "(handbag)",
                        "code": "&#x1F45C;"
                    },
                    {
                        "title": "Briefcase",
                        "slug": "(briefcase)",
                        "code": "&#x1F4BC;"
                    },
                    {
                        "title": "Backpack",
                        "slug": "(backpack)",
                        "code": "&#x1F392;"
                    },
                    {
                        "title": "Shopping bags",
                        "slug": "(shopping-bags)",
                        "code": "&#x1F6CD;&#xFE0F;"
                    },
                    {
                        "title": "Shopping cart",
                        "slug": "(shopping-cart)",
                        "code": "&#xFE0F;&#x1F6D2;"
                    },
                    {
                        "title": "Theater",
                        "slug": "(theater)",
                        "code": "&#xFE0F;&#x1F3AD;"
                    },
                    {
                        "title": "Cinema",
                        "slug": "(cinema)",
                        "code": "&#xFE0F;&#x1F3A6;"
                    },
                    {
                        "title": "Painting",
                        "slug": "(painting)",
                        "code": "&#xFE0F;&#x1F3A8;"
                    },
                    {
                        "title": "Juggling",
                        "slug": "(juggling)",
                        "code": "&#xFE0F;&#x1F939;"
                    },
                    {
                        "title": "Confetti",
                        "slug": "(confetti)",
                        "code": "&#xFE0F;&#x1F38A;"
                    },
                    {
                        "title": "Party popper",
                        "slug": "(party-popper)",
                        "code": "&#xFE0F;&#x1F389;"
                    },
                    {
                        "title": "Balloon",
                        "slug": "(balloon)",
                        "code": "&#xFE0F;&#x1F388;"
                    },
                    {
                        "title": "Headphone",
                        "slug": "(headphone)",
                        "code": "&#xFE0F;&#x1F3A7;"
                    },
                    {
                        "title": "Saxophone",
                        "slug": "(saxophone)",
                        "code": "&#xFE0F;&#x1F3B7;"
                    },
                    {
                        "title": "Trumpet",
                        "slug": "(trumpet)",
                        "code": "&#xFE0F;&#x1F3BA;"
                    },
                    {
                        "title": "Guitar",
                        "slug": "(guitar)",
                        "code": "&#xFE0F;&#x1F3B8;"
                    },
                    {
                        "title": "Violin",
                        "slug": "(violin)",
                        "code": "&#xFE0F;&#x1F3BB;"
                    },
                    {
                        "title": "Drum",
                        "slug": "(drum)",
                        "code": "&#xFE0F;&#x1F941;"
                    },
                    {
                        "title": "Piano",
                        "slug": "(piano)",
                        "code": "&#xFE0F;&#x1F3B9;"
                    },
                    {
                        "title": "Microphone",
                        "slug": "(microphone)",
                        "code": "&#xFE0F;&#x1F3A4;"
                    },
                    {
                        "title": "Music note",
                        "slug": "(music-note)",
                        "code": "&#xFE0F;&#x1F3B5;"
                    },
                    {
                        "title": "Music notes",
                        "slug": "(music-notes)",
                        "code": "&#xFE0F;&#x1F3B6;"
                    },
                    {
                        "title": "Sheet music",
                        "slug": "(sheet-music)",
                        "code": "&#xFE0F;&#x1F3BC;"
                    },
                    {
                        "title": "Soccer ball",
                        "slug": "(soccer-ball)",
                        "code": "&#xFE0F;&#x26BD;"
                    },
                    {
                        "title": "Basketball",
                        "slug": "(basketball)",
                        "code": "&#xFE0F;&#x1F3C0;"
                    },
                    {
                        "title": "Football",
                        "slug": "(football)",
                        "code": "&#xFE0F;&#x1F3C8;"
                    },
                    {
                        "title": "Baseball",
                        "slug": "(baseball)",
                        "code": "&#xFE0F;&#x26BE;"
                    },
                    {
                        "title": "Volleyball",
                        "slug": "(volleyball)",
                        "code": "&#xFE0F;&#x1F3D0;"
                    },
                    {
                        "title": "Rugby",
                        "slug": "(rugby)",
                        "code": "&#xFE0F;&#x1F3C9;"
                    },
                    {
                        "title": "8 ball",
                        "slug": "(8-ball)",
                        "code": "&#xFE0F;&#x1F3B1;"
                    },
                    {
                        "title": "Tennis",
                        "slug": "(tennis)",
                        "code": "&#xFE0F;&#x1F3BE;"
                    },
                    {
                        "title": "Badminton",
                        "slug": "(badminton)",
                        "code": "&#xFE0F;&#x1F3F8;"
                    },
                    {
                        "title": "Table tennis",
                        "slug": "(table-tennis)",
                        "code": "&#xFE0F;&#x1F3D3;"
                    },
                    {
                        "title": "Cricket",
                        "slug": "(cricket)",
                        "code": "&#xFE0F;&#x1F3CF;"
                    },
                    {
                        "title": "Field hockey",
                        "slug": "(field-hockey)",
                        "code": "&#xFE0F;&#x1F3D1;"
                    },
                    {
                        "title": "Ice hockey",
                        "slug": "(ice-hockey)",
                        "code": "&#xFE0F;&#x1F3D2;"
                    },
                    {
                        "title": "Goal net",
                        "slug": "(goal-net)",
                        "code": "&#xFE0F;&#x1F945;"
                    },
                    {
                        "title": "Ice skate",
                        "slug": "(ice-skate)",
                        "code": "&#xFE0F;&#x26F8;&#xFE0F;"
                    },
                    {
                        "title": "Skis",
                        "slug": "(skis)",
                        "code": "&#xFE0F;&#x1F3BF;"
                    },
                    {
                        "title": "Boxing",
                        "slug": "(boxing)",
                        "code": "&#xFE0F;&#x1F94A;"
                    },
                    {
                        "title": "Martial arts",
                        "slug": "(martial-arts)",
                        "code": "&#xFE0F;&#x1F94B;"
                    },
                    {
                        "title": "Golf",
                        "slug": "(golf)",
                        "code": "&#xFE0F;&#x26F3;"
                    },
                    {
                        "title": "Bowling",
                        "slug": "(bowling)",
                        "code": "&#xFE0F;&#x1F3B3;"
                    },
                    {
                        "title": "Archery",
                        "slug": "(archery)",
                        "code": "&#xFE0F;&#x1F3F9;"
                    },
                    {
                        "title": "Fishing",
                        "slug": "(fishing)",
                        "code": "&#xFE0F;&#x1F3A3;"
                    },
                    {
                        "title": "Darts",
                        "slug": "(darts)",
                        "code": "&#xFE0F;&#x1F3AF;"
                    },
                    {
                        "title": "Cycling",
                        "slug": "(cycling)",
                        "code": "&#x1F6B5;"
                    },
                    {
                        "title": "Medal",
                        "slug": "(medal)",
                        "code": "&#xFE0F;&#x1F396;&#xFE0F;"
                    },
                    {
                        "title": "Sports medal",
                        "slug": "(sports-medal)",
                        "code": "&#xFE0F;&#x1F3C5;"
                    },
                    {
                        "title": "Gold medal",
                        "slug": "(gold-medal)",
                        "code": "&#xFE0F;&#x1F947;"
                    },
                    {
                        "title": "Silver medal",
                        "slug": "(silver-medal)",
                        "code": "&#xFE0F;&#x1F948;"
                    },
                    {
                        "title": "Bronze medal",
                        "slug": "(bronze-medal)",
                        "code": "&#xFE0F;&#x1F949;"
                    },
                    {
                        "title": "Trophy",
                        "slug": "(trophy)",
                        "code": "&#xFE0F;&#x1F3C6;"
                    }
                ]
            },
            {
                "name": "Foods, drinks",
                "icon": "&#x1F34F;",
                "slug": "FD",
                "smilyList": [
                    {
                        "title": "Green apple",
                        "slug": "(green-apple)",
                        "code": "&#x1F34F;"
                    },
                    {
                        "title": "Red apple",
                        "slug": "(red-apple)",
                        "code": "&#x1F34E;"
                    },
                    {
                        "title": "Pear",
                        "slug": "(pear)",
                        "code": "&#x1F350;"
                    },
                    {
                        "title": "Tangerine",
                        "slug": "(tangerine)",
                        "code": "&#x1F34A;"
                    },
                    {
                        "title": "Lemon",
                        "slug": "(lemon)",
                        "code": "&#x1F34B;"
                    },
                    {
                        "title": "Banana",
                        "slug": "(banana)",
                        "code": "&#x1F34C;"
                    },
                    {
                        "title": "Watermelon",
                        "slug": "(watermelon)",
                        "code": "&#x1F349;"
                    },
                    {
                        "title": "Grapes",
                        "slug": "(grapes)",
                        "code": "&#x1F347;"
                    },
                    {
                        "title": "Strawberry",
                        "slug": "(strawberry)",
                        "code": "&#x1F353;"
                    },
                    {
                        "title": "Melon",
                        "slug": "(melon)",
                        "code": "&#x1F348;"
                    },
                    {
                        "title": "Kiwi Fruit",
                        "slug": "(kiwi-fruit)",
                        "code": "&#x1F95D;"
                    },
                    {
                        "title": "Avocado",
                        "slug": "(avocado)",
                        "code": "&#x1F951;"
                    },
                    {
                        "title": "Pineapple",
                        "slug": "(pineapple)",
                        "code": "&#x1F34D;"
                    },
                    {
                        "title": "Cherries",
                        "slug": "(cherries)",
                        "code": "&#x1F352;"
                    },
                    {
                        "title": "Peach",
                        "slug": "(peach)",
                        "code": "&#x1F351;"
                    },
                    {
                        "title": "Eggplant",
                        "slug": "(eggplant)",
                        "code": "&#x1F346;"
                    },
                    {
                        "title": "Cucumber",
                        "slug": "(cucumber)",
                        "code": "&#x1F952;"
                    },
                    {
                        "title": "Carrot",
                        "slug": "(carrot)",
                        "code": "&#x1F955;"
                    },
                    {
                        "title": "Hot Pepper",
                        "slug": "(hot-pepper)",
                        "code": "&#x1F336;"
                    },
                    {
                        "title": "Corn",
                        "slug": "(corn)",
                        "code": "&#x1F33D;"
                    },
                    {
                        "title": "Tomato",
                        "slug": "(tomato)",
                        "code": "&#x1F345;"
                    },
                    {
                        "title": "Potato",
                        "slug": "(potato)",
                        "code": "&#x1F954;"
                    },
                    {
                        "title": "Yam",
                        "slug": "(yam)",
                        "code": "&#x1F360;"
                    },
                    {
                        "title": "Chestnut",
                        "slug": "(chestnut)",
                        "code": "&#x1F330;"
                    },
                    {
                        "title": "Peanuts",
                        "slug": "(peanuts)",
                        "code": "&#x1F95C;"
                    },
                    {
                        "title": "Honey Pot",
                        "slug": "(honey-pot)",
                        "code": "&#x1F36F;"
                    },
                    {
                        "title": "Croissant",
                        "slug": "(croissant)",
                        "code": "&#x1F950;"
                    },
                    {
                        "title": "Bread",
                        "slug": "(bread)",
                        "code": "&#x1F35E;"
                    },
                    {
                        "title": "Baguette bread",
                        "slug": "(baguette-bread)",
                        "code": "&#x1F956;"
                    },
                    {
                        "title": "Cheese wedge",
                        "slug": "(cheese-wedge)",
                        "code": "&#x1F9C0;"
                    },
                    {
                        "title": "Egg",
                        "slug": "(egg)",
                        "code": "&#x1F95A;"
                    },
                    {
                        "title": "Frying pan",
                        "slug": "(frying-pan)",
                        "code": "&#x1F373;"
                    },
                    {
                        "title": "Bacon",
                        "slug": "(bacon)",
                        "code": "&#x1F953;"
                    },
                    {
                        "title": "Fried shrimp",
                        "slug": "(fried-shrimp)",
                        "code": "&#x1F364;"
                    },
                    {
                        "title": "Poultry leg",
                        "slug": "(poultry-leg)",
                        "code": "&#x1F357;"
                    },
                    {
                        "title": "Meat on bone",
                        "slug": "(meat-on-bone)",
                        "code": "&#x1F356;"
                    },
                    {
                        "title": "Pizza",
                        "slug": "(pizza)",
                        "code": "&#x1F355;"
                    },
                    {
                        "title": "Hot Dog",
                        "slug": "(hot-dog)",
                        "code": "&#x1F32D;"
                    },
                    {
                        "title": "Hamburger",
                        "slug": "(hamburger)",
                        "code": "&#x1F354;"
                    },
                    {
                        "title": "Fries",
                        "slug": "(fries)",
                        "code": "&#x1F35F;"
                    },
                    {
                        "title": "Stuffed flatbread",
                        "slug": "(stuffed-flatbread)",
                        "code": "&#x1F959;"
                    },
                    {
                        "title": "Taco",
                        "slug": "(taco)",
                        "code": "&#x1F32E;"
                    },
                    {
                        "title": "Burrito",
                        "slug": "(burrito)",
                        "code": "&#x1F32F;"
                    },
                    {
                        "title": "Green salad",
                        "slug": "(green-salad)",
                        "code": "&#x1F957;"
                    },
                    {
                        "title": "Paella",
                        "slug": "(paella)",
                        "code": "&#x1F958;"
                    },
                    {
                        "title": "Spaghetti",
                        "slug": "(spaghetti)",
                        "code": "&#x1F35D;"
                    },
                    {
                        "title": "Noodles",
                        "slug": "(noodles)",
                        "code": "&#x1F35C;"
                    },
                    {
                        "title": "Pot of food",
                        "slug": "(pot-of-food)",
                        "code": "&#x1F372;"
                    },
                    {
                        "title": "Sushi",
                        "slug": "(sushi)",
                        "code": "&#x1F363;"
                    },
                    {
                        "title": "Lunch Box",
                        "slug": "(lunch-box)",
                        "code": "&#x1F371;"
                    },
                    {
                        "title": "Cooked rice",
                        "slug": "(cooked-rice)",
                        "code": "&#x1F35B;"
                    },
                    {
                        "title": "Bowl of rice",
                        "slug": "(bowl-of-rice)",
                        "code": "&#x1F35A;"
                    },
                    {
                        "title": "Rice ball",
                        "slug": "(rice-ball)",
                        "code": "&#x1F359;"
                    },
                    {
                        "title": "Rice cracker",
                        "slug": "(rice-cracker)",
                        "code": "&#x1F358;"
                    },
                    {
                        "title": "Food on stick",
                        "slug": "(food-on-stick)",
                        "code": "&#x1F362;"
                    },
                    {
                        "title": "Dessert stick",
                        "slug": "(dessert-stick)",
                        "code": "&#x1F361;"
                    },
                    {
                        "title": "Shaved ice",
                        "slug": "(shaved-ice)",
                        "code": "&#x1F367;"
                    },
                    {
                        "title": "Bowl of ice cream",
                        "slug": "(bowl-of-ice-cream)",
                        "code": "&#x1F368;"
                    },
                    {
                        "title": "Ice cream in a cone",
                        "slug": "(ice-cream-in-a-cone)",
                        "code": "&#x1F366;"
                    },
                    {
                        "title": "Pancakes",
                        "slug": "(pancakes)",
                        "code": "&#x1F95E;"
                    },
                    {
                        "title": "Piece of cake",
                        "slug": "(piece-of-cake)",
                        "code": "&#x1F370;"
                    },
                    {
                        "title": "Birthday cake",
                        "slug": "(birthday-cake)",
                        "code": "&#x1F382;"
                    },
                    {
                        "title": "Pudding",
                        "slug": "(pudding)",
                        "code": "&#x1F36E;"
                    },
                    {
                        "title": "Lollipop",
                        "slug": "(lollipop)",
                        "code": "&#x1F36D;"
                    },
                    {
                        "title": "Cookie",
                        "slug": "(cookie)",
                        "code": "&#x1F365;"
                    },
                    {
                        "title": "Candy",
                        "slug": "(candy)",
                        "code": "&#x1F36C;"
                    },
                    {
                        "title": "Chocolate",
                        "slug": "(chocolate)",
                        "code": "&#x1F36B;"
                    },
                    {
                        "title": "Popcorn",
                        "slug": "(popcorn)",
                        "code": "&#x1F37F;"
                    },
                    {
                        "title": "Doughnut",
                        "slug": "(doughnut)",
                        "code": "&#x1F369;"
                    },
                    {
                        "title": "Biscuit",
                        "slug": "(biscuit)",
                        "code": "&#x1F36A;"
                    },
                    {
                        "title": "Baby bottle",
                        "slug": "(baby-bottle)",
                        "code": "&#x1F37C;"
                    },
                    {
                        "title": "Glass of milk",
                        "slug": "(glass-of-milk)",
                        "code": "&#x1F95B;"
                    },
                    {
                        "title": "Cup of coffee",
                        "slug": "(cup-of-coffee)",
                        "code": "&#x2615;"
                    },
                    {
                        "title": "Cup of tea",
                        "slug": "(cup-of-tea)",
                        "code": "&#x1F375;"
                    },
                    {
                        "title": "Sake",
                        "slug": "(sake)",
                        "code": "&#x1F376;"
                    },
                    {
                        "title": "Beer mug",
                        "slug": "(beer-mug)",
                        "code": "&#x1F37A;"
                    },
                    {
                        "title": "Clinking beer mugs",
                        "slug": "(clinking-beer-mugs)",
                        "code": "&#x1F37B;"
                    },
                    {
                        "title": "Clinking glasses",
                        "slug": "(clinking-glasses)",
                        "code": "&#x1F942;"
                    },
                    {
                        "title": "Wine glass",
                        "slug": "(wine-glass)",
                        "code": "&#x1F377;"
                    },
                    {
                        "title": "Whisky glass",
                        "slug": "(whisky-glass)",
                        "code": "&#x1F943;"
                    },
                    {
                        "title": "Cocktail Glass",
                        "slug": "(cocktail-glass)",
                        "code": "&#x1F378;"
                    },
                    {
                        "title": "Tropical Drink",
                        "slug": "(tropical-drink)",
                        "code": "&#x1F379;"
                    },
                    {
                        "title": "Champagne",
                        "slug": "(champagne)",
                        "code": "&#x1F37E;"
                    },
                    {
                        "title": "Spoon",
                        "slug": "(spoon)",
                        "code": "&#x1F944;"
                    },
                    {
                        "title": "Fork and knife",
                        "slug": "(fork-and-knife)",
                        "code": "&#x1F374;"
                    },
                    {
                        "title": "Fork and Knife with plate",
                        "slug": "(fork-and-knife-with-plate)",
                        "code": "&#x1F37D;"
                    }
                ]
            },
            {
                "name": "Animals",
                "icon": "&#x1F63A;",
                "slug": "A",
                "smilyList": [
                    {
                        "title": "Happy cat face",
                        "slug": "(happy-cat-face)",
                        "code": "&#x1F63A;"
                    },
                    {
                        "title": "Grinning cat",
                        "slug": "(grinning-cat)",
                        "code": "&#x1F638;"
                    },
                    {
                        "title": "Cat with happy tears",
                        "slug": "(cat-with-happy-tears)",
                        "code": "&#x1F639;"
                    },
                    {
                        "title": "Heart-eyes cat",
                        "slug": "(heart-eyes-cat)",
                        "code": "&#x1F63B;"
                    },
                    {
                        "title": "Smirking cat",
                        "slug": "(smirking-cat)",
                        "code": "&#x1F63C;"
                    },
                    {
                        "title": "Kissing cat",
                        "slug": "(kissing-cat)",
                        "code": "&#x1F63D;"
                    },
                    {
                        "title": "Scrunched eyes cat",
                        "slug": "(scrunched-eyes-cat)",
                        "code": "&#x1F640;"
                    },
                    {
                        "title": "Crying cat",
                        "slug": "(crying-cat)",
                        "code": "&#x1F63F;"
                    },
                    {
                        "title": "Grumpy cat",
                        "slug": "(grumpy-cat)",
                        "code": "&#x1F63E;"
                    },
                    {
                        "title": "Kitten emoji",
                        "slug": "(kitten-emoji)",
                        "code": "&#x1F431;"
                    },
                    {
                        "title": "Puppy face",
                        "slug": "(puppy-face)",
                        "code": "&#x1F436;"
                    },
                    {
                        "title": "Bunny",
                        "slug": "(bunny)",
                        "code": "&#x1F430;"
                    },
                    {
                        "title": "Mouse",
                        "slug": "(mouse)",
                        "code": "&#x1F42D;"
                    },
                    {
                        "title": "Hamster",
                        "slug": "(hamster)",
                        "code": "&#x1F439;"
                    },
                    {
                        "title": "Fox",
                        "slug": "(fox)",
                        "code": "&#x1F98A;"
                    },
                    {
                        "title": "Bear",
                        "slug": "(bear)",
                        "code": "&#x1F43B;"
                    },
                    {
                        "title": "Panda",
                        "slug": "(panda)",
                        "code": "&#x1F43C;"
                    },
                    {
                        "title": "Koala",
                        "slug": "(koala)",
                        "code": "&#x1F428;"
                    },
                    {
                        "title": "Tiger face",
                        "slug": "(tiger-face)",
                        "code": "&#x1F42F;"
                    },
                    {
                        "title": "Lion face",
                        "slug": "(lion-face)",
                        "code": "&#x1F981;"
                    },
                    {
                        "title": "Cow face",
                        "slug": "(cow-face)",
                        "code": "&#x1F42E;"
                    },
                    {
                        "title": "Wild boar",
                        "slug": "(wild-boar)",
                        "code": "&#x1F417;"
                    },
                    {
                        "title": "Piggy",
                        "slug": "(piggy)",
                        "code": "&#x1F437;"
                    },
                    {
                        "title": "Pig nose",
                        "slug": "(pig-nose)",
                        "code": "&#x1F43D;"
                    },
                    {
                        "title": "Frog",
                        "slug": "(frog)",
                        "code": "&#x1F438;"
                    },
                    {
                        "title": "Monkey face",
                        "slug": "(monkey-face)",
                        "code": "&#x1F435;"
                    },
                    {
                        "title": "Monkey covering eyes",
                        "slug": "(monkey-covering-eyes)",
                        "code": "&#x1F648;"
                    },
                    {
                        "title": "Monkey covering ears",
                        "slug": "(monkey-covering-ears)",
                        "code": "&#x1F649;"
                    },
                    {
                        "title": "Monkey covering mouth",
                        "slug": "(monkey-covering-mouth)",
                        "code": "&#x1F64A;"
                    },
                    {
                        "title": "Gorilla",
                        "slug": "(gorilla)",
                        "code": "&#x1F98D;"
                    },
                    {
                        "title": "Wolf",
                        "slug": "(wolf)",
                        "code": "&#x1F43A;"
                    },
                    {
                        "title": "Sheep",
                        "slug": "(sheep)",
                        "code": "&#x1F411;"
                    },
                    {
                        "title": "Goat",
                        "slug": "(goat)",
                        "code": "&#x1F410;"
                    },
                    {
                        "title": "Ram",
                        "slug": "(ram)",
                        "code": "&#x1F40F;"
                    },
                    {
                        "title": "Horse face",
                        "slug": "(horse-face)",
                        "code": "&#x1F434;"
                    },
                    {
                        "title": "Unicorn",
                        "slug": "(unicorn)",
                        "code": "&#x1F984;"
                    },
                    {
                        "title": "Deer",
                        "slug": "(deer)",
                        "code": "&#x1F98C;"
                    },
                    {
                        "title": "Rhino",
                        "slug": "(rhino)",
                        "code": "&#x1F98F;"
                    },
                    {
                        "title": "Eagle",
                        "slug": "(eagle)",
                        "code": "&#x1F985;"
                    },
                    {
                        "title": "Chick face",
                        "slug": "(chick-face)",
                        "code": "&#x1F424;"
                    },
                    {
                        "title": "Hatching chick",
                        "slug": "(hatching-chick)",
                        "code": "&#x1F423;"
                    },
                    {
                        "title": "Baby chick",
                        "slug": "(baby-chick)",
                        "code": "&#x1F425;"
                    },
                    {
                        "title": "Chicken",
                        "slug": "(chicken)",
                        "code": "&#x1F414;"
                    },
                    {
                        "title": "Rooster",
                        "slug": "(rooster)",
                        "code": "&#x1F413;"
                    },
                    {
                        "title": "Turkey",
                        "slug": "(turkey)",
                        "code": "&#x1F983;"
                    },
                    {
                        "title": "Bird",
                        "slug": "(bird)",
                        "code": "&#x1F426;"
                    },
                    {
                        "title": "Duck",
                        "slug": "(duck)",
                        "code": "&#x1F986;"
                    },
                    {
                        "title": "Bat",
                        "slug": "(bat)",
                        "code": "&#x1F987;"
                    },
                    {
                        "title": "Owl",
                        "slug": "(owl)",
                        "code": "&#x1F989;"
                    },
                    {
                        "title": "Dove",
                        "slug": "(dove)",
                        "code": "&#x1F54A;&#xFE0F;"
                    },
                    {
                        "title": "Penguin",
                        "slug": "(penguin)",
                        "code": "&#x1F427;"
                    },
                    {
                        "title": "Puppy",
                        "slug": "(puppy)",
                        "code": "&#x1F415;"
                    },
                    {
                        "title": "Poodle",
                        "slug": "(poodle)",
                        "code": "&#x1F429;"
                    },
                    {
                        "title": "Cat",
                        "slug": "(cat)",
                        "code": "&#x1F408;"
                    },
                    {
                        "title": "Rabbit",
                        "slug": "(rabbit)",
                        "code": "&#x1F407;"
                    },
                    {
                        "title": "Mouse",
                        "slug": "(mouse)",
                        "code": "&#x1F401;"
                    },
                    {
                        "title": "Rat",
                        "slug": "(rat)",
                        "code": "&#x1F400;"
                    },
                    {
                        "title": "Chipmunk",
                        "slug": "(chipmunk)",
                        "code": "&#x1F43F;"
                    },
                    {
                        "title": "Monkey",
                        "slug": "(monkey)",
                        "code": "&#x1F412;"
                    },
                    {
                        "title": "Piggy",
                        "slug": "(piggy)",
                        "code": "&#x1F416;"
                    },
                    {
                        "title": "Leopard",
                        "slug": "(leopard)",
                        "code": "&#x1F406;"
                    },
                    {
                        "title": "Tiger",
                        "slug": "(tiger)",
                        "code": "&#x1F405;"
                    },
                    {
                        "title": "Buffalo",
                        "slug": "(buffalo)",
                        "code": "&#x1F403;"
                    },
                    {
                        "title": "Ox",
                        "slug": "(ox)",
                        "code": "&#x1F402;"
                    },
                    {
                        "title": "Cow",
                        "slug": "(cow)",
                        "code": "&#x1F404;"
                    },
                    {
                        "title": "Galloping horse",
                        "slug": "(galloping-horse)",
                        "code": "&#x1F40E;"
                    },
                    {
                        "title": "Camel",
                        "slug": "(camel)",
                        "code": "&#x1F42A;"
                    },
                    {
                        "title": "Two-hump camel",
                        "slug": "(two-hump-camel)",
                        "code": "&#x1F42B;"
                    },
                    {
                        "title": "Elephant",
                        "slug": "(elephant)",
                        "code": "&#x1F418;"
                    },
                    {
                        "title": "Crocodile",
                        "slug": "(crocodile)",
                        "code": "&#x1F40A;"
                    },
                    {
                        "title": "Turtle",
                        "slug": "(turtle)",
                        "code": "&#x1F422;"
                    },
                    {
                        "title": "Tropical fish",
                        "slug": "(tropical-fish)",
                        "code": "&#x1F420;"
                    },
                    {
                        "title": "Fish",
                        "slug": "(fish)",
                        "code": "&#x1F41F;"
                    },
                    {
                        "title": "Blowfish",
                        "slug": "(blowfish)",
                        "code": "&#x1F421;"
                    },
                    {
                        "title": "Dolphin",
                        "slug": "(dolphin)",
                        "code": "&#x1F42C;"
                    },
                    {
                        "title": "Shark",
                        "slug": "(shark)",
                        "code": "&#x1F988;"
                    },
                    {
                        "title": "Spouting whale",
                        "slug": "(spouting-whale)",
                        "code": "&#x1F433;"
                    },
                    {
                        "title": "Whale",
                        "slug": "(whale)",
                        "code": "&#x1F40B;"
                    },
                    {
                        "title": "Squid",
                        "slug": "(squid)",
                        "code": "&#x1F991;"
                    },
                    {
                        "title": "Octopus",
                        "slug": "(octopus)",
                        "code": "&#x1F419;"
                    },
                    {
                        "title": "Shrimp",
                        "slug": "(shrimp)",
                        "code": "&#x1F990;"
                    },
                    {
                        "title": "Seashell",
                        "slug": "(seashell)",
                        "code": "&#x1F41A;"
                    },
                    {
                        "title": "Crab",
                        "slug": "(crab)",
                        "code": "&#x1F980;"
                    },
                    {
                        "title": "Scorpion",
                        "slug": "(scorpion)",
                        "code": "&#x1F982;"
                    },
                    {
                        "title": "Lizard",
                        "slug": "(lizard)",
                        "code": "&#x1F98E;"
                    },
                    {
                        "title": "Snake",
                        "slug": "(snake)",
                        "code": "&#x1F40D;"
                    },
                    {
                        "title": "Caterpillar",
                        "slug": "(caterpillar)",
                        "code": "&#x1F41B;"
                    },
                    {
                        "title": "Ant",
                        "slug": "(ant)",
                        "code": "&#x1F41C;"
                    },
                    {
                        "title": "Spider",
                        "slug": "(spider)",
                        "code": "&#x1F577;&#xFE0F;"
                    },
                    {
                        "title": "Spider web",
                        "slug": "(spider-web)",
                        "code": "&#x1F578;&#xFE0F;"
                    },
                    {
                        "title": "Ladybug",
                        "slug": "(ladybug)",
                        "code": "&#x1F41E;"
                    },
                    {
                        "title": "Butterfly",
                        "slug": "(butterfly)",
                        "code": "&#x1F98B;"
                    },
                    {
                        "title": "Bee",
                        "slug": "(bee)",
                        "code": "&#x1F41D;"
                    },
                    {
                        "title": "Snail",
                        "slug": "(snail)",
                        "code": "&#x1F40C;"
                    },
                    {
                        "title": "Dragon head",
                        "slug": "(dragon-head)",
                        "code": "&#x1F432;"
                    },
                    {
                        "title": "Dragon",
                        "slug": "(dragon)",
                        "code": "&#x1F409;"
                    },
                    {
                        "title": "Paw prints",
                        "slug": "(paw-prints)",
                        "code": "&#x1F43E;"
                    }
                ]
            },
            {
                "name": "Plants, Nature, Weather",
                "icon": "&#x1F33C;",
                "slug": "PNW",
                "smilyList": [
                    {
                        "title": "Blossoming flower",
                        "slug": "(blossoming-flower)",
                        "code": "&#x1F33C;"
                    },
                    {
                        "title": "Cherry Blossom",
                        "slug": "(cherry-blossom)",
                        "code": "&#x1F338;"
                    },
                    {
                        "title": "Hibiscus",
                        "slug": "(hibiscus)",
                        "code": "&#x1F33A;"
                    },
                    {
                        "title": "Rosette",
                        "slug": "(rosette)",
                        "code": "&#x1F3F5;&#xFE0F;"
                    },
                    {
                        "title": "Sunflower",
                        "slug": "(sunflower)",
                        "code": "&#x1F33B;"
                    },
                    {
                        "title": "Tulip",
                        "slug": "(tulip)",
                        "code": "&#x1F337;"
                    },
                    {
                        "title": "Rose",
                        "slug": "(rose)",
                        "code": "&#x1F339;"
                    },
                    {
                        "title": "Wilted flower",
                        "slug": "(wilted-flower)",
                        "code": "&#x1F940;"
                    },
                    {
                        "title": "Bouquet of flowers",
                        "slug": "(bouquet-of-flowers)",
                        "code": "&#x1F490;"
                    },
                    {
                        "title": "Crop",
                        "slug": "(crop)",
                        "code": "&#x1F33E;"
                    },
                    {
                        "title": "Wish tree",
                        "slug": "(wish-tree)",
                        "code": "&#x1F38B;"
                    },
                    {
                        "title": "Three-leaf clover",
                        "slug": "(three-leaf-clover)",
                        "code": "&#x2618;"
                    },
                    {
                        "title": "Four-leaf clover",
                        "slug": "(four-leaf-clover)",
                        "code": "&#x1F340;"
                    },
                    {
                        "title": "Green leaves",
                        "slug": "(green-leaves)",
                        "code": "&#x1F343;"
                    },
                    {
                        "title": "Fallen leaf",
                        "slug": "(fallen-leaf)",
                        "code": "&#x1F342;"
                    },
                    {
                        "title": "Maple leaf",
                        "slug": "(maple-leaf)",
                        "code": "&#x1F341;"
                    },
                    {
                        "title": "Seedling",
                        "slug": "(seedling)",
                        "code": "&#x1F331;"
                    },
                    {
                        "title": "Plant",
                        "slug": "(plant)",
                        "code": "&#x1F33F;"
                    },
                    {
                        "title": "Bamboo decoration",
                        "slug": "(bamboo-decoration)",
                        "code": "&#x1F38D;"
                    },
                    {
                        "title": "Cactus",
                        "slug": "(cactus)",
                        "code": "&#x1F335;"
                    },
                    {
                        "title": "Palm tree",
                        "slug": "(palm-tree)",
                        "code": "&#x1F334;"
                    },
                    {
                        "title": "Green tree",
                        "slug": "(green-tree)",
                        "code": "&#x1F333;"
                    },
                    {
                        "title": "Pine tree",
                        "slug": "(pine-tree)",
                        "code": "&#x1F333;"
                    },
                    {
                        "title": "Christmas tree",
                        "slug": "(christmas-tree)",
                        "code": "&#x1F384;"
                    },
                    {
                        "title": "Mushroom",
                        "slug": "(mushroom)",
                        "code": "&#x1F344;"
                    },
                    {
                        "title": "Earth Globe Americas",
                        "slug": "(earth-globe-americas)",
                        "code": "&#x1F30E;"
                    },
                    {
                        "title": "Earth Globe Europe-Africa",
                        "slug": "(earth-globe-europe-africa)",
                        "code": "&#x1F30D;"
                    },
                    {
                        "title": "Earth Globe Asia-Australia",
                        "slug": "(earth-globe-asia-australia)",
                        "code": "&#x1F30F;"
                    },
                    {
                        "title": "Last quarter moon smiling",
                        "slug": "(last-quarter-moon-smiling)",
                        "code": "&#x1F31C;"
                    },
                    {
                        "title": "First quarter moon",
                        "slug": "(first-quarter-moon)",
                        "code": "&#x1F31B;"
                    },
                    {
                        "title": "Full Moon",
                        "slug": "(full-moon)",
                        "code": "&#x1F315;"
                    },
                    {
                        "title": "Waning Gibbous Moon",
                        "slug": "(waning-gibbous-moon)",
                        "code": "&#x1F316;"
                    },
                    {
                        "title": "Last Quarter Moon",
                        "slug": "(last-quarter-moon)",
                        "code": "&#x1F317;"
                    },
                    {
                        "title": "Waning Crescent Moon",
                        "slug": "(waning-crescent-moon)",
                        "code": "&#x1F318;"
                    },
                    {
                        "title": "New Moon",
                        "slug": "(new-moon)",
                        "code": "&#x1F311;"
                    },
                    {
                        "title": "Waxing Crescent Moon",
                        "slug": "(waxing-crescent-moon)",
                        "code": "&#x1F312;"
                    },
                    {
                        "title": "First Quarter Moon",
                        "slug": "(first-quarter-moon)",
                        "code": "&#x1F313;"
                    },
                    {
                        "title": "Waxing Gibbous Moon",
                        "slug": "(waxing-gibbous-moon)",
                        "code": "&#x1F314;"
                    },
                    {
                        "title": "Dark Moon Smiley",
                        "slug": "(dark-moon-smiley)",
                        "code": "&#x1F31A;"
                    },
                    {
                        "title": "Moon Smiley",
                        "slug": "(moon-smiley)",
                        "code": "&#x1F31D;"
                    },
                    {
                        "title": "Crescent Moon",
                        "slug": "(crescent-moon)",
                        "code": "&#x1F319;"
                    },
                    {
                        "title": "Spinning stars",
                        "slug": "(spinning-stars)",
                        "code": "&#x1F4AB;"
                    },
                    {
                        "title": "Star",
                        "slug": "(star)",
                        "code": "&#x2B50;"
                    },
                    {
                        "title": "Glowing star",
                        "slug": "(glowing-star)",
                        "code": "&#x1F31F;"
                    },
                    {
                        "title": "Sparkling stars",
                        "slug": "(sparkling-stars)",
                        "code": "&#x2728;"
                    },
                    {
                        "title": "Thunderbolt",
                        "slug": "(thunderbolt)",
                        "code": "&#x26A1;"
                    },
                    {
                        "title": "Fire",
                        "slug": "(fire)",
                        "code": "&#x1F525;"
                    },
                    {
                        "title": "Explosion",
                        "slug": "(explosion)",
                        "code": "&#x1F4A5;"
                    },
                    {
                        "title": "Comet",
                        "slug": "(comet)",
                        "code": "&#x2604;&#xFE0F;"
                    },
                    {
                        "title": "Smiling sun",
                        "slug": "(smiling-sun)",
                        "code": "&#x1F31E;"
                    },
                    {
                        "title": "Sun",
                        "slug": "(sun)",
                        "code": "&#x2600;&#xFE0F;"
                    },
                    {
                        "title": "Sun behind small cloud",
                        "slug": "(sun-behind-small-cloud)",
                        "code": "&#x1F324;&#xFE0F;"
                    },
                    {
                        "title": "Sun behind cloud",
                        "slug": "(sun-behind-cloud)",
                        "code": "&#x26C5;"
                    },
                    {
                        "title": "Sun behind large cloud",
                        "slug": "(sun-behind-large-cloud)",
                        "code": "&#x1F325;&#xFE0F;"
                    },
                    {
                        "title": "Sun behind rain cloud",
                        "slug": "(sun-behind-rain-cloud)",
                        "code": "&#x1F326;&#xFE0F;"
                    },
                    {
                        "title": "Cloud",
                        "slug": "(cloud)",
                        "code": "&#x2601;&#xFE0F;"
                    },
                    {
                        "title": "Cloud With Rain",
                        "slug": "(cloud-with-rain)",
                        "code": "&#x1F327;&#xFE0F;"
                    },
                    {
                        "title": "Lightning and rain",
                        "slug": "(lightning-and-rain)",
                        "code": "&#x26C8;&#xFE0F;"
                    },
                    {
                        "title": "Cloud with lightning",
                        "slug": "(cloud-with-lightning)",
                        "code": "&#x1F329;&#xFE0F;"
                    },
                    {
                        "title": "Snowing",
                        "slug": "(snowing)",
                        "code": "&#x1F328;&#xFE0F;"
                    },
                    {
                        "title": "Rainbow",
                        "slug": "(rainbow)",
                        "code": "&#x1F308;"
                    },
                    {
                        "title": "Drop",
                        "slug": "(drop)",
                        "code": "&#x1F4A7;"
                    },
                    {
                        "title": "Droplets",
                        "slug": "(droplets)",
                        "code": "&#x1F4A6;"
                    },
                    {
                        "title": "Umbrella",
                        "slug": "(umbrella)",
                        "code": "&#x2602;&#xFE0F;"
                    },
                    {
                        "title": "Umbrella with rain drops",
                        "slug": "(umbrella-with-rain-drops)",
                        "code": "&#x2614;"
                    },
                    {
                        "title": "wave",
                        "slug": "(wave)",
                        "code": "&#x1F30A;"
                    },
                    {
                        "title": "Fog",
                        "slug": "(fog)",
                        "code": "&#x1F32B;"
                    },
                    {
                        "title": "Tornado",
                        "slug": "(tornado)",
                        "code": "&#x1F32A;"
                    },
                    {
                        "title": "Wind",
                        "slug": "(wind)",
                        "code": "&#x1F4A8;"
                    },
                    {
                        "title": "Snowflake",
                        "slug": "(snowflake)",
                        "code": "&#x2744;"
                    },
                    {
                        "title": "Blowing Wind",
                        "slug": "(blowing-wind)",
                        "code": "&#x1F32C;"
                    },
                    {
                        "title": "Snowman",
                        "slug": "(snowman)",
                        "code": "&#x26C4;"
                    },
                    {
                        "title": "Snowman with snowflakes",
                        "slug": "(snowman-with-snowflakes)",
                        "code": "&#x2603;&#xFE0F;"
                    }
                ]
            },
            {
                "name": "Travel, Places, Buildings",
                "icon": "&#x1F697;",
                "slug": "TPB",
                "smilyList": [
                    {
                        "title": "Car",
                        "slug": "(car)",
                        "code": "&#x1F697;"
                    },
                    {
                        "title": "Taxi",
                        "slug": "(taxi)",
                        "code": "&#x1F695;"
                    },
                    {
                        "title": "Recreational vehicle",
                        "slug": "(recreational-vehicle)",
                        "code": "&#x1F699;"
                    },
                    {
                        "title": "Bus",
                        "slug": "(bus)",
                        "code": "&#x1F68C;"
                    },
                    {
                        "title": "Trolleybus",
                        "slug": "(trolleybus)",
                        "code": "&#x1F68E;"
                    },
                    {
                        "title": "Racing car",
                        "slug": "(racing-car)",
                        "code": "&#x1F3CE;"
                    },
                    {
                        "title": "Police car",
                        "slug": "(police-car)",
                        "code": "&#x1F693;"
                    },
                    {
                        "title": "Ambulance",
                        "slug": "(ambulance)",
                        "code": "&#x1F691;"
                    },
                    {
                        "title": "Fire engine",
                        "slug": "(fire-engine)",
                        "code": "&#x1F692;"
                    },
                    {
                        "title": "Minivan",
                        "slug": "(minivan)",
                        "code": "&#x1F690;"
                    },
                    {
                        "title": "Delivery Truck",
                        "slug": "(delivery-truck)",
                        "code": "&#x1F69A;"
                    },
                    {
                        "title": "Lorry",
                        "slug": "(lorry)",
                        "code": "&#x1F69B;"
                    },
                    {
                        "title": "Tractor",
                        "slug": "(tractor)",
                        "code": "&#x1F69C;"
                    },
                    {
                        "title": "Scooter",
                        "slug": "(scooter)",
                        "code": "&#x1F6F4;"
                    },
                    {
                        "title": "Bicycle",
                        "slug": "(bicycle)",
                        "code": "&#x1F6B2;"
                    },
                    {
                        "title": "Motorbike",
                        "slug": "(motorbike)",
                        "code": "&#x1F6F5;"
                    },
                    {
                        "title": "Racing motorcycle",
                        "slug": "(racing-motorcycle)",
                        "code": "&#x1F3CD;"
                    },
                    {
                        "title": "Front of car",
                        "slug": "(front-of-car)",
                        "code": "&#x1F698;"
                    },
                    {
                        "title": "Front of taxi",
                        "slug": "(front-of-taxi)",
                        "code": "&#x1F696;"
                    },
                    {
                        "title": "Front of bus",
                        "slug": "(front-of-bus)",
                        "code": "&#x1F68D;"
                    },
                    {
                        "title": "Front of police Car",
                        "slug": "(front-of-police-car)",
                        "code": "&#x1F694;"
                    },
                    {
                        "title": "Emergency light",
                        "slug": "(emergency-light)",
                        "code": "&#x1F6A8;"
                    },
                    {
                        "title": "Passenger seat",
                        "slug": "(passenger-seat)",
                        "code": "&#x1F4BA;"
                    },
                    {
                        "title": "Airplane",
                        "slug": "(airplane)",
                        "code": "&#x2708;"
                    },
                    {
                        "title": "Plane departure",
                        "slug": "(plane-departure)",
                        "code": "&#x1F6EB;"
                    },
                    {
                        "title": "Plane arrival",
                        "slug": "(plane-arrival)",
                        "code": "&#x1F6EC;"
                    },
                    {
                        "title": "Small plane",
                        "slug": "(small-plane)",
                        "code": "&#x1F6E9;"
                    },
                    {
                        "title": "Helicopter",
                        "slug": "(helicopter)",
                        "code": "&#x1F681;"
                    },
                    {
                        "title": "Rocket",
                        "slug": "(rocket)",
                        "code": "&#x1F680;"
                    },
                    {
                        "title": "Satellite",
                        "slug": "(satellite)",
                        "code": "&#x1F6F0;"
                    },
                    {
                        "title": "Cable car",
                        "slug": "(cable-car)",
                        "code": "&#x1F6A1;"
                    },
                    {
                        "title": "Cable car",
                        "slug": "(cable-car)",
                        "code": "&#x1F6A0;"
                    },
                    {
                        "title": "Suspension railway",
                        "slug": "(suspension-railway)",
                        "code": "&#x1F69F;"
                    },
                    {
                        "title": "Railway wagon",
                        "slug": "(railway-wagon)",
                        "code": "&#x1F683;"
                    },
                    {
                        "title": "Tram",
                        "slug": "(tram)",
                        "code": "&#x1F68B;"
                    },
                    {
                        "title": "Mountain railway",
                        "slug": "(mountain-railway)",
                        "code": "&#x1F69E;"
                    },
                    {
                        "title": "Monorail",
                        "slug": "(monorail)",
                        "code": "&#x1F69D;"
                    },
                    {
                        "title": "High-speed train",
                        "slug": "(high-speed-train)",
                        "code": "&#x1F684;"
                    },
                    {
                        "title": "Bullet train",
                        "slug": "(bullet-train)",
                        "code": "&#x1F685;"
                    },
                    {
                        "title": "Light rail",
                        "slug": "(light-rail)",
                        "code": "&#x1F688;"
                    },
                    {
                        "title": "Locomotive",
                        "slug": "(locomotive)",
                        "code": "&#x1F682;"
                    },
                    {
                        "title": "Train front",
                        "slug": "(train-front)",
                        "code": "&#x1F686;"
                    },
                    {
                        "title": "Electric train",
                        "slug": "(electric-train)",
                        "code": "&#x1F68A;"
                    },
                    {
                        "title": "Metro train",
                        "slug": "(metro-train)",
                        "code": "&#x1F687;"
                    },
                    {
                        "title": "Train station",
                        "slug": "(train-station)",
                        "code": "&#x1F689;"
                    },
                    {
                        "title": "Canoe",
                        "slug": "(canoe)",
                        "code": "&#x1F6F6;"
                    },
                    {
                        "title": "Sailboat",
                        "slug": "(sailboat)",
                        "code": "&#x26F5;"
                    },
                    {
                        "title": "Motorboat",
                        "slug": "(motorboat)",
                        "code": "&#x1F6E5;"
                    },
                    {
                        "title": "Speedboat",
                        "slug": "(speedboat)",
                        "code": "&#x1F6A4;"
                    },
                    {
                        "title": "Ship",
                        "slug": "(ship)",
                        "code": "&#x1F6A2;"
                    },
                    {
                        "title": "Ferry",
                        "slug": "(ferry)",
                        "code": "&#x26F4;"
                    },
                    {
                        "title": "Cruise ship",
                        "slug": "(cruise-ship)",
                        "code": "&#x1F6F3;"
                    },
                    {
                        "title": "Anchor",
                        "slug": "(anchor)",
                        "code": "&#x2693;"
                    },
                    {
                        "title": "Roadwork",
                        "slug": "(roadwork)",
                        "code": "&#x1F6A7;"
                    },
                    {
                        "title": "Fuel pump",
                        "slug": "(fuel-pump)",
                        "code": "&#x26FD;"
                    },
                    {
                        "title": "Bus stop",
                        "slug": "(bus-stop)",
                        "code": "&#x1F68F;"
                    },
                    {
                        "title": "Traffic light",
                        "slug": "(traffic-light)",
                        "code": "&#x1F6A6;"
                    },
                    {
                        "title": "Horizontal traffic light",
                        "slug": "(horizontal-traffic-light)",
                        "code": "&#x1F6A5;"
                    },
                    {
                        "title": "Highway",
                        "slug": "(highway)",
                        "code": "&#x1F6E3;"
                    },
                    {
                        "title": "Railway",
                        "slug": "(railway)",
                        "code": "&#x1F6E4;"
                    },
                    {
                        "title": "Construction crane",
                        "slug": "(construction-crane)",
                        "code": "&#x1F3D7;"
                    },
                    {
                        "title": "Factory",
                        "slug": "(factory)",
                        "code": "&#x1F3ED;"
                    },
                    {
                        "title": "House",
                        "slug": "(house)",
                        "code": "&#x1F3E0;"
                    },
                    {
                        "title": "House with garden",
                        "slug": "(house-with-garden)",
                        "code": "&#x1F3E1;"
                    },
                    {
                        "title": "Multiple houses",
                        "slug": "(multiple-houses)",
                        "code": "&#x1F3D8;"
                    },
                    {
                        "title": "Abandoned old house",
                        "slug": "(abandoned-old-house)",
                        "code": "&#x1F3DA;"
                    },
                    {
                        "title": "Office building",
                        "slug": "(office-building)",
                        "code": "&#x1F3E2;"
                    },
                    {
                        "title": "Department store",
                        "slug": "(department-store)",
                        "code": "&#x1F3EC;"
                    },
                    {
                        "title": "Post office",
                        "slug": "(post-office)",
                        "code": "&#x1F3E4;"
                    },
                    {
                        "title": "Japanese post office",
                        "slug": "(japanese-post-office)",
                        "code": "&#x1F3E3;"
                    },
                    {
                        "title": "Hospital",
                        "slug": "(hospital)",
                        "code": "&#x1F3E5;"
                    },
                    {
                        "title": "Bank",
                        "slug": "(bank)",
                        "code": "&#x1F3E6;"
                    },
                    {
                        "title": "Convenience store",
                        "slug": "(convenience-store)",
                        "code": "&#x1F3EA;"
                    },
                    {
                        "title": "School",
                        "slug": "(school)",
                        "code": "&#x1F3EB;"
                    },
                    {
                        "title": "Hotel",
                        "slug": "(hotel)",
                        "code": "&#x1F3E8;"
                    },
                    {
                        "title": "Love hotel",
                        "slug": "(love-hotel)",
                        "code": "&#x1F3E9;"
                    },
                    {
                        "title": "Classical building",
                        "slug": "(classical-building)",
                        "code": "&#x1F3DB;"
                    },
                    {
                        "title": "Castle",
                        "slug": "(castle)",
                        "code": "&#x1F3F0;"
                    },
                    {
                        "title": "Japanese castle",
                        "slug": "(japanese-castle)",
                        "code": "&#x1F3EF;"
                    },
                    {
                        "title": "Stadium",
                        "slug": "(stadium)",
                        "code": "&#x1F3DF;&#xFE0F;"
                    },
                    {
                        "title": "Church",
                        "slug": "(church)",
                        "code": "&#x26EA;"
                    },
                    {
                        "title": "Church wedding",
                        "slug": "(church-wedding)",
                        "code": "&#x1F492;"
                    },
                    {
                        "title": "Mosque",
                        "slug": "(mosque)",
                        "code": "&#x1F54C;"
                    },
                    {
                        "title": "Synagogue",
                        "slug": "(synagogue)",
                        "code": "&#x1F54D;"
                    },
                    {
                        "title": "Kaaba",
                        "slug": "(kaaba)",
                        "code": "&#x1F54B;"
                    },
                    {
                        "title": "Japanese shrine",
                        "slug": "(japanese-shrine)",
                        "code": "&#x26E9;"
                    },
                    {
                        "title": "Tokyo Tower",
                        "slug": "(tokyo-tower)",
                        "code": "&#x1F5FC;"
                    },
                    {
                        "title": "Moyai statue",
                        "slug": "(moyai-statue)",
                        "code": "&#x1F5FF;"
                    },
                    {
                        "title": "Statue of Liberty",
                        "slug": "(statue-of-liberty)",
                        "code": "&#x1F5FD;"
                    },
                    {
                        "title": "World map",
                        "slug": "(world-map)",
                        "code": "&#x1F5FA;"
                    },
                    {
                        "title": "Circus tent",
                        "slug": "(circus-tent)",
                        "code": "&#x1F3AA;"
                    },
                    {
                        "title": "Carousel horse",
                        "slug": "(carousel-horse)",
                        "code": "&#x1F3A0;"
                    },
                    {
                        "title": "Ferris wheel",
                        "slug": "(ferris-wheel)",
                        "code": "&#x1F3A1;"
                    },
                    {
                        "title": "Roller coaster",
                        "slug": "(roller-coaster)",
                        "code": "&#x1F3A2;"
                    },
                    {
                        "title": "Fountain",
                        "slug": "(fountain)",
                        "code": "&#x26F2;"
                    },
                    {
                        "title": "Beach umbrella",
                        "slug": "(beach-umbrella)",
                        "code": "&#x26F1;"
                    },
                    {
                        "title": "Beach",
                        "slug": "(beach)",
                        "code": "&#x1F3D6;"
                    },
                    {
                        "title": "Desert island",
                        "slug": "(desert-island)",
                        "code": "&#x1F3DD;"
                    },
                    {
                        "title": "Camping site",
                        "slug": "(camping-site)",
                        "code": "&#x1F3D5;"
                    },
                    {
                        "title": "Tent",
                        "slug": "(tent)",
                        "code": "&#x26FA;"
                    },
                    {
                        "title": "Japan islands",
                        "slug": "(japan-islands)",
                        "code": "&#x1F5FE;"
                    },
                    {
                        "title": "Mount Fuji",
                        "slug": "(mount-fuji)",
                        "code": "&#x26F0;"
                    },
                    {
                        "title": "Snow mountain",
                        "slug": "(snow-mountain)",
                        "code": "&#x1F3D4;"
                    },
                    {
                        "title": "Mountain",
                        "slug": "(mountain)",
                        "code": "&#x1F5FB;"
                    },
                    {
                        "title": "Volcano",
                        "slug": "(volcano)",
                        "code": "&#x1F30B;"
                    },
                    {
                        "title": "Nature park",
                        "slug": "(nature-park)",
                        "code": "&#x1F3DE;"
                    },
                    {
                        "title": "Desert",
                        "slug": "(desert)",
                        "code": "&#x1F3DC;"
                    },
                    {
                        "title": "Sea sunset/sunrise",
                        "slug": "(sea-sunset/sunrise)",
                        "code": "&#x1F305;"
                    },
                    {
                        "title": "Mountain sunset/sunrise",
                        "slug": "(mountain-sunset/sunrise)",
                        "code": "&#x1F304;"
                    },
                    {
                        "title": "Full moon view",
                        "slug": "(full-moon-view)",
                        "code": "&#x1F391;"
                    },
                    {
                        "title": "Shooting star",
                        "slug": "(shooting-star)",
                        "code": "&#x1F320;"
                    },
                    {
                        "title": "Sparkler",
                        "slug": "(sparkler)",
                        "code": "&#x1F387;"
                    },
                    {
                        "title": "Fireworks",
                        "slug": "(fireworks)",
                        "code": "&#x1F386;"
                    },
                    {
                        "title": "Cityscape",
                        "slug": "(cityscape)",
                        "code": "&#x1F3D9;"
                    },
                    {
                        "title": "City sunrise",
                        "slug": "(city-sunrise)",
                        "code": "&#x1F307;"
                    },
                    {
                        "title": "City sunset",
                        "slug": "(city-sunset)",
                        "code": "&#x1F306;"
                    },
                    {
                        "title": "City at night",
                        "slug": "(city-at-night)",
                        "code": "&#x1F303;"
                    },
                    {
                        "title": "Night Sky",
                        "slug": "(night-sky)",
                        "code": "&#x1F30C;"
                    },
                    {
                        "title": "Golden Gate bridge",
                        "slug": "(golden-gate-bridge)",
                        "code": "&#x1F309;"
                    },
                    {
                        "title": "Foggy Golden Gate bridge",
                        "slug": "(foggy-golden-gate-bridge)",
                        "code": "&#x1F301;"
                    }
                ]
            },
            {
                "name": "Objects",
                "icon": "&#x1F4F1;",
                "slug": "O",
                "smilyList": [
                    {
                        "title": "Smartphone",
                        "slug": "(smartphone)",
                        "code": "&#x1F4F1;"
                    },
                    {
                        "title": "Phone call",
                        "slug": "(phone-call)",
                        "code": "&#x1F4F2;"
                    },
                    {
                        "title": "Laptop",
                        "slug": "(laptop)",
                        "code": "&#x1F4BB;"
                    },
                    {
                        "title": "Desktop PC",
                        "slug": "(desktop-pc)",
                        "code": "&#x1F5A5;"
                    },
                    {
                        "title": "Keyboard",
                        "slug": "(keyboard)",
                        "code": "&#x2328;"
                    },
                    {
                        "title": "Printer",
                        "slug": "(printer)",
                        "code": "&#x1F5A8;"
                    },
                    {
                        "title": "Computer Mouse",
                        "slug": "(computer-mouse)",
                        "code": "&#x1F5B1;"
                    },
                    {
                        "title": "Trackball",
                        "slug": "(trackball)",
                        "code": "&#x1F5B2;"
                    },
                    {
                        "title": "Joystick",
                        "slug": "(joystick)",
                        "code": "&#x1F579;"
                    },
                    {
                        "title": "Gamepad",
                        "slug": "(gamepad)",
                        "code": "&#x1F3AE;"
                    },
                    {
                        "title": "Minidisc",
                        "slug": "(minidisc)",
                        "code": "&#x1F4BD;"
                    },
                    {
                        "title": "Floppy Disk",
                        "slug": "(floppy-disk)",
                        "code": "&#x1F4BE;"
                    },
                    {
                        "title": "CD",
                        "slug": "(cd)",
                        "code": "&#x1F4BF;"
                    },
                    {
                        "title": "DVD",
                        "slug": "(dvd)",
                        "code": "&#x1F4C0;"
                    },
                    {
                        "title": "VHS cassete",
                        "slug": "(vhs-cassete)",
                        "code": "&#x1F4FC;"
                    },
                    {
                        "title": "Camera",
                        "slug": "(camera)",
                        "code": "&#x1F4F7;"
                    },
                    {
                        "title": "Camera with flash",
                        "slug": "(camera-with-flash)",
                        "code": "&#x1F4F8;"
                    },
                    {
                        "title": "Video camera",
                        "slug": "(video-camera)",
                        "code": "&#x1F4F9;"
                    },
                    {
                        "title": "Movie camera",
                        "slug": "(movie-camera)",
                        "code": "&#x1F3A5;"
                    },
                    {
                        "title": "Film projector",
                        "slug": "(film-projector)",
                        "code": "&#x1F4FD;"
                    },
                    {
                        "title": "Film frames",
                        "slug": "(film-frames)",
                        "code": "&#x1F39E;"
                    },
                    {
                        "title": "Clapper board",
                        "slug": "(clapper-board)",
                        "code": "&#x1F3AC;"
                    },
                    {
                        "title": "Telephone receiver",
                        "slug": "(telephone-receiver)",
                        "code": "&#x1F4DE;"
                    },
                    {
                        "title": "Telephone",
                        "slug": "(telephone)",
                        "code": "&#x260E;"
                    },
                    {
                        "title": "Pager",
                        "slug": "(pager)",
                        "code": "&#x1F4DF;"
                    },
                    {
                        "title": "Fax Machine",
                        "slug": "(fax-machine)",
                        "code": "&#x1F4E0;"
                    },
                    {
                        "title": "Television",
                        "slug": "(television)",
                        "code": "&#x1F4FA;"
                    },
                    {
                        "title": "Radio",
                        "slug": "(radio)",
                        "code": "&#x1F4FB;"
                    },
                    {
                        "title": "Studio microphone",
                        "slug": "(studio-microphone)",
                        "code": "&#x1F399;"
                    },
                    {
                        "title": "Level slider",
                        "slug": "(level-slider)",
                        "code": "&#x1F39A;"
                    },
                    {
                        "title": "Control knobs",
                        "slug": "(control-knobs)",
                        "code": "&#x1F39B;"
                    },
                    {
                        "title": "Satellite antenna",
                        "slug": "(satellite-antenna)",
                        "code": "&#x1F4E1;"
                    },
                    {
                        "title": "Loudspeaker",
                        "slug": "(loudspeaker)",
                        "code": "&#x1F4E2;"
                    },
                    {
                        "title": "Cheering megaphone",
                        "slug": "(cheering-megaphone)",
                        "code": "&#x1F4E3;"
                    },
                    {
                        "title": "Bell",
                        "slug": "(bell)",
                        "code": "&#x1F514;"
                    },
                    {
                        "title": "Light bulb",
                        "slug": "(light-bulb)",
                        "code": "&#x1F4A1;"
                    },
                    {
                        "title": "Candle",
                        "slug": "(candle)",
                        "code": "&#x1F56F;"
                    },
                    {
                        "title": "Flashlight",
                        "slug": "(flashlight)",
                        "code": "&#x1F526;"
                    },
                    {
                        "title": "Battery",
                        "slug": "(battery)",
                        "code": "&#x1F50B;"
                    },
                    {
                        "title": "Electric plug",
                        "slug": "(electric-plug)",
                        "code": "&#x1F50C;"
                    },
                    {
                        "title": "Wrist watch",
                        "slug": "(wrist-watch)",
                        "code": "&#x231A;"
                    },
                    {
                        "title": "Stopwatch",
                        "slug": "(stopwatch)",
                        "code": "&#x23F1;"
                    },
                    {
                        "title": "Timer clock",
                        "slug": "(timer-clock)",
                        "code": "&#x23F2;"
                    },
                    {
                        "title": "Alarm clock",
                        "slug": "(alarm-clock)",
                        "code": "&#x23F0;"
                    },
                    {
                        "title": "Mantelpiece clock",
                        "slug": "(mantelpiece-clock)",
                        "code": "&#x1F570;"
                    },
                    {
                        "title": "Hourglass",
                        "slug": "(hourglass)",
                        "code": "&#x231B;"
                    },
                    {
                        "title": "Hourglass with flowing sand",
                        "slug": "(hourglass-with-flowing-sand)",
                        "code": "&#x23F3;"
                    },
                    {
                        "title": "Crystal ball",
                        "slug": "(crystal-ball)",
                        "code": "&#x1F52E;"
                    },
                    {
                        "title": "Gem stone",
                        "slug": "(gem-stone)",
                        "code": "&#x1F48E;"
                    },
                    {
                        "title": "Game die",
                        "slug": "(game-die)",
                        "code": "&#x1F3B2;"
                    },
                    {
                        "title": "Slots",
                        "slug": "(slots)",
                        "code": "&#x1F3B0;"
                    },
                    {
                        "title": "Money with wings",
                        "slug": "(money-with-wings)",
                        "code": "&#x1F4B8;"
                    },
                    {
                        "title": "Dollar banknote",
                        "slug": "(dollar-banknote)",
                        "code": "&#x1F4B5;"
                    },
                    {
                        "title": "Yen banknote",
                        "slug": "(yen-banknote)",
                        "code": "&#x1F4B4;"
                    },
                    {
                        "title": "Euro banknote",
                        "slug": "(euro-banknote)",
                        "code": "&#x1F4B6;"
                    },
                    {
                        "title": "Pound banknote",
                        "slug": "(pound-banknote)",
                        "code": "&#x1F4B7;"
                    },
                    {
                        "title": "Money bag",
                        "slug": "(money-bag)",
                        "code": "&#x1F4B0;"
                    },
                    {
                        "title": "Credit card",
                        "slug": "(credit-card)",
                        "code": "&#x1F4B3;"
                    },
                    {
                        "title": "Dollar sign",
                        "slug": "(dollar-sign)",
                        "code": "&#x1F4B2;"
                    },
                    {
                        "title": "Currency exchange",
                        "slug": "(currency-exchange)",
                        "code": "&#x1F4B1;"
                    },
                    {
                        "title": "Balance scales",
                        "slug": "(balance-scales)",
                        "code": "&#x2696;"
                    },
                    {
                        "title": "Pistol",
                        "slug": "(pistol)",
                        "code": "&#x1F52B;"
                    },
                    {
                        "title": "Bomb",
                        "slug": "(bomb)",
                        "code": "&#x1F4A3;"
                    },
                    {
                        "title": "Knife",
                        "slug": "(knife)",
                        "code": "&#x1F52A;"
                    },
                    {
                        "title": "Dagger",
                        "slug": "(dagger)",
                        "code": "&#x1F5E1;"
                    },
                    {
                        "title": "Crossed swords",
                        "slug": "(crossed-swords)",
                        "code": "&#x2694;"
                    },
                    {
                        "title": "Shield emoji",
                        "slug": "(shield-emoji)",
                        "code": "&#x1F6E1;"
                    },
                    {
                        "title": "Cigarette",
                        "slug": "(cigarette)",
                        "code": "&#x1F6AC;"
                    },
                    {
                        "title": "Coffin",
                        "slug": "(coffin)",
                        "code": "&#x26B0;"
                    },
                    {
                        "title": "Urn",
                        "slug": "(urn)",
                        "code": "&#x26B1;"
                    },
                    {
                        "title": "Clamp",
                        "slug": "(clamp)",
                        "code": "&#x1F5DC;&#xFE0F;"
                    },
                    {
                        "title": "Wrench",
                        "slug": "(wrench)",
                        "code": "&#x1F527;"
                    },
                    {
                        "title": "Hammer",
                        "slug": "(hammer)",
                        "code": "&#x1F528;"
                    },
                    {
                        "title": "Hammer and pick",
                        "slug": "(hammer-and-pick)",
                        "code": "&#x2692;"
                    },
                    {
                        "title": "Hammer and wrench",
                        "slug": "(hammer-and-wrench)",
                        "code": "&#x1F6E0;"
                    },
                    {
                        "title": "Pick",
                        "slug": "(pick)",
                        "code": "&#x26CF;"
                    },
                    {
                        "title": "Bolt screw",
                        "slug": "(bolt-screw)",
                        "code": "&#x1F529;"
                    },
                    {
                        "title": "Gear",
                        "slug": "(gear)",
                        "code": "&#x2699;"
                    },
                    {
                        "title": "Chains",
                        "slug": "(chains)",
                        "code": "&#x26D3;"
                    },
                    {
                        "title": "Barber pole",
                        "slug": "(barber-pole)",
                        "code": "&#x1F488;"
                    },
                    {
                        "title": "Thermometer",
                        "slug": "(thermometer)",
                        "code": "&#x1F321;"
                    },
                    {
                        "title": "Pill",
                        "slug": "(pill)",
                        "code": "&#x1F48A;"
                    },
                    {
                        "title": "Syringe",
                        "slug": "(syringe)",
                        "code": "&#x1F489;"
                    },
                    {
                        "title": "Alembic",
                        "slug": "(alembic)",
                        "code": "&#x2697;"
                    },
                    {
                        "title": "Microscope",
                        "slug": "(microscope)",
                        "code": "&#x1F52C;"
                    },
                    {
                        "title": "Telescope",
                        "slug": "(telescope)",
                        "code": "&#x1F52D;"
                    },
                    {
                        "title": "Shower",
                        "slug": "(shower)",
                        "code": "&#x1F6BF;"
                    },
                    {
                        "title": "Bathtub",
                        "slug": "(bathtub)",
                        "code": "&#x1F6C1;"
                    },
                    {
                        "title": "Toilet",
                        "slug": "(toilet)",
                        "code": "&#x1F6BD;"
                    },
                    {
                        "title": "Bellhop Bell",
                        "slug": "(bellhop-bell)",
                        "code": "&#x1F6CE;"
                    },
                    {
                        "title": "Key",
                        "slug": "(key)",
                        "code": "&#x1F511;"
                    },
                    {
                        "title": "Old key",
                        "slug": "(old-key)",
                        "code": "&#x1F5DD;"
                    },
                    {
                        "title": "Door",
                        "slug": "(door)",
                        "code": "&#x1F6AA;"
                    },
                    {
                        "title": "Couch",
                        "slug": "(couch)",
                        "code": "&#x1F6CB;"
                    },
                    {
                        "title": "Bed",
                        "slug": "(bed)",
                        "code": "&#x1F6CF;"
                    },
                    {
                        "title": "Framed painting",
                        "slug": "(framed-painting)",
                        "code": "&#x1F5BC;"
                    },
                    {
                        "title": "Amphora vase",
                        "slug": "(amphora-vase)",
                        "code": "&#x1F3FA;"
                    },
                    {
                        "title": "Trash can",
                        "slug": "(trash-can)",
                        "code": "&#x1F5D1;"
                    },
                    {
                        "title": "Oil drum",
                        "slug": "(oil-drum)",
                        "code": "&#x1F6E2;"
                    },
                    {
                        "title": "Hole in the ground",
                        "slug": "(hole-in-the-ground)",
                        "code": "&#x1F573;"
                    },
                    {
                        "title": "Red paper lantern",
                        "slug": "(red-paper-lantern)",
                        "code": "&#x1F3EE;"
                    },
                    {
                        "title": "Carp Streamer",
                        "slug": "(carp-streamer)",
                        "code": "&#x1F38F;"
                    },
                    {
                        "title": "Japanese dolls",
                        "slug": "(japanese-dolls)",
                        "code": "&#x1F38E;"
                    },
                    {
                        "title": "Wind Chime",
                        "slug": "(wind-chime)",
                        "code": "&#x1F390;"
                    },
                    {
                        "title": "Ticket",
                        "slug": "(ticket)",
                        "code": "&#x1F3AB;"
                    },
                    {
                        "title": "Admission ticket",
                        "slug": "(admission-ticket)",
                        "code": "&#x1F39F;&#xFE0F;"
                    },
                    {
                        "title": "Bow",
                        "slug": "(bow)",
                        "code": "&#x1F380;"
                    },
                    {
                        "title": "Awareness ribbon",
                        "slug": "(awareness-ribbon)",
                        "code": "&#x1F397;&#xFE0F;"
                    },
                    {
                        "title": "Postal horn",
                        "slug": "(postal-horn)",
                        "code": "&#x1F4EF;"
                    },
                    {
                        "title": "Envelope",
                        "slug": "(envelope)",
                        "code": "&#x2709;"
                    },
                    {
                        "title": "Envelope with arrow",
                        "slug": "(envelope-with-arrow)",
                        "code": "&#x1F4E9;"
                    },
                    {
                        "title": "Incoming envelope",
                        "slug": "(incoming-envelope)",
                        "code": "&#x1F4E8;"
                    },
                    {
                        "title": "E-mail",
                        "slug": "(e-mail)",
                        "code": "&#x1F4E7;"
                    },
                    {
                        "title": "Package",
                        "slug": "(package)",
                        "code": "&#x1F4E6;"
                    },
                    {
                        "title": "Closed mailbox with raised flag",
                        "slug": "(closed-mailbox-with-raised-flag)",
                        "code": "&#x1F4EA;"
                    },
                    {
                        "title": "Closed mailbox with lowered flag",
                        "slug": "(closed-mailbox-with-lowered-flag)",
                        "code": "&#x1F4EB;"
                    },
                    {
                        "title": "Open mailbox with raised flag",
                        "slug": "(open-mailbox-with-raised-flag)",
                        "code": "&#x1F4EC;"
                    },
                    {
                        "title": "Open mailbox with lowered flag",
                        "slug": "(open-mailbox-with-lowered-flag)",
                        "code": "&#x1F4ED;"
                    },
                    {
                        "title": "Postbox",
                        "slug": "(postbox)",
                        "code": "&#x1F4EE;"
                    },
                    {
                        "title": "Inbox",
                        "slug": "(inbox)",
                        "code": "&#x1F4E5;"
                    },
                    {
                        "title": "Outbox",
                        "slug": "(outbox)",
                        "code": "&#x1F4E4;"
                    },
                    {
                        "title": "Scroll",
                        "slug": "(scroll)",
                        "code": "&#x1F4DC;"
                    },
                    {
                        "title": "Curled paper",
                        "slug": "(curled-paper)",
                        "code": "&#x1F4C3;"
                    },
                    {
                        "title": "Paper page",
                        "slug": "(paper-page)",
                        "code": "&#x1F4C4;"
                    },
                    {
                        "title": "Bookmark tabs",
                        "slug": "(bookmark-tabs)",
                        "code": "&#x1F4D1;"
                    },
                    {
                        "title": "Bar chart",
                        "slug": "(bar-chart)",
                        "code": "&#x1F4CA;"
                    },
                    {
                        "title": "Chart Increasing",
                        "slug": "(chart-increasing)",
                        "code": "&#x1F4C8;"
                    },
                    {
                        "title": "Chart Increasing",
                        "slug": "(chart-increasing)",
                        "code": "&#x1F4C9;"
                    },
                    {
                        "title": "Notepad",
                        "slug": "(notepad)",
                        "code": "&#x1F5D2;"
                    },
                    {
                        "title": "Calendar",
                        "slug": "(calendar)",
                        "code": "&#x1F4C5;"
                    },
                    {
                        "title": "Tear-Off Calendar",
                        "slug": "(tear-off-calendar)",
                        "code": "&#x1F4C6;"
                    },
                    {
                        "title": "Spiral Calendar",
                        "slug": "(spiral-calendar)",
                        "code": "&#x1F5D3;"
                    },
                    {
                        "title": "Card index",
                        "slug": "(card-index)",
                        "code": "&#x1F4C7;"
                    },
                    {
                        "title": "Files",
                        "slug": "(files)",
                        "code": "&#x1F5C3;"
                    },
                    {
                        "title": "Ballot box",
                        "slug": "(ballot-box)",
                        "code": "&#x1F5F3;"
                    },
                    {
                        "title": "File Cabinet",
                        "slug": "(file-cabinet)",
                        "code": "&#x1F5C4;"
                    },
                    {
                        "title": "Clipboard",
                        "slug": "(clipboard)",
                        "code": "&#x1F4CB;"
                    },
                    {
                        "title": "File folder",
                        "slug": "(file-folder)",
                        "code": "&#x1F4C1;"
                    },
                    {
                        "title": "Open file folder",
                        "slug": "(open-file-folder)",
                        "code": "&#x1F4C2;"
                    },
                    {
                        "title": "Card index dividers",
                        "slug": "(card-index-dividers)",
                        "code": "&#x1F5C2;"
                    },
                    {
                        "title": "Notebook",
                        "slug": "(notebook)",
                        "code": "&#x1F4D3;"
                    },
                    {
                        "title": "Notebook with decorative cover",
                        "slug": "(notebook-with-decorative-cover)",
                        "code": "&#x1F4D4;"
                    },
                    {
                        "title": "Yellow book",
                        "slug": "(yellow-book)",
                        "code": "&#x1F4D2;"
                    },
                    {
                        "title": "Brown book",
                        "slug": "(brown-book)",
                        "code": "&#x1F4D5;"
                    },
                    {
                        "title": "Green book",
                        "slug": "(green-book)",
                        "code": "&#x1F4D7;"
                    },
                    {
                        "title": "Blue book",
                        "slug": "(blue-book)",
                        "code": "&#x1F4D8;"
                    },
                    {
                        "title": "Orange book",
                        "slug": "(orange-book)",
                        "code": "&#x1F4D9;"
                    },
                    {
                        "title": "Stack of books",
                        "slug": "(stack-of-books)",
                        "code": "&#x1F4DA;"
                    },
                    {
                        "title": "Open book",
                        "slug": "(open-book)",
                        "code": "&#x1F4D6;"
                    },
                    {
                        "title": "Rolled-Up Newspaper",
                        "slug": "(rolled-up-newspaper)",
                        "code": "&#x1F5DE;"
                    },
                    {
                        "title": "Newspaper",
                        "slug": "(newspaper)",
                        "code": "&#x1F4F0;"
                    },
                    {
                        "title": "Memo",
                        "slug": "(memo)",
                        "code": "&#x1F4DD;"
                    },
                    {
                        "title": "Pencil",
                        "slug": "(pencil)",
                        "code": "&#x270F;"
                    },
                    {
                        "title": "Pen",
                        "slug": "(pen)",
                        "code": "&#x1F58A;"
                    },
                    {
                        "title": "Crayon",
                        "slug": "(crayon)",
                        "code": "&#x1F58D;"
                    },
                    {
                        "title": "Paintbrush",
                        "slug": "(paintbrush)",
                        "code": "&#x1F58C;"
                    },
                    {
                        "title": "Fountain pen",
                        "slug": "(fountain-pen)",
                        "code": "&#x1F58B;"
                    },
                    {
                        "title": "Pen nib",
                        "slug": "(pen-nib)",
                        "code": "&#x2712;"
                    },
                    {
                        "title": "Pushpin",
                        "slug": "(pushpin)",
                        "code": "&#x1F4CC;"
                    },
                    {
                        "title": "Pin",
                        "slug": "(pin)",
                        "code": "&#x1F4CD;"
                    },
                    {
                        "title": "Paperclip",
                        "slug": "(paperclip)",
                        "code": "&#x1F4CE;"
                    },
                    {
                        "title": "Paperclips",
                        "slug": "(paperclips)",
                        "code": "&#x1F587;"
                    },
                    {
                        "title": "Bookmark",
                        "slug": "(bookmark)",
                        "code": "&#x1F516;"
                    },
                    {
                        "title": "Label tag",
                        "slug": "(label-tag)",
                        "code": "&#x1F3F7;"
                    },
                    {
                        "title": "Link",
                        "slug": "(link)",
                        "code": "&#x1F517;"
                    },
                    {
                        "title": "Magnifying glass",
                        "slug": "(magnifying-glass)",
                        "code": "&#x1F50D;"
                    },
                    {
                        "title": "Magnifying glass",
                        "slug": "(magnifying-glass)",
                        "code": "&#x1F50E;"
                    },
                    {
                        "title": "Triangular ruler",
                        "slug": "(triangular-ruler)",
                        "code": "&#x1F4D0;"
                    },
                    {
                        "title": "Straight ruler",
                        "slug": "(straight-ruler)",
                        "code": "&#x1F4CF;"
                    },
                    {
                        "title": "Scissors",
                        "slug": "(scissors)",
                        "code": "&#x2702;"
                    },
                    {
                        "title": "Closed lock",
                        "slug": "(closed-lock)",
                        "code": "&#x1F512;"
                    },
                    {
                        "title": "Open lock",
                        "slug": "(open-lock)",
                        "code": "&#x1F513;"
                    },
                    {
                        "title": "Lock and pen",
                        "slug": "(lock-and-pen)",
                        "code": "&#x1F50F;"
                    },
                    {
                        "title": "Lock and key",
                        "slug": "(lock-and-key)",
                        "code": "&#x1F510;"
                    }
                ]
            },
            {
                "name": "Symbols",
                "icon": "&#x2757;",
                "slug": "S",
                "smilyList": [
                    {
                        "title": "Red exclamation mark",
                        "slug": "(red-exclamation-mark)",
                        "code": "&#x2757;"
                    },
                    {
                        "title": "White exclamation mark",
                        "slug": "(white-exclamation-mark)",
                        "code": "&#x2755;"
                    },
                    {
                        "title": "Red question mark",
                        "slug": "(red-question-mark)",
                        "code": "&#x2753;"
                    },
                    {
                        "title": "White question mark",
                        "slug": "(white-question-mark)",
                        "code": "&#x2754;"
                    },
                    {
                        "title": "Double exclamation",
                        "slug": "(double-exclamation)",
                        "code": "&#x203C;&#xFE0F;"
                    },
                    {
                        "title": "Exclamation question mark",
                        "slug": "(exclamation-question-mark)",
                        "code": "&#x2049;&#xFE0F;"
                    },
                    {
                        "title": "White check mark",
                        "slug": "(white-check-mark)",
                        "code": "&#x2705;"
                    },
                    {
                        "title": "Cross mark",
                        "slug": "(cross-mark)",
                        "code": "&#x274C;"
                    },
                    {
                        "title": "Circle",
                        "slug": "(circle)",
                        "code": "&#x2B55;"
                    },
                    {
                        "title": "Japanese anger symbol",
                        "slug": "(japanese-anger-symbol)",
                        "code": "&#x1F4A2;"
                    },
                    {
                        "title": "Prohibited",
                        "slug": "(prohibited)",
                        "code": "&#x1F6AB;"
                    },
                    {
                        "title": "No one under eighteen",
                        "slug": "(no-one-under-eighteen)",
                        "code": "&#x1F51E;"
                    },
                    {
                        "title": "No mobile phones",
                        "slug": "(no-mobile-phones)",
                        "code": "&#x1F4F5;"
                    },
                    {
                        "title": "Muted volume",
                        "slug": "(muted-volume)",
                        "code": "&#x1F507;"
                    },
                    {
                        "title": "Ringer disabled",
                        "slug": "(ringer-disabled)",
                        "code": "&#x1F515;"
                    },
                    {
                        "title": "No smoking",
                        "slug": "(no-smoking)",
                        "code": "&#x1F6AD;"
                    },
                    {
                        "title": "No bicycles",
                        "slug": "(no-bicycles)",
                        "code": "&#x1F6B3;"
                    },
                    {
                        "title": "Non-potable water",
                        "slug": "(non-potable-water)",
                        "code": "&#x1F6B1;"
                    },
                    {
                        "title": "No pedestrians",
                        "slug": "(no-pedestrians)",
                        "code": "&#x1F6B7;"
                    },
                    {
                        "title": "No littering",
                        "slug": "(no-littering)",
                        "code": "&#x1F6AF;"
                    },
                    {
                        "title": "Stop sign",
                        "slug": "(stop-sign)",
                        "code": "&#x1F6D1;"
                    },
                    {
                        "title": "No entry",
                        "slug": "(no-entry)",
                        "code": "&#x26D4;"
                    },
                    {
                        "title": "Children crossing",
                        "slug": "(children-crossing)",
                        "code": "&#x1F6B8;"
                    },
                    {
                        "title": "Warning sign",
                        "slug": "(warning-sign)",
                        "code": "&#x26A0;&#xFE0F;"
                    },
                    {
                        "title": "Radioactive sign",
                        "slug": "(radioactive-sign)",
                        "code": "&#x2622;&#xFE0F;"
                    },
                    {
                        "title": "Biohazard sign",
                        "slug": "(biohazard-sign)",
                        "code": "&#x2623;&#xFE0F;"
                    },
                    {
                        "title": "Poisoned",
                        "slug": "(poisoned)",
                        "code": "&#x2620;&#xFE0F;"
                    },
                    {
                        "title": "Cross mark button",
                        "slug": "(cross-mark-button)",
                        "code": "&#x274E;"
                    },
                    {
                        "title": "Recycling symbol",
                        "slug": "(recycling-symbol)",
                        "code": "&#x267B;&#xFE0F;"
                    },
                    {
                        "title": "Yin Yang",
                        "slug": "(yin-yang)",
                        "code": "&#x262F;&#xFE0F;"
                    },
                    {
                        "title": "One-hundred",
                        "slug": "(one-hundred)",
                        "code": "&#x1F4AF;"
                    },
                    {
                        "title": "Zzz",
                        "slug": "(zzz)",
                        "code": "&#x1F4A4;"
                    },
                    {
                        "title": "Bright",
                        "slug": "(bright)",
                        "code": "&#x1F506;"
                    },
                    {
                        "title": "Dim",
                        "slug": "(dim)",
                        "code": "&#x1F505;"
                    },
                    {
                        "title": "Cyclone",
                        "slug": "(cyclone)",
                        "code": "&#x1F300;"
                    },
                    {
                        "title": "Steam",
                        "slug": "(steam)",
                        "code": "&#x2668;&#xFE0F;"
                    },
                    {
                        "title": "Eight-pointed star",
                        "slug": "(eight-pointed-star)",
                        "code": "&#x2734;&#xFE0F;"
                    },
                    {
                        "title": "Eight-spoked asterisk",
                        "slug": "(eight-spoked-asterisk)",
                        "code": "&#x2733;&#xFE0F;"
                    },
                    {
                        "title": "Globe with meridians",
                        "slug": "(globe-with-meridians)",
                        "code": "&#x1F310;"
                    },
                    {
                        "title": "Speaker",
                        "slug": "(speaker)",
                        "code": "&#x1F508;"
                    },
                    {
                        "title": "Menorah",
                        "slug": "(menorah)",
                        "code": "&#x1F54E;"
                    },
                    {
                        "title": "Fleur-De-Lis",
                        "slug": "(fleur-de-lis)",
                        "code": "&#x269C;&#xFE0F;"
                    },
                    {
                        "title": "Trident",
                        "slug": "(trident)",
                        "code": "&#x1F531;"
                    },
                    {
                        "title": "Part alternation mark",
                        "slug": "(part-alternation-mark)",
                        "code": "&#x303D;&#xFE0F;"
                    },
                    {
                        "title": "Wavy dash",
                        "slug": "(wavy-dash)",
                        "code": "&#x3030;&#xFE0F;"
                    },
                    {
                        "title": "End",
                        "slug": "(end)",
                        "code": "&#x1F51A;"
                    },
                    {
                        "title": "Back",
                        "slug": "(back)",
                        "code": "&#x1F519;"
                    },
                    {
                        "title": "On!",
                        "slug": "(on!)",
                        "code": "&#x1F51B;"
                    },
                    {
                        "title": "Top",
                        "slug": "(top)",
                        "code": "&#x1F51D;"
                    },
                    {
                        "title": "Soon",
                        "slug": "(soon)",
                        "code": "&#x1F51C;"
                    },
                    {
                        "title": "Star of David",
                        "slug": "(star-of-david)",
                        "code": "&#x2721;&#xFE0F;"
                    },
                    {
                        "title": "Latin cross",
                        "slug": "(latin-cross)",
                        "code": "&#x271D;&#xFE0F;"
                    },
                    {
                        "title": "Orthodox cross",
                        "slug": "(orthodox-cross)",
                        "code": "&#x2626;&#xFE0F;"
                    },
                    {
                        "title": "Star and Crescent",
                        "slug": "(star-and-crescent)",
                        "code": "&#x262A;&#xFE0F;"
                    },
                    {
                        "title": "Om Hindu sign",
                        "slug": "(om-hindu-sign)",
                        "code": "&#x1F549;&#xFE0F;"
                    },
                    {
                        "title": "Wheel of Dharma",
                        "slug": "(wheel-of-dharma)",
                        "code": "&#x2638;&#xFE0F;"
                    },
                    {
                        "title": "Place of Worship",
                        "slug": "(place-of-worship)",
                        "code": "&#x1F6D0;"
                    },
                    {
                        "title": "Peace Symbol",
                        "slug": "(peace-symbol)",
                        "code": "&#x262E;&#xFE0F;"
                    },
                    {
                        "title": "Atom symbol",
                        "slug": "(atom-symbol)",
                        "code": "&#x269B;&#xFE0F;"
                    },
                    {
                        "title": "Sparkle",
                        "slug": "(sparkle)",
                        "code": "&#x2747;&#xFE0F;"
                    },
                    {
                        "title": "Female symbol",
                        "slug": "(female-symbol)",
                        "code": "&#x2640;&#xFE0F;"
                    },
                    {
                        "title": "Male symbol",
                        "slug": "(male-symbol)",
                        "code": "&#x2642;&#xFE0F;"
                    },
                    {
                        "title": "Heavy Check Mark",
                        "slug": "(heavy-check-mark)",
                        "code": "&#x2714;&#xFE0F;"
                    },
                    {
                        "title": "Multiplication sign",
                        "slug": "(multiplication-sign)",
                        "code": "&#x2716;&#xFE0F;"
                    },
                    {
                        "title": "Plus sign",
                        "slug": "(plus-sign)",
                        "code": "&#x2795;"
                    },
                    {
                        "title": "Minus sign",
                        "slug": "(minus-sign)",
                        "code": "&#x2796;"
                    },
                    {
                        "title": "Division sign",
                        "slug": "(division-sign)",
                        "code": "&#x2797;"
                    },
                    {
                        "title": "Copyright",
                        "slug": "(copyright)",
                        "code": "&#xA9;&#xFE0F;"
                    },
                    {
                        "title": "Registered trademark",
                        "slug": "(registered-trademark)",
                        "code": "&#xAE;&#xFE0F;"
                    },
                    {
                        "title": "Trademark",
                        "slug": "(trademark)",
                        "code": "&#x2122;&#xFE0F;"
                    },
                    {
                        "title": "Checkbox",
                        "slug": "(checkbox)",
                        "code": "&#x2611;&#xFE0F;"
                    },
                    {
                        "title": "Potable water symbol",
                        "slug": "(potable-water-symbol)",
                        "code": "&#x1F6B0;"
                    },
                    {
                        "title": "Baggage claim",
                        "slug": "(baggage-claim)",
                        "code": "&#x1F6C4;"
                    },
                    {
                        "title": "Left luggage",
                        "slug": "(left-luggage)",
                        "code": "&#x1F6C5;"
                    },
                    {
                        "title": "Passport control",
                        "slug": "(passport-control)",
                        "code": "&#x1F6C2;"
                    },
                    {
                        "title": "Customs",
                        "slug": "(customs)",
                        "code": "&#x1F6C3;"
                    },
                    {
                        "title": "Metro",
                        "slug": "(metro)",
                        "code": "&#x24C2;&#xFE0F;"
                    },
                    {
                        "title": "Parking sign",
                        "slug": "(parking-sign)",
                        "code": "&#x1F17F;&#xFE0F;"
                    },
                    {
                        "title": "Water closet",
                        "slug": "(water-closet)",
                        "code": "&#x1F6BE;"
                    },
                    {
                        "title": "ATM sign",
                        "slug": "(atm-sign)",
                        "code": "&#x1F3E7;"
                    },
                    {
                        "title": "Litter in its place",
                        "slug": "(litter-in-its-place)",
                        "code": "&#x1F6AE;"
                    },
                    {
                        "title": "Wheelchair access",
                        "slug": "(wheelchair-access)",
                        "code": "&#x267F;"
                    },
                    {
                        "title": "Men’s room",
                        "slug": "(men’s-room)",
                        "code": "&#x1F6B9;"
                    },
                    {
                        "title": "Women’s room",
                        "slug": "(women’s-room)",
                        "code": "&#x1F6BA;"
                    },
                    {
                        "title": "Restroom",
                        "slug": "(restroom)",
                        "code": "&#x1F6BB;"
                    },
                    {
                        "title": "Baby change station",
                        "slug": "(baby-change-station)",
                        "code": "&#x1F6BC;"
                    },
                    {
                        "title": "VS",
                        "slug": "(vs)",
                        "code": "&#x1F19A;"
                    },
                    {
                        "title": "Mobile Phone Off",
                        "slug": "(mobile-phone-off)",
                        "code": "&#x1F4F4;"
                    },
                    {
                        "title": "Vibration Mode",
                        "slug": "(vibration-mode)",
                        "code": "&#x1F4F3;"
                    },
                    {
                        "title": "SOS emergency",
                        "slug": "(sos-emergency)",
                        "code": "&#x1F198;"
                    },
                    {
                        "title": "OK",
                        "slug": "(ok)",
                        "code": "&#x1F197;"
                    },
                    {
                        "title": "UP!",
                        "slug": "(up!)",
                        "code": "&#x1F199;"
                    },
                    {
                        "title": "Cool",
                        "slug": "(cool)",
                        "code": "&#x1F192;"
                    },
                    {
                        "title": "NG - No good",
                        "slug": "(ng---no-good)",
                        "code": "&#x1F196;"
                    },
                    {
                        "title": "NEW",
                        "slug": "(new)",
                        "code": "&#x1F195;"
                    },
                    {
                        "title": "FREE",
                        "slug": "(free)",
                        "code": "&#x1F193;"
                    },
                    {
                        "title": "ABC",
                        "slug": "(abc)",
                        "code": "&#x1F520;"
                    },
                    {
                        "title": "Abc",
                        "slug": "(abc)",
                        "code": "&#x1F524;"
                    },
                    {
                        "title": "abc",
                        "slug": "(abc)",
                        "code": "&#x1F521;"
                    },
                    {
                        "title": "Symbols",
                        "slug": "(symbols)",
                        "code": "&#x1F523;"
                    },
                    {
                        "title": "Letter A",
                        "slug": "(letter-a)",
                        "code": "&#x1F1E6;"
                    },
                    {
                        "title": "Letter B",
                        "slug": "(letter-b)",
                        "code": "&#x1F1E7;"
                    },
                    {
                        "title": "Letter C",
                        "slug": "(letter-c)",
                        "code": "&#x1F1E8;"
                    },
                    {
                        "title": "Letter D",
                        "slug": "(letter-d)",
                        "code": "&#x1F1E9;"
                    },
                    {
                        "title": "Letter E",
                        "slug": "(letter-e)",
                        "code": "&#x1F1EA;"
                    },
                    {
                        "title": "Letter F",
                        "slug": "(letter-f)",
                        "code": "&#x1F1EB;"
                    },
                    {
                        "title": "Letter G",
                        "slug": "(letter-g)",
                        "code": "&#x1F1EC;"
                    },
                    {
                        "title": "Letter H",
                        "slug": "(letter-h)",
                        "code": "&#x1F1ED;"
                    },
                    {
                        "title": "Letter I",
                        "slug": "(letter-i)",
                        "code": "&#x1F1EE;"
                    },
                    {
                        "title": "Letter J",
                        "slug": "(letter-j)",
                        "code": "&#x1F1EF;"
                    },
                    {
                        "title": "Letter K",
                        "slug": "(letter-k)",
                        "code": "&#x1F1F0;"
                    },
                    {
                        "title": "Letter L",
                        "slug": "(letter-l)",
                        "code": "&#x1F1F1;"
                    },
                    {
                        "title": "Letter M",
                        "slug": "(letter-m)",
                        "code": "&#x1F1F2;"
                    },
                    {
                        "title": "Letter N",
                        "slug": "(letter-n)",
                        "code": "&#x1F1F3;"
                    },
                    {
                        "title": "Letter O",
                        "slug": "(letter-o)",
                        "code": "&#x1F1F4;"
                    },
                    {
                        "title": "Letter P",
                        "slug": "(letter-p)",
                        "code": "&#x1F1F5;"
                    },
                    {
                        "title": "Letter Q",
                        "slug": "(letter-q)",
                        "code": "&#x1F1F6;"
                    },
                    {
                        "title": "Letter R",
                        "slug": "(letter-r)",
                        "code": "&#x1F1F7;"
                    },
                    {
                        "title": "Letter S",
                        "slug": "(letter-s)",
                        "code": "&#x1F1F8;"
                    },
                    {
                        "title": "Letter T",
                        "slug": "(letter-t)",
                        "code": "&#x1F1F9;"
                    },
                    {
                        "title": "Letter U",
                        "slug": "(letter-u)",
                        "code": "&#x1F1FA;"
                    },
                    {
                        "title": "Letter V",
                        "slug": "(letter-v)",
                        "code": "&#x1F1FB;"
                    },
                    {
                        "title": "Letter W",
                        "slug": "(letter-w)",
                        "code": "&#x1F1FC;"
                    },
                    {
                        "title": "Letter Y",
                        "slug": "(letter-y)",
                        "code": "&#x1F1FE;"
                    },
                    {
                        "title": "Letter X",
                        "slug": "(letter-x)",
                        "code": "&#x1F1FD;"
                    },
                    {
                        "title": "Letter Z",
                        "slug": "(letter-z)",
                        "code": "&#x1F1FF;"
                    },
                    {
                        "title": "Zero",
                        "slug": "(zero)",
                        "code": "0&#xFE0F;&#x20E3;"
                    },
                    {
                        "title": "One",
                        "slug": "(one)",
                        "code": "1&#xFE0F;&#x20E3;"
                    },
                    {
                        "title": "Two",
                        "slug": "(two)",
                        "code": "2&#xFE0F;&#x20E3;"
                    },
                    {
                        "title": "Three",
                        "slug": "(three)",
                        "code": "3&#xFE0F;&#x20E3;"
                    },
                    {
                        "title": "Four",
                        "slug": "(four)",
                        "code": "4&#xFE0F;&#x20E3;"
                    },
                    {
                        "title": "Five",
                        "slug": "(five)",
                        "code": "5&#xFE0F;&#x20E3;"
                    },
                    {
                        "title": "Six",
                        "slug": "(six)",
                        "code": "6&#xFE0F;&#x20E3;"
                    },
                    {
                        "title": "Seven",
                        "slug": "(seven)",
                        "code": "7&#xFE0F;&#x20E3;"
                    },
                    {
                        "title": "Eight",
                        "slug": "(eight)",
                        "code": "8&#xFE0F;&#x20E3;"
                    },
                    {
                        "title": "Nine",
                        "slug": "(nine)",
                        "code": "9&#xFE0F;&#x20E3;"
                    },
                    {
                        "title": "Ten",
                        "slug": "(ten)",
                        "code": "&#x1F51F;"
                    },
                    {
                        "title": "Numbers",
                        "slug": "(numbers)",
                        "code": "&#x1F522;"
                    },
                    {
                        "title": "Hashtag",
                        "slug": "(hashtag)",
                        "code": "#&#xFE0F;&#x20E3;"
                    },
                    {
                        "title": "Asterisk",
                        "slug": "(asterisk)",
                        "code": "*&#xFE0F;&#x20E3; "
                    },
                    {
                        "title": "Info sign",
                        "slug": "(info-sign)",
                        "code": "&#x2139;&#xFE0F;"
                    },
                    {
                        "title": "Signal strength or volume bars",
                        "slug": "(signal-strength-or-volume-bars)",
                        "code": "&#x1F4F6;"
                    },
                    {
                        "title": "Play button",
                        "slug": "(play-button)",
                        "code": "&#x25B6;&#xFE0F;"
                    },
                    {
                        "title": "Pause button",
                        "slug": "(pause-button)",
                        "code": "&#x23F8;&#xFE0F;"
                    },
                    {
                        "title": "Stop Button",
                        "slug": "(stop-button)",
                        "code": "&#x23F9;&#xFE0F;"
                    },
                    {
                        "title": "Record sign",
                        "slug": "(record-sign)",
                        "code": "&#x23FA;&#xFE0F;"
                    },
                    {
                        "title": "Play-pause",
                        "slug": "(play-pause)",
                        "code": "&#x23EF;&#xFE0F;"
                    },
                    {
                        "title": "Reverse button",
                        "slug": "(reverse-button)",
                        "code": "&#x25C0;&#xFE0F;"
                    },
                    {
                        "title": "Up button",
                        "slug": "(up-button)",
                        "code": "&#x1F53C;"
                    },
                    {
                        "title": "Down button",
                        "slug": "(down-button)",
                        "code": "&#x1F53D;"
                    },
                    {
                        "title": "Fast-forward",
                        "slug": "(fast-forward)",
                        "code": "&#x23E9;"
                    },
                    {
                        "title": "Fast reverse button",
                        "slug": "(fast-reverse-button)",
                        "code": "&#x23EA;"
                    },
                    {
                        "title": "Fast up",
                        "slug": "(fast-up)",
                        "code": "&#x23EB;"
                    },
                    {
                        "title": "Fast down",
                        "slug": "(fast-down)",
                        "code": "&#x23EC;"
                    },
                    {
                        "title": "Last track button",
                        "slug": "(last-track-button)",
                        "code": "&#x23EE;&#xFE0F;"
                    },
                    {
                        "title": "Next track button",
                        "slug": "(next-track-button)",
                        "code": "&#x23ED;&#xFE0F;"
                    },
                    {
                        "title": "Eject button",
                        "slug": "(eject-button)",
                        "code": "&#x23CF;&#xFE0F;"
                    },
                    {
                        "title": "Shuffle button",
                        "slug": "(shuffle-button)",
                        "code": "&#x1F500;"
                    },
                    {
                        "title": "Repeat button",
                        "slug": "(repeat-button)",
                        "code": "&#x1F501;"
                    },
                    {
                        "title": "Repat once",
                        "slug": "(repat-once)",
                        "code": "&#x1F502;"
                    },
                    {
                        "title": "Refresh sign",
                        "slug": "(refresh-sign)",
                        "code": "&#x1F504;"
                    },
                    {
                        "title": "Spinning arrows",
                        "slug": "(spinning-arrows)",
                        "code": "&#x1F503;"
                    },
                    {
                        "title": "Arrow curving left",
                        "slug": "(arrow-curving-left)",
                        "code": "&#x21A9;&#xFE0F;"
                    },
                    {
                        "title": "Arrow curving right",
                        "slug": "(arrow-curving-right)",
                        "code": "&#x21AA;&#xFE0F;"
                    },
                    {
                        "title": "Arrow curving up",
                        "slug": "(arrow-curving-up)",
                        "code": "&#x2934;&#xFE0F;"
                    },
                    {
                        "title": "Arrow curving down",
                        "slug": "(arrow-curving-down)",
                        "code": "&#x2935;&#xFE0F;"
                    },
                    {
                        "title": "Up arrow",
                        "slug": "(up-arrow)",
                        "code": "&#x2B06;&#xFE0F;"
                    },
                    {
                        "title": "Down arrow",
                        "slug": "(down-arrow)",
                        "code": "&#x2B07;"
                    },
                    {
                        "title": "Left arrow",
                        "slug": "(left-arrow)",
                        "code": "&#x2B05;&#xFE0F;"
                    },
                    {
                        "title": "Right arrow",
                        "slug": "(right-arrow)",
                        "code": "&#x27A1;&#xFE0F;"
                    },
                    {
                        "title": "Up-right arrow",
                        "slug": "(up-right-arrow)",
                        "code": "&#x2197;&#xFE0F;"
                    },
                    {
                        "title": "Down-left arrow",
                        "slug": "(down-left-arrow)",
                        "code": "&#x2199;&#xFE0F;"
                    },
                    {
                        "title": "Down-right arrow",
                        "slug": "(down-right-arrow)",
                        "code": "&#x2198;&#xFE0F;"
                    },
                    {
                        "title": "Up-left arrow",
                        "slug": "(up-left-arrow)",
                        "code": "&#x2196;&#xFE0F;"
                    },
                    {
                        "title": "Left-right arrow",
                        "slug": "(left-right-arrow)",
                        "code": "&#x2194;&#xFE0F;"
                    },
                    {
                        "title": "Up-down arrow",
                        "slug": "(up-down-arrow)",
                        "code": "&#x2195;&#xFE0F;"
                    },
                    {
                        "title": "Aries",
                        "slug": "(aries)",
                        "code": "&#x2648;"
                    },
                    {
                        "title": "Taurus",
                        "slug": "(taurus)",
                        "code": "&#x2649;"
                    },
                    {
                        "title": "Gemini",
                        "slug": "(gemini)",
                        "code": "&#x264A;"
                    },
                    {
                        "title": "Cancer",
                        "slug": "(cancer)",
                        "code": "&#x264B;"
                    },
                    {
                        "title": "Leo",
                        "slug": "(leo)",
                        "code": "&#x264C;"
                    },
                    {
                        "title": "Virgo",
                        "slug": "(virgo)",
                        "code": "&#x264D;"
                    },
                    {
                        "title": "Libra",
                        "slug": "(libra)",
                        "code": "&#x264E;"
                    },
                    {
                        "title": "Scorpio",
                        "slug": "(scorpio)",
                        "code": "&#x264F;"
                    },
                    {
                        "title": "Sagittarius",
                        "slug": "(sagittarius)",
                        "code": "&#x2650;"
                    },
                    {
                        "title": "Capricorn",
                        "slug": "(capricorn)",
                        "code": "&#x2651;"
                    },
                    {
                        "title": "Aquarius",
                        "slug": "(aquarius)",
                        "code": "&#x2652;"
                    },
                    {
                        "title": "Pisces",
                        "slug": "(pisces)",
                        "code": "&#x2653;"
                    },
                    {
                        "title": "Ophiuchus",
                        "slug": "(ophiuchus)",
                        "code": "&#x26CE;"
                    },
                    {
                        "title": "ID",
                        "slug": "(id)",
                        "code": "&#x1F194;"
                    },
                    {
                        "title": "Japanese for vacancy",
                        "slug": "(japanese-for-vacancy)",
                        "code": "&#x1F233;"
                    },
                    {
                        "title": "Japanese for service charge",
                        "slug": "(japanese-for-service-charge)",
                        "code": "&#x1F202;&#xFE0F;"
                    },
                    {
                        "title": "Japanese for here",
                        "slug": "(japanese-for-here)",
                        "code": "&#x1F201;"
                    },
                    {
                        "title": "Japanese for reserved",
                        "slug": "(japanese-for-reserved)",
                        "code": "&#x1F22F;"
                    },
                    {
                        "title": "Japanese for discount",
                        "slug": "(japanese-for-discount)",
                        "code": "&#x1F239;"
                    },
                    {
                        "title": "Japanese for free of charge",
                        "slug": "(japanese-for-free-of-charge)",
                        "code": "&#x1F21A;"
                    },
                    {
                        "title": "Japanese for not free",
                        "slug": "(japanese-for-not-free)",
                        "code": "&#x1F236;"
                    },
                    {
                        "title": "Japanese for monthly amount",
                        "slug": "(japanese-for-monthly-amount)",
                        "code": "&#x1F237;&#xFE0F;"
                    },
                    {
                        "title": "Japanese for application",
                        "slug": "(japanese-for-application)",
                        "code": "&#x1F238;"
                    },
                    {
                        "title": "Japanese for work",
                        "slug": "(japanese-for-work)",
                        "code": "&#x1F23A;"
                    },
                    {
                        "title": "Japanese for acceptable",
                        "slug": "(japanese-for-acceptable)",
                        "code": "&#x1F251;"
                    },
                    {
                        "title": "Japanese for congratulations",
                        "slug": "(japanese-for-congratulations)",
                        "code": "&#x3297;&#xFE0F;"
                    },
                    {
                        "title": "Japanese for secret",
                        "slug": "(japanese-for-secret)",
                        "code": "&#x3299;&#xFE0F;"
                    },
                    {
                        "title": "Japanese for agreement",
                        "slug": "(japanese-for-agreement)",
                        "code": "&#x1F234;"
                    },
                    {
                        "title": "Japanese for forbidden",
                        "slug": "(japanese-for-forbidden)",
                        "code": "&#x1F232;"
                    },
                    {
                        "title": "Blood type A",
                        "slug": "(blood-type-a)",
                        "code": "&#x1F170;&#xFE0F;"
                    },
                    {
                        "title": "Blood type B",
                        "slug": "(blood-type-b)",
                        "code": "&#x1F171;&#xFE0F;"
                    },
                    {
                        "title": "Blood type AB",
                        "slug": "(blood-type-ab)",
                        "code": "&#x1F18E;"
                    },
                    {
                        "title": "Blood type O",
                        "slug": "(blood-type-o)",
                        "code": "&#x1F17E;&#xFE0F;"
                    },
                    {
                        "title": "Clear button",
                        "slug": "(clear-button)",
                        "code": "&#x1F191;"
                    },
                    {
                        "title": "Japanese symbol for beginner",
                        "slug": "(japanese-symbol-for-beginner)",
                        "code": "&#x1F530;"
                    },
                    {
                        "title": "Japanese name badge",
                        "slug": "(japanese-name-badge)",
                        "code": "&#x1F4DB;"
                    },
                    {
                        "title": "Japanese cherry blossom",
                        "slug": "(japanese-cherry-blossom)",
                        "code": "&#x1F4AE;"
                    },
                    {
                        "title": "Diamond",
                        "slug": "(diamond)",
                        "code": "&#x1F4A0;"
                    },
                    {
                        "title": "Orange diamond",
                        "slug": "(orange-diamond)",
                        "code": "&#x1F536;"
                    },
                    {
                        "title": "Blue diamond",
                        "slug": "(blue-diamond)",
                        "code": "&#x1F537;"
                    },
                    {
                        "title": "Small orange diamond",
                        "slug": "(small-orange-diamond)",
                        "code": "&#x1F538;"
                    },
                    {
                        "title": "Small blue diamond",
                        "slug": "(small-blue-diamond)",
                        "code": "&#x1F539;"
                    },
                    {
                        "title": "Red triangle pointed up",
                        "slug": "(red-triangle-pointed-up)",
                        "code": "&#x1F53A;"
                    },
                    {
                        "title": "Red triangle pointed down",
                        "slug": "(red-triangle-pointed-down)",
                        "code": "&#x1F53B;"
                    },
                    {
                        "title": "Black small square",
                        "slug": "(black-small-square)",
                        "code": "&#x25AA;&#xFE0F;"
                    },
                    {
                        "title": "White small square",
                        "slug": "(white-small-square)",
                        "code": "&#x25AB;&#xFE0F;"
                    },
                    {
                        "title": "Black medium-small square",
                        "slug": "(black-medium-small-square)",
                        "code": "&#x25FE;"
                    },
                    {
                        "title": "White medium-small square",
                        "slug": "(white-medium-small-square)",
                        "code": "&#x25FD;"
                    },
                    {
                        "title": "Black medium square",
                        "slug": "(black-medium-square)",
                        "code": "&#x25FC;&#xFE0F;"
                    },
                    {
                        "title": "White medium square",
                        "slug": "(white-medium-square)",
                        "code": "&#x25FB;&#xFE0F;"
                    },
                    {
                        "title": "Black large square",
                        "slug": "(black-large-square)",
                        "code": "&#x2B1B;"
                    },
                    {
                        "title": "White large square",
                        "slug": "(white-large-square)",
                        "code": "&#x2B1C;"
                    },
                    {
                        "title": "Black squared button",
                        "slug": "(black-squared-button)",
                        "code": "&#x1F532;"
                    },
                    {
                        "title": "White squared button",
                        "slug": "(white-squared-button)",
                        "code": "&#x1F533;"
                    },
                    {
                        "title": "White circle",
                        "slug": "(white-circle)",
                        "code": "&#x26AA;"
                    },
                    {
                        "title": "Black circle",
                        "slug": "(black-circle)",
                        "code": "&#x26AB;"
                    },
                    {
                        "title": "Red circle",
                        "slug": "(red-circle)",
                        "code": "&#x1F534;"
                    },
                    {
                        "title": "Blue circle",
                        "slug": "(blue-circle)",
                        "code": "&#x1F535;"
                    },
                    {
                        "title": "Radio button",
                        "slug": "(radio-button)",
                        "code": "&#x1F518;"
                    },
                    {
                        "title": "Speech bubble",
                        "slug": "(speech-bubble)",
                        "code": "&#x1F5E8;&#xFE0F;"
                    },
                    {
                        "title": "Thought bubble",
                        "slug": "(thought-bubble)",
                        "code": "&#x1F4AD;"
                    },
                    {
                        "title": "Anger bubble",
                        "slug": "(anger-bubble)",
                        "code": "&#x1F5EF;&#xFE0F;"
                    },
                    {
                        "title": "Chat bubble",
                        "slug": "(chat-bubble)",
                        "code": "&#x1F4AC;"
                    },
                    {
                        "title": "Curly loop",
                        "slug": "(curly-loop)",
                        "code": "&#x27B0;"
                    },
                    {
                        "title": "Spade Suit",
                        "slug": "(spade-suit)",
                        "code": "&#x2660;&#xFE0F;"
                    },
                    {
                        "title": "Club suit",
                        "slug": "(club-suit)",
                        "code": "&#x2663;&#xFE0F;"
                    },
                    {
                        "title": "Diamond suit",
                        "slug": "(diamond-suit)",
                        "code": "&#x2666;&#xFE0F;"
                    },
                    {
                        "title": "Joker card",
                        "slug": "(joker-card)",
                        "code": "&#x1F0CF;"
                    },
                    {
                        "title": "Mahjong card",
                        "slug": "(mahjong-card)",
                        "code": "&#x1F004;"
                    },
                    {
                        "title": "Hanafuda card",
                        "slug": "(hanafuda-card)",
                        "code": "&#x1F3B4;"
                    },
                    {
                        "title": "Yen Graph",
                        "slug": "(yen-graph)",
                        "code": "&#x1F4B9;"
                    },
                    {
                        "title": "Low volume",
                        "slug": "(low-volume)",
                        "code": "&#x1F509;"
                    },
                    {
                        "title": "High volume",
                        "slug": "(high-volume)",
                        "code": "&#x1F50A;"
                    },
                    {
                        "title": "Double curly loop",
                        "slug": "(double-curly-loop)",
                        "code": "&#x27BF;"
                    },
                    {
                        "title": "One o’clock",
                        "slug": "(one-o’clock)",
                        "code": "&#x1F550;"
                    },
                    {
                        "title": "Two o’clock",
                        "slug": "(two-o’clock)",
                        "code": "&#x1F551;"
                    },
                    {
                        "title": "Three o’clock",
                        "slug": "(three-o’clock)",
                        "code": "&#x1F552;"
                    },
                    {
                        "title": "Four o’clock",
                        "slug": "(four-o’clock)",
                        "code": "&#x1F553;"
                    },
                    {
                        "title": "Five o’clock",
                        "slug": "(five-o’clock)",
                        "code": "&#x1F554;"
                    },
                    {
                        "title": "Six o’clock",
                        "slug": "(six-o’clock)",
                        "code": "&#x1F555;"
                    },
                    {
                        "title": "Seven o’clock",
                        "slug": "(seven-o’clock)",
                        "code": "&#x1F556;"
                    },
                    {
                        "title": "Eight o’clock",
                        "slug": "(eight-o’clock)",
                        "code": "&#x1F557;"
                    },
                    {
                        "title": "Nine o’clock",
                        "slug": "(nine-o’clock)",
                        "code": "&#x1F558;"
                    },
                    {
                        "title": "Ten o’clock",
                        "slug": "(ten-o’clock)",
                        "code": "&#x1F559;"
                    },
                    {
                        "title": "Eleven o’clock",
                        "slug": "(eleven-o’clock)",
                        "code": "&#x1F55A;"
                    },
                    {
                        "title": "Twelve o’clock",
                        "slug": "(twelve-o’clock)",
                        "code": "&#x1F55B;"
                    },
                    {
                        "title": "Twelve-thirty",
                        "slug": "(twelve-thirty)",
                        "code": "&#x1F567;"
                    },
                    {
                        "title": "One-thirty",
                        "slug": "(one-thirty)",
                        "code": "&#x1F55C;"
                    },
                    {
                        "title": "Two-thirty",
                        "slug": "(two-thirty)",
                        "code": "&#x1F55D;"
                    },
                    {
                        "title": "Three-thirty",
                        "slug": "(three-thirty)",
                        "code": "&#x1F55E;"
                    },
                    {
                        "title": "Four-thirty",
                        "slug": "(four-thirty)",
                        "code": "&#x1F55F;"
                    },
                    {
                        "title": "Five-thirty",
                        "slug": "(five-thirty)",
                        "code": "&#x1F560;"
                    },
                    {
                        "title": "Six-thirty",
                        "slug": "(six-thirty)",
                        "code": "&#x1F561;"
                    },
                    {
                        "title": "Seven-thirty",
                        "slug": "(seven-thirty)",
                        "code": "&#x1F562;"
                    },
                    {
                        "title": "Eight-thirty",
                        "slug": "(eight-thirty)",
                        "code": "&#x1F563;"
                    },
                    {
                        "title": "Nine-thirty",
                        "slug": "(nine-thirty)",
                        "code": "&#x1F564;"
                    },
                    {
                        "title": "Ten-thirty",
                        "slug": "(ten-thirty)",
                        "code": "&#x1F565;"
                    },
                    {
                        "title": "Eleven-thirty",
                        "slug": "(eleven-thirty)",
                        "code": "&#x1F566;"
                    }
                ]
            },
            {
                "name": "Flags",
                "icon": "&#x1F3F3;&#xFE0F;",
                "slug": "F",
                "smilyList": [
                    {
                        "title": "White flag",
                        "slug": "(white-flag)",
                        "code": "&#x1F3F3;&#xFE0F;"
                    },
                    {
                        "title": "Black flag",
                        "slug": "(black-flag)",
                        "code": "&#x1F3F4;"
                    },
                    {
                        "title": "Racing flag",
                        "slug": "(racing-flag)",
                        "code": "&#x1F3C1;"
                    },
                    {
                        "title": "Triangular flag",
                        "slug": "(triangular-flag)",
                        "code": "&#x1F6A9;"
                    },
                    {
                        "title": "Rainbow flag",
                        "slug": "(rainbow-flag)",
                        "code": "&#x1F3F3;&#xFE0F;&#x200D;&#x1F308;"
                    },
                    {
                        "title": "Flag of Afghanistan",
                        "slug": "(flag-of-afghanistan)",
                        "code": "&#x1F1E6;&#x1F1EB;"
                    },
                    {
                        "title": "Flag of Åland Islands",
                        "slug": "(flag-of-Åland-islands)",
                        "code": "&#x1F1E6;&#x1F1FD;"
                    },
                    {
                        "title": "Flag of Albania",
                        "slug": "(flag-of-albania)",
                        "code": "&#x1F1E6;&#x1F1F1;"
                    },
                    {
                        "title": "Flag of Algeria",
                        "slug": "(flag-of-algeria)",
                        "code": "&#x1F1E9;&#x1F1FF;"
                    },
                    {
                        "title": "Flag of American Samoa",
                        "slug": "(flag-of-american-samoa)",
                        "code": "&#x1F1E6;&#x1F1F8;"
                    },
                    {
                        "title": "Flag of Andorra",
                        "slug": "(flag-of-andorra)",
                        "code": "&#x1F1E6;&#x1F1E9;"
                    },
                    {
                        "title": "Flag of Angola",
                        "slug": "(flag-of-angola)",
                        "code": "&#x1F1E6;&#x1F1F4;"
                    },
                    {
                        "title": "Flag of Anguilla",
                        "slug": "(flag-of-anguilla)",
                        "code": "&#x1F1E6;&#x1F1EE;"
                    },
                    {
                        "title": "Flag of Antarctica",
                        "slug": "(flag-of-antarctica)",
                        "code": "&#x1F1E6;&#x1F1F6;"
                    },
                    {
                        "title": "Flag of Antigua & Barbuda",
                        "slug": "(flag-of-antigua-&-barbuda)",
                        "code": "&#x1F1E6;&#x1F1EC;"
                    },
                    {
                        "title": "Flag of Argentina",
                        "slug": "(flag-of-argentina)",
                        "code": "&#x1F1E6;&#x1F1F7;"
                    },
                    {
                        "title": "Flag of Armenia",
                        "slug": "(flag-of-armenia)",
                        "code": "&#x1F1E6;&#x1F1F2;"
                    },
                    {
                        "title": "Flag of Aruba",
                        "slug": "(flag-of-aruba)",
                        "code": "&#x1F1E6;&#x1F1FC;"
                    },
                    {
                        "title": "Flag of Australia",
                        "slug": "(flag-of-australia)",
                        "code": "&#x1F1E6;&#x1F1FA;"
                    },
                    {
                        "title": "Flag of Austria",
                        "slug": "(flag-of-austria)",
                        "code": "&#x1F1E6;&#x1F1F9;"
                    },
                    {
                        "title": "Flag of Azerbaijan",
                        "slug": "(flag-of-azerbaijan)",
                        "code": "&#x1F1E6;&#x1F1FF;"
                    },
                    {
                        "title": "Flag of Bahamas",
                        "slug": "(flag-of-bahamas)",
                        "code": "&#x1F1E7;&#x1F1F8;"
                    },
                    {
                        "title": "Flag of Bahrain",
                        "slug": "(flag-of-bahrain)",
                        "code": "&#x1F1E7;&#x1F1ED;"
                    },
                    {
                        "title": "Flag of Bangladesh",
                        "slug": "(flag-of-bangladesh)",
                        "code": "&#x1F1E7;&#x1F1E9;"
                    },
                    {
                        "title": "Flag of Barbados",
                        "slug": "(flag-of-barbados)",
                        "code": "&#x1F1E7;&#x1F1E7;"
                    },
                    {
                        "title": "Flag of Belarus",
                        "slug": "(flag-of-belarus)",
                        "code": "&#x1F1E7;&#x1F1FE;"
                    },
                    {
                        "title": "Flag of Belgium",
                        "slug": "(flag-of-belgium)",
                        "code": "&#x1F1E7;&#x1F1EA;"
                    },
                    {
                        "title": "Flag of Belize",
                        "slug": "(flag-of-belize)",
                        "code": "&#x1F1E7;&#x1F1FF;"
                    },
                    {
                        "title": "Flag of Benin",
                        "slug": "(flag-of-benin)",
                        "code": "&#x1F1E7;&#x1F1EF;"
                    },
                    {
                        "title": "Flag of Bermuda",
                        "slug": "(flag-of-bermuda)",
                        "code": "&#x1F1E7;&#x1F1F2;"
                    },
                    {
                        "title": "Flag of Bhutan",
                        "slug": "(flag-of-bhutan)",
                        "code": "&#x1F1E7;&#x1F1F9;"
                    },
                    {
                        "title": "Flag of Bolivia",
                        "slug": "(flag-of-bolivia)",
                        "code": "&#x1F1E7;&#x1F1F4;"
                    },
                    {
                        "title": "Flag of Caribbean Netherlands",
                        "slug": "(flag-of-caribbean-netherlands)",
                        "code": "&#x1F1E7;&#x1F1F6;"
                    },
                    {
                        "title": "Flag of Bosnia & Herzegovina",
                        "slug": "(flag-of-bosnia-&-herzegovina)",
                        "code": "&#x1F1E7;&#x1F1E6;"
                    },
                    {
                        "title": "Flag of Botswana",
                        "slug": "(flag-of-botswana)",
                        "code": "&#x1F1E7;&#x1F1FC;"
                    },
                    {
                        "title": "Flag of Brazil",
                        "slug": "(flag-of-brazil)",
                        "code": "&#x1F1E7;&#x1F1F7;"
                    },
                    {
                        "title": "Flag of British Indian Ocean Territory",
                        "slug": "(flag-of-british-indian-ocean-territory)",
                        "code": "&#x1F1EE;&#x1F1F4;"
                    },
                    {
                        "title": "Flag of British Virgin Islands",
                        "slug": "(flag-of-british-virgin-islands)",
                        "code": "&#x1F1FB;&#x1F1EC;"
                    },
                    {
                        "title": "Flag of Brunei",
                        "slug": "(flag-of-brunei)",
                        "code": "&#x1F1E7;&#x1F1F3;"
                    },
                    {
                        "title": "Flag of Bulgaria",
                        "slug": "(flag-of-bulgaria)",
                        "code": "&#x1F1E7;&#x1F1EC;"
                    },
                    {
                        "title": "Flag of Burkina Faso",
                        "slug": "(flag-of-burkina-faso)",
                        "code": "&#x1F1E7;&#x1F1EB;"
                    },
                    {
                        "title": "Flag of Burundi",
                        "slug": "(flag-of-burundi)",
                        "code": "&#x1F1E7;&#x1F1EE;"
                    },
                    {
                        "title": "Flag of Cape Verde",
                        "slug": "(flag-of-cape-verde)",
                        "code": "&#x1F1E8;&#x1F1FB;"
                    },
                    {
                        "title": "Flag of Cambodia",
                        "slug": "(flag-of-cambodia)",
                        "code": "&#x1F1F0;&#x1F1ED;"
                    },
                    {
                        "title": "Flag of Cameroon",
                        "slug": "(flag-of-cameroon)",
                        "code": "&#x1F1E8;&#x1F1F2;"
                    },
                    {
                        "title": "Flag of Canada",
                        "slug": "(flag-of-canada)",
                        "code": "&#x1F1E8;&#x1F1E6;"
                    },
                    {
                        "title": "Flag of Canary Islands",
                        "slug": "(flag-of-canary-islands)",
                        "code": "&#x1F1EE;&#x1F1E8;"
                    },
                    {
                        "title": "Flag of Cayman Islands",
                        "slug": "(flag-of-cayman-islands)",
                        "code": "&#x1F1F0;&#x1F1FE;"
                    },
                    {
                        "title": "Flag of Central African Republic",
                        "slug": "(flag-of-central-african-republic)",
                        "code": "&#x1F1E8;&#x1F1EB;"
                    },
                    {
                        "title": "Flag of Chad",
                        "slug": "(flag-of-chad)",
                        "code": "&#x1F1F9;&#x1F1E9;"
                    },
                    {
                        "title": "Flag of Chile",
                        "slug": "(flag-of-chile)",
                        "code": "&#x1F1E8;&#x1F1F1;"
                    },
                    {
                        "title": "Flag of China",
                        "slug": "(flag-of-china)",
                        "code": "&#x1F1E8;&#x1F1F3;"
                    },
                    {
                        "title": "Flag of Christmas Island",
                        "slug": "(flag-of-christmas-island)",
                        "code": "&#x1F1E8;&#x1F1FD;"
                    },
                    {
                        "title": "Flag of Cocos (Keeling) Islands",
                        "slug": "(flag-of-cocos-(keeling)-islands)",
                        "code": "&#x1F1E8;&#x1F1E8;"
                    },
                    {
                        "title": "Flag of Colombia",
                        "slug": "(flag-of-colombia)",
                        "code": "&#x1F1E8;&#x1F1F4;"
                    },
                    {
                        "title": "Flag of Comoros",
                        "slug": "(flag-of-comoros)",
                        "code": "&#x1F1F0;&#x1F1F2;"
                    },
                    {
                        "title": "Flag of Congo - Brazzaville",
                        "slug": "(flag-of-congo---brazzaville)",
                        "code": "&#x1F1E8;&#x1F1EC;"
                    },
                    {
                        "title": "Flag of Congo - Kinshasa",
                        "slug": "(flag-of-congo---kinshasa)",
                        "code": "&#x1F1E8;&#x1F1E9;"
                    },
                    {
                        "title": "Flag of Cook Islands",
                        "slug": "(flag-of-cook-islands)",
                        "code": "&#x1F1E8;&#x1F1F0;"
                    },
                    {
                        "title": "Flag of Costa Rica",
                        "slug": "(flag-of-costa-rica)",
                        "code": "&#x1F1E8;&#x1F1F7;"
                    },
                    {
                        "title": "Flag of Côte D’Ivoire",
                        "slug": "(flag-of-côte-d’ivoire)",
                        "code": "&#x1F1E8;&#x1F1EE;"
                    },
                    {
                        "title": "Flag of Croatia",
                        "slug": "(flag-of-croatia)",
                        "code": "&#x1F1ED;&#x1F1F7;"
                    },
                    {
                        "title": "Flag of Cuba",
                        "slug": "(flag-of-cuba)",
                        "code": "&#x1F1E8;&#x1F1FA;"
                    },
                    {
                        "title": "Flag of Curaçao",
                        "slug": "(flag-of-curaçao)",
                        "code": "&#x1F1E8;&#x1F1FC;"
                    },
                    {
                        "title": "Flag of Cyprus",
                        "slug": "(flag-of-cyprus)",
                        "code": "&#x1F1E8;&#x1F1FE;"
                    },
                    {
                        "title": "Flag of Czechia",
                        "slug": "(flag-of-czechia)",
                        "code": "&#x1F1E8;&#x1F1FF;"
                    },
                    {
                        "title": "Flag of Denmark",
                        "slug": "(flag-of-denmark)",
                        "code": "&#x1F1E9;&#x1F1F0;"
                    },
                    {
                        "title": "Flag of Djibouti",
                        "slug": "(flag-of-djibouti)",
                        "code": "&#x1F1E9;&#x1F1EF;"
                    },
                    {
                        "title": "Flag of Dominica",
                        "slug": "(flag-of-dominica)",
                        "code": "&#x1F1E9;&#x1F1F2;"
                    },
                    {
                        "title": "Flag of Dominican Republic",
                        "slug": "(flag-of-dominican-republic)",
                        "code": "&#x1F1E9;&#x1F1F4;"
                    },
                    {
                        "title": "Flag of Ecuador",
                        "slug": "(flag-of-ecuador)",
                        "code": "&#x1F1EA;&#x1F1E8;"
                    },
                    {
                        "title": "Flag of Egypt",
                        "slug": "(flag-of-egypt)",
                        "code": "&#x1F1EA;&#x1F1EC;"
                    },
                    {
                        "title": "Flag of El Salvador",
                        "slug": "(flag-of-el-salvador)",
                        "code": "&#x1F1F8;&#x1F1FB;"
                    },
                    {
                        "title": "Flag of Equatorial Guinea",
                        "slug": "(flag-of-equatorial-guinea)",
                        "code": "&#x1F1EC;&#x1F1F6;"
                    },
                    {
                        "title": "Flag of Eritrea",
                        "slug": "(flag-of-eritrea)",
                        "code": "&#x1F1EA;&#x1F1F7;"
                    },
                    {
                        "title": "Flag of Estonia",
                        "slug": "(flag-of-estonia)",
                        "code": "&#x1F1EA;&#x1F1EA;"
                    },
                    {
                        "title": "Flag of Ethiopia",
                        "slug": "(flag-of-ethiopia)",
                        "code": "&#x1F1EA;&#x1F1F9;"
                    },
                    {
                        "title": "Flag of European Union",
                        "slug": "(flag-of-european-union)",
                        "code": "&#x1F1EA;&#x1F1FA;"
                    },
                    {
                        "title": "Flag of Falkland Islands",
                        "slug": "(flag-of-falkland-islands)",
                        "code": "&#x1F1EB;&#x1F1F0;"
                    },
                    {
                        "title": "Flag of Faroe Islands",
                        "slug": "(flag-of-faroe-islands)",
                        "code": "&#x1F1EB;&#x1F1F4;"
                    },
                    {
                        "title": "Flag of Fiji",
                        "slug": "(flag-of-fiji)",
                        "code": "&#x1F1EB;&#x1F1EF;"
                    },
                    {
                        "title": "Flag of Finland",
                        "slug": "(flag-of-finland)",
                        "code": "&#x1F1EB;&#x1F1EE;"
                    },
                    {
                        "title": "Flag of France",
                        "slug": "(flag-of-france)",
                        "code": "&#x1F1EB;&#x1F1F7;"
                    },
                    {
                        "title": "Flag of French Guiana",
                        "slug": "(flag-of-french-guiana)",
                        "code": "&#x1F1EC;&#x1F1EB;"
                    },
                    {
                        "title": "Flag of French Polynesia",
                        "slug": "(flag-of-french-polynesia)",
                        "code": "&#x1F1F5;&#x1F1EB;"
                    },
                    {
                        "title": "Flag of French Southern Territories",
                        "slug": "(flag-of-french-southern-territories)",
                        "code": "&#x1F1F9;&#x1F1EB;"
                    },
                    {
                        "title": "Flag of Gabon",
                        "slug": "(flag-of-gabon)",
                        "code": "&#x1F1EC;&#x1F1E6;"
                    },
                    {
                        "title": "Flag of Gambia",
                        "slug": "(flag-of-gambia)",
                        "code": "&#x1F1EC;&#x1F1F2;"
                    },
                    {
                        "title": "Flag of Georgia",
                        "slug": "(flag-of-georgia)",
                        "code": "&#x1F1EC;&#x1F1EA;"
                    },
                    {
                        "title": "Flag of Germany",
                        "slug": "(flag-of-germany)",
                        "code": "&#x1F1E9;&#x1F1EA;"
                    },
                    {
                        "title": "Flag of Ghana",
                        "slug": "(flag-of-ghana)",
                        "code": "&#x1F1EC;&#x1F1ED;"
                    },
                    {
                        "title": "Flag of Gibraltar",
                        "slug": "(flag-of-gibraltar)",
                        "code": "&#x1F1EC;&#x1F1EE;"
                    },
                    {
                        "title": "Flag of Greece",
                        "slug": "(flag-of-greece)",
                        "code": "&#x1F1EC;&#x1F1F7;"
                    },
                    {
                        "title": "Flag of Greenland",
                        "slug": "(flag-of-greenland)",
                        "code": "&#x1F1EC;&#x1F1F1;"
                    },
                    {
                        "title": "Flag of Grenada",
                        "slug": "(flag-of-grenada)",
                        "code": "&#x1F1EC;&#x1F1E9;"
                    },
                    {
                        "title": "Flag of Guadeloupe",
                        "slug": "(flag-of-guadeloupe)",
                        "code": "&#x1F1EC;&#x1F1F5;"
                    },
                    {
                        "title": "Flag of Guam",
                        "slug": "(flag-of-guam)",
                        "code": "&#x1F1EC;&#x1F1FA;"
                    },
                    {
                        "title": "Flag of Guatemala",
                        "slug": "(flag-of-guatemala)",
                        "code": "&#x1F1EC;&#x1F1F9;"
                    },
                    {
                        "title": "Flag of Guernsey",
                        "slug": "(flag-of-guernsey)",
                        "code": "&#x1F1EC;&#x1F1EC;"
                    },
                    {
                        "title": "Flag of Guinea",
                        "slug": "(flag-of-guinea)",
                        "code": "&#x1F1EC;&#x1F1F3;"
                    },
                    {
                        "title": "Flag of Guinea-Bissau",
                        "slug": "(flag-of-guinea-bissau)",
                        "code": "&#x1F1EC;&#x1F1FC;"
                    },
                    {
                        "title": "Flag of Guyana",
                        "slug": "(flag-of-guyana)",
                        "code": "&#x1F1EC;&#x1F1FE;"
                    },
                    {
                        "title": "Flag of Haiti",
                        "slug": "(flag-of-haiti)",
                        "code": "&#x1F1ED;&#x1F1F9;"
                    },
                    {
                        "title": "Flag of Honduras",
                        "slug": "(flag-of-honduras)",
                        "code": "&#x1F1ED;&#x1F1F3;"
                    },
                    {
                        "title": "Flag of Hong Kong Sar China",
                        "slug": "(flag-of-hong-kong-sar-china)",
                        "code": "&#x1F1ED;&#x1F1F0;"
                    },
                    {
                        "title": "Flag of Hungary",
                        "slug": "(flag-of-hungary)",
                        "code": "&#x1F1ED;&#x1F1FA;"
                    },
                    {
                        "title": "Flag of Iceland",
                        "slug": "(flag-of-iceland)",
                        "code": "&#x1F1EE;&#x1F1F8;"
                    },
                    {
                        "title": "Flag of India",
                        "slug": "(flag-of-india)",
                        "code": "&#x1F1EE;&#x1F1F3;"
                    },
                    {
                        "title": "Flag of Indonesia",
                        "slug": "(flag-of-indonesia)",
                        "code": "&#x1F1EE;&#x1F1E9;"
                    },
                    {
                        "title": "Flag of Iran",
                        "slug": "(flag-of-iran)",
                        "code": "&#x1F1EE;&#x1F1F7;"
                    },
                    {
                        "title": "Flag of Iraq",
                        "slug": "(flag-of-iraq)",
                        "code": "&#x1F1EE;&#x1F1F6;"
                    },
                    {
                        "title": "Flag of Ireland",
                        "slug": "(flag-of-ireland)",
                        "code": "&#x1F1EE;&#x1F1EA;"
                    },
                    {
                        "title": "Flag of Isle of Man",
                        "slug": "(flag-of-isle-of-man)",
                        "code": "&#x1F1EE;&#x1F1F2;"
                    },
                    {
                        "title": "Flag of Israel",
                        "slug": "(flag-of-israel)",
                        "code": "&#x1F1EE;&#x1F1F1;"
                    },
                    {
                        "title": "Flag of Italy",
                        "slug": "(flag-of-italy)",
                        "code": "&#x1F1EE;&#x1F1F9;"
                    },
                    {
                        "title": "Flag of Jamaica",
                        "slug": "(flag-of-jamaica)",
                        "code": "&#x1F1EF;&#x1F1F2;"
                    },
                    {
                        "title": "Flag of Japan",
                        "slug": "(flag-of-japan)",
                        "code": "&#x1F1EF;&#x1F1F5;"
                    },
                    {
                        "title": "Flag of Crossed Flags",
                        "slug": "(flag-of-crossed-flags)",
                        "code": "&#x1F38C;"
                    },
                    {
                        "title": "Flag of Jersey",
                        "slug": "(flag-of-jersey)",
                        "code": "&#x1F1EF;&#x1F1EA;"
                    },
                    {
                        "title": "Flag of Jordan",
                        "slug": "(flag-of-jordan)",
                        "code": "&#x1F1EF;&#x1F1F4;"
                    },
                    {
                        "title": "Flag of Kazakhstan",
                        "slug": "(flag-of-kazakhstan)",
                        "code": "&#x1F1F0;&#x1F1FF;"
                    },
                    {
                        "title": "Flag of Kenya",
                        "slug": "(flag-of-kenya)",
                        "code": "&#x1F1F0;&#x1F1EA;"
                    },
                    {
                        "title": "Flag of Kiribati",
                        "slug": "(flag-of-kiribati)",
                        "code": "&#x1F1F0;&#x1F1EE;"
                    },
                    {
                        "title": "Flag of Kosovo",
                        "slug": "(flag-of-kosovo)",
                        "code": "&#x1F1FD;&#x1F1F0;"
                    },
                    {
                        "title": "Flag of Kuwait",
                        "slug": "(flag-of-kuwait)",
                        "code": "&#x1F1F0;&#x1F1FC;"
                    },
                    {
                        "title": "Flag of Kyrgyzstan",
                        "slug": "(flag-of-kyrgyzstan)",
                        "code": "&#x1F1F0;&#x1F1EC;"
                    },
                    {
                        "title": "Flag of Laos",
                        "slug": "(flag-of-laos)",
                        "code": "&#x1F1F1;&#x1F1E6;"
                    },
                    {
                        "title": "Flag of Latvia",
                        "slug": "(flag-of-latvia)",
                        "code": "&#x1F1F1;&#x1F1FB;"
                    },
                    {
                        "title": "Flag of Lebanon",
                        "slug": "(flag-of-lebanon)",
                        "code": "&#x1F1F1;&#x1F1E7;"
                    },
                    {
                        "title": "Flag of Lesotho",
                        "slug": "(flag-of-lesotho)",
                        "code": "&#x1F1F1;&#x1F1F8;"
                    },
                    {
                        "title": "Flag of Liberia",
                        "slug": "(flag-of-liberia)",
                        "code": "&#x1F1F1;&#x1F1F7;"
                    },
                    {
                        "title": "Flag of Libya",
                        "slug": "(flag-of-libya)",
                        "code": "&#x1F1F1;&#x1F1FE;"
                    },
                    {
                        "title": "Flag of Liechtenstein",
                        "slug": "(flag-of-liechtenstein)",
                        "code": "&#x1F1F1;&#x1F1EE;"
                    },
                    {
                        "title": "Flag of Lithuania",
                        "slug": "(flag-of-lithuania)",
                        "code": "&#x1F1F1;&#x1F1F9;"
                    },
                    {
                        "title": "Flag of Luxembourg",
                        "slug": "(flag-of-luxembourg)",
                        "code": "&#x1F1F1;&#x1F1FA;"
                    },
                    {
                        "title": "Flag of Macau Sar China",
                        "slug": "(flag-of-macau-sar-china)",
                        "code": "&#x1F1F2;&#x1F1F4;"
                    },
                    {
                        "title": "Flag of Macedonia",
                        "slug": "(flag-of-macedonia)",
                        "code": "&#x1F1F2;&#x1F1F0;"
                    },
                    {
                        "title": "Flag of Madagascar",
                        "slug": "(flag-of-madagascar)",
                        "code": "&#x1F1F2;&#x1F1EC;"
                    },
                    {
                        "title": "Flag of Malawi",
                        "slug": "(flag-of-malawi)",
                        "code": "&#x1F1F2;&#x1F1FC;"
                    },
                    {
                        "title": "Flag of Malaysia",
                        "slug": "(flag-of-malaysia)",
                        "code": "&#x1F1F2;&#x1F1FE;"
                    },
                    {
                        "title": "Flag of Maldives",
                        "slug": "(flag-of-maldives)",
                        "code": "&#x1F1F2;&#x1F1FB;"
                    },
                    {
                        "title": "Flag of Mali",
                        "slug": "(flag-of-mali)",
                        "code": "&#x1F1F2;&#x1F1F1;"
                    },
                    {
                        "title": "Flag of Malta",
                        "slug": "(flag-of-malta)",
                        "code": "&#x1F1F2;&#x1F1F9;"
                    },
                    {
                        "title": "Flag of Marshall Islands",
                        "slug": "(flag-of-marshall-islands)",
                        "code": "&#x1F1F2;&#x1F1ED;"
                    },
                    {
                        "title": "Flag of Martinique",
                        "slug": "(flag-of-martinique)",
                        "code": "&#x1F1F2;&#x1F1F6;"
                    },
                    {
                        "title": "Flag of Mauritania",
                        "slug": "(flag-of-mauritania)",
                        "code": "&#x1F1F2;&#x1F1F7;"
                    },
                    {
                        "title": "Flag of Mauritius",
                        "slug": "(flag-of-mauritius)",
                        "code": "&#x1F1F2;&#x1F1FA;"
                    },
                    {
                        "title": "Flag of Mayotte",
                        "slug": "(flag-of-mayotte)",
                        "code": "&#x1F1FE;&#x1F1F9;"
                    },
                    {
                        "title": "Flag of Mexico",
                        "slug": "(flag-of-mexico)",
                        "code": "&#x1F1F2;&#x1F1FD;"
                    },
                    {
                        "title": "Flag of Micronesia",
                        "slug": "(flag-of-micronesia)",
                        "code": "&#x1F1EB;&#x1F1F2;"
                    },
                    {
                        "title": "Flag of Moldova",
                        "slug": "(flag-of-moldova)",
                        "code": "&#x1F1F2;&#x1F1E9;"
                    },
                    {
                        "title": "Flag of Monaco",
                        "slug": "(flag-of-monaco)",
                        "code": "&#x1F1F2;&#x1F1E8;"
                    },
                    {
                        "title": "Flag of Mongolia",
                        "slug": "(flag-of-mongolia)",
                        "code": "&#x1F1F2;&#x1F1F3;"
                    },
                    {
                        "title": "Flag of Montenegro",
                        "slug": "(flag-of-montenegro)",
                        "code": "&#x1F1F2;&#x1F1EA;"
                    },
                    {
                        "title": "Flag of Montserrat",
                        "slug": "(flag-of-montserrat)",
                        "code": "&#x1F1F2;&#x1F1F8;"
                    },
                    {
                        "title": "Flag of Morocco",
                        "slug": "(flag-of-morocco)",
                        "code": "&#x1F1F2;&#x1F1E6;"
                    },
                    {
                        "title": "Flag of Mozambique",
                        "slug": "(flag-of-mozambique)",
                        "code": "&#x1F1F2;&#x1F1FF;"
                    },
                    {
                        "title": "Flag of Myanmar (Burma)",
                        "slug": "(flag-of-myanmar-(burma))",
                        "code": "&#x1F1F2;&#x1F1F2;"
                    },
                    {
                        "title": "Flag of Namibia",
                        "slug": "(flag-of-namibia)",
                        "code": "&#x1F1F3;&#x1F1E6;"
                    },
                    {
                        "title": "Flag of Nauru",
                        "slug": "(flag-of-nauru)",
                        "code": "&#x1F1F3;&#x1F1F7;"
                    },
                    {
                        "title": "Flag of Nepal",
                        "slug": "(flag-of-nepal)",
                        "code": "&#x1F1F3;&#x1F1F5;"
                    },
                    {
                        "title": "Flag of Netherlands",
                        "slug": "(flag-of-netherlands)",
                        "code": "&#x1F1F3;&#x1F1F1;"
                    },
                    {
                        "title": "Flag of New Caledonia",
                        "slug": "(flag-of-new-caledonia)",
                        "code": "&#x1F1F3;&#x1F1E8;"
                    },
                    {
                        "title": "Flag of New Zealand",
                        "slug": "(flag-of-new-zealand)",
                        "code": "&#x1F1F3;&#x1F1FF;"
                    },
                    {
                        "title": "Flag of Nicaragua",
                        "slug": "(flag-of-nicaragua)",
                        "code": "&#x1F1F3;&#x1F1EE;"
                    },
                    {
                        "title": "Flag of Niger",
                        "slug": "(flag-of-niger)",
                        "code": "&#x1F1F3;&#x1F1EA;"
                    },
                    {
                        "title": "Flag of Nigeria",
                        "slug": "(flag-of-nigeria)",
                        "code": "&#x1F1F3;&#x1F1EC;"
                    },
                    {
                        "title": "Flag of Niue",
                        "slug": "(flag-of-niue)",
                        "code": "&#x1F1F3;&#x1F1FA;"
                    },
                    {
                        "title": "Flag of Norfolk Island",
                        "slug": "(flag-of-norfolk-island)",
                        "code": "&#x1F1F3;&#x1F1EB;"
                    },
                    {
                        "title": "Flag of Northern Mariana Islands",
                        "slug": "(flag-of-northern-mariana-islands)",
                        "code": "&#x1F1F2;&#x1F1F5;"
                    },
                    {
                        "title": "Flag of North Korea",
                        "slug": "(flag-of-north-korea)",
                        "code": "&#x1F1F0;&#x1F1F5;"
                    },
                    {
                        "title": "Flag of Norway",
                        "slug": "(flag-of-norway)",
                        "code": "&#x1F1F3;&#x1F1F4;"
                    },
                    {
                        "title": "Flag of Oman",
                        "slug": "(flag-of-oman)",
                        "code": "&#x1F1F4;&#x1F1F2;"
                    },
                    {
                        "title": "Flag of Pakistan",
                        "slug": "(flag-of-pakistan)",
                        "code": "&#x1F1F5;&#x1F1F0;"
                    },
                    {
                        "title": "Flag of Palau",
                        "slug": "(flag-of-palau)",
                        "code": "&#x1F1F5;&#x1F1FC;"
                    },
                    {
                        "title": "Flag of Palestinian Territories",
                        "slug": "(flag-of-palestinian-territories)",
                        "code": "&#x1F1F5;&#x1F1F8;"
                    },
                    {
                        "title": "Flag of Panama",
                        "slug": "(flag-of-panama)",
                        "code": "&#x1F1F5;&#x1F1E6;"
                    },
                    {
                        "title": "Flag of Papua New Guinea",
                        "slug": "(flag-of-papua-new-guinea)",
                        "code": "&#x1F1F5;&#x1F1EC;"
                    },
                    {
                        "title": "Flag of Paraguay",
                        "slug": "(flag-of-paraguay)",
                        "code": "&#x1F1F5;&#x1F1FE;"
                    },
                    {
                        "title": "Flag of Peru",
                        "slug": "(flag-of-peru)",
                        "code": "&#x1F1F5;&#x1F1EA;"
                    },
                    {
                        "title": "Flag of Philippines",
                        "slug": "(flag-of-philippines)",
                        "code": "&#x1F1F5;&#x1F1ED;"
                    },
                    {
                        "title": "Flag of Pitcairn Islands",
                        "slug": "(flag-of-pitcairn-islands)",
                        "code": "&#x1F1F5;&#x1F1F3;"
                    },
                    {
                        "title": "Flag of Poland",
                        "slug": "(flag-of-poland)",
                        "code": "&#x1F1F5;&#x1F1F1;"
                    },
                    {
                        "title": "Flag of Portugal",
                        "slug": "(flag-of-portugal)",
                        "code": "&#x1F1F5;&#x1F1F9;"
                    },
                    {
                        "title": "Flag of Puerto Rico",
                        "slug": "(flag-of-puerto-rico)",
                        "code": "&#x1F1F5;&#x1F1F7;"
                    },
                    {
                        "title": "Flag of Qatar",
                        "slug": "(flag-of-qatar)",
                        "code": "&#x1F1F6;&#x1F1E6;"
                    },
                    {
                        "title": "Flag of Réunion",
                        "slug": "(flag-of-réunion)",
                        "code": "&#x1F1F7;&#x1F1EA;"
                    },
                    {
                        "title": "Flag of Romania",
                        "slug": "(flag-of-romania)",
                        "code": "&#x1F1F7;&#x1F1F4;"
                    },
                    {
                        "title": "Flag of Russia",
                        "slug": "(flag-of-russia)",
                        "code": "&#x1F1F7;&#x1F1FA;"
                    },
                    {
                        "title": "Flag of Rwanda",
                        "slug": "(flag-of-rwanda)",
                        "code": "&#x1F1F7;&#x1F1FC;"
                    },
                    {
                        "title": "Flag of St. Barthélemy",
                        "slug": "(flag-of-st.-barthélemy)",
                        "code": "&#x1F1E7;&#x1F1F1;"
                    },
                    {
                        "title": "Flag of St. Helena",
                        "slug": "(flag-of-st.-helena)",
                        "code": "&#x1F1F8;&#x1F1ED;"
                    },
                    {
                        "title": "Flag of St. Kitts & Nevis",
                        "slug": "(flag-of-st.-kitts-&-nevis)",
                        "code": "&#x1F1F0;&#x1F1F3;"
                    },
                    {
                        "title": "Flag of St. Lucia",
                        "slug": "(flag-of-st.-lucia)",
                        "code": "&#x1F1F1;&#x1F1E8;"
                    },
                    {
                        "title": "Flag of St. Pierre & Miquelon",
                        "slug": "(flag-of-st.-pierre-&-miquelon)",
                        "code": "&#x1F1F5;&#x1F1F2;"
                    },
                    {
                        "title": "Flag of St. Vincent & Grenadines",
                        "slug": "(flag-of-st.-vincent-&-grenadines)",
                        "code": "&#x1F1FB;&#x1F1E8;"
                    },
                    {
                        "title": "Flag of Samoa",
                        "slug": "(flag-of-samoa)",
                        "code": "&#x1F1FC;&#x1F1F8;"
                    },
                    {
                        "title": "Flag of San Marino",
                        "slug": "(flag-of-san-marino)",
                        "code": "&#x1F1F8;&#x1F1F2;"
                    },
                    {
                        "title": "Flag of São Tomé & Príncipe",
                        "slug": "(flag-of-são-tomé-&-príncipe)",
                        "code": "&#x1F1F8;&#x1F1F9;"
                    },
                    {
                        "title": "Flag of Saudi Arabia",
                        "slug": "(flag-of-saudi-arabia)",
                        "code": "&#x1F1F8;&#x1F1E6;"
                    },
                    {
                        "title": "Flag of Senegal",
                        "slug": "(flag-of-senegal)",
                        "code": "&#x1F1F8;&#x1F1F3;"
                    },
                    {
                        "title": "Flag of Serbia",
                        "slug": "(flag-of-serbia)",
                        "code": "&#x1F1F7;&#x1F1F8;"
                    },
                    {
                        "title": "Flag of Seychelles",
                        "slug": "(flag-of-seychelles)",
                        "code": "&#x1F1F8;&#x1F1E8;"
                    },
                    {
                        "title": "Flag of Sierra Leone",
                        "slug": "(flag-of-sierra-leone)",
                        "code": "&#x1F1F8;&#x1F1F1;"
                    },
                    {
                        "title": "Flag of Singapore",
                        "slug": "(flag-of-singapore)",
                        "code": "&#x1F1F8;&#x1F1EC;"
                    },
                    {
                        "title": "Flag of Sint Maarten",
                        "slug": "(flag-of-sint-maarten)",
                        "code": "&#x1F1F8;&#x1F1FD;"
                    },
                    {
                        "title": "Flag of Slovakia",
                        "slug": "(flag-of-slovakia)",
                        "code": "&#x1F1F8;&#x1F1F0;"
                    },
                    {
                        "title": "Flag of Slovenia",
                        "slug": "(flag-of-slovenia)",
                        "code": "&#x1F1F8;&#x1F1EE;"
                    },
                    {
                        "title": "Flag of Solomon Islands",
                        "slug": "(flag-of-solomon-islands)",
                        "code": "&#x1F1F8;&#x1F1E7;"
                    },
                    {
                        "title": "Flag of Somalia",
                        "slug": "(flag-of-somalia)",
                        "code": "&#x1F1F8;&#x1F1F4;"
                    },
                    {
                        "title": "Flag of South Africa",
                        "slug": "(flag-of-south-africa)",
                        "code": "&#x1F1FF;&#x1F1E6;"
                    },
                    {
                        "title": "Flag of South Georgia & South Sandwich Islands",
                        "slug": "(flag-of-south-georgia-&-south-sandwich-islands)",
                        "code": "&#x1F1EC;&#x1F1F8;"
                    },
                    {
                        "title": "Flag of South Korea",
                        "slug": "(flag-of-south-korea)",
                        "code": "&#x1F1F0;&#x1F1F7;"
                    },
                    {
                        "title": "Flag of South Sudan",
                        "slug": "(flag-of-south-sudan)",
                        "code": "&#x1F1F8;&#x1F1F8;"
                    },
                    {
                        "title": "Flag of Spain",
                        "slug": "(flag-of-spain)",
                        "code": "&#x1F1EA;&#x1F1F8;"
                    },
                    {
                        "title": "Flag of Sri Lanka",
                        "slug": "(flag-of-sri-lanka)",
                        "code": "&#x1F1F1;&#x1F1F0;"
                    },
                    {
                        "title": "Flag of Sudan",
                        "slug": "(flag-of-sudan)",
                        "code": "&#x1F1F8;&#x1F1E9;"
                    },
                    {
                        "title": "Flag of Suriname",
                        "slug": "(flag-of-suriname)",
                        "code": "&#x1F1F8;&#x1F1F7;"
                    },
                    {
                        "title": "Flag of Swaziland",
                        "slug": "(flag-of-swaziland)",
                        "code": "&#x1F1F8;&#x1F1FF;"
                    },
                    {
                        "title": "Flag of Sweden",
                        "slug": "(flag-of-sweden)",
                        "code": "&#x1F1F8;&#x1F1EA;"
                    },
                    {
                        "title": "Flag of Switzerland",
                        "slug": "(flag-of-switzerland)",
                        "code": "&#x1F1E8;&#x1F1ED;"
                    },
                    {
                        "title": "Flag of Syria",
                        "slug": "(flag-of-syria)",
                        "code": "&#x1F1F8;&#x1F1FE;"
                    },
                    {
                        "title": "Flag of Taiwan",
                        "slug": "(flag-of-taiwan)",
                        "code": "&#x1F1F9;&#x1F1FC;"
                    },
                    {
                        "title": "Flag of Tajikistan",
                        "slug": "(flag-of-tajikistan)",
                        "code": "&#x1F1F9;&#x1F1EF;"
                    },
                    {
                        "title": "Flag of Tanzania",
                        "slug": "(flag-of-tanzania)",
                        "code": "&#x1F1F9;&#x1F1FF;"
                    },
                    {
                        "title": "Flag of Thailand",
                        "slug": "(flag-of-thailand)",
                        "code": "&#x1F1F9;&#x1F1ED;"
                    },
                    {
                        "title": "Flag of Timor-Leste",
                        "slug": "(flag-of-timor-leste)",
                        "code": "&#x1F1F9;&#x1F1F1;"
                    },
                    {
                        "title": "Flag of Togo",
                        "slug": "(flag-of-togo)",
                        "code": "&#x1F1F9;&#x1F1EC;"
                    },
                    {
                        "title": "Flag of Tokelau",
                        "slug": "(flag-of-tokelau)",
                        "code": "&#x1F1F9;&#x1F1F0;"
                    },
                    {
                        "title": "Flag of Tonga",
                        "slug": "(flag-of-tonga)",
                        "code": "&#x1F1F9;&#x1F1F4;"
                    },
                    {
                        "title": "Flag of Trinidad & Tobago",
                        "slug": "(flag-of-trinidad-&-tobago)",
                        "code": "&#x1F1F9;&#x1F1F9;"
                    },
                    {
                        "title": "Flag of Tunisia",
                        "slug": "(flag-of-tunisia)",
                        "code": "&#x1F1F9;&#x1F1F3;"
                    },
                    {
                        "title": "Flag of Turkey",
                        "slug": "(flag-of-turkey)",
                        "code": "&#x1F1F9;&#x1F1F7;"
                    },
                    {
                        "title": "Flag of Turkmenistan",
                        "slug": "(flag-of-turkmenistan)",
                        "code": "&#x1F1F9;&#x1F1F2;"
                    },
                    {
                        "title": "Flag of Turks & Caicos Islands",
                        "slug": "(flag-of-turks-&-caicos-islands)",
                        "code": "&#x1F1F9;&#x1F1E8;"
                    },
                    {
                        "title": "Flag of Tuvalu",
                        "slug": "(flag-of-tuvalu)",
                        "code": "&#x1F1F9;&#x1F1FB;"
                    },
                    {
                        "title": "Flag of Uganda",
                        "slug": "(flag-of-uganda)",
                        "code": "&#x1F1FA;&#x1F1EC;"
                    },
                    {
                        "title": "Flag of Ukraine",
                        "slug": "(flag-of-ukraine)",
                        "code": "&#x1F1FA;&#x1F1E6;"
                    },
                    {
                        "title": "Flag of United Arab Emirates",
                        "slug": "(flag-of-united-arab-emirates)",
                        "code": "&#x1F1E6;&#x1F1EA;"
                    },
                    {
                        "title": "Flag of United Kingdom",
                        "slug": "(flag-of-united-kingdom)",
                        "code": "&#x1F1EC;&#x1F1E7;"
                    },
                    {
                        "title": "Flag of United States",
                        "slug": "(flag-of-united-states)",
                        "code": "&#x1F1FA;&#x1F1F8;"
                    },
                    {
                        "title": "Flag of U.S. Virgin Islands",
                        "slug": "(flag-of-u.s.-virgin-islands)",
                        "code": "&#x1F1FB;&#x1F1EE;"
                    },
                    {
                        "title": "Flag of Uruguay",
                        "slug": "(flag-of-uruguay)",
                        "code": "&#x1F1FA;&#x1F1FE;"
                    },
                    {
                        "title": "Flag of Uzbekistan",
                        "slug": "(flag-of-uzbekistan)",
                        "code": "&#x1F1FA;&#x1F1FF;"
                    },
                    {
                        "title": "Flag of Vanuatu",
                        "slug": "(flag-of-vanuatu)",
                        "code": "&#x1F1FB;&#x1F1FA;"
                    },
                    {
                        "title": "Flag of Vatican City",
                        "slug": "(flag-of-vatican-city)",
                        "code": "&#x1F1FB;&#x1F1E6;"
                    },
                    {
                        "title": "Flag of Venezuela",
                        "slug": "(flag-of-venezuela)",
                        "code": "&#x1F1FB;&#x1F1EA;"
                    },
                    {
                        "title": "Flag of Vietnam",
                        "slug": "(flag-of-vietnam)",
                        "code": "&#x1F1FB;&#x1F1F3;"
                    },
                    {
                        "title": "Flag of Wallis & Futuna",
                        "slug": "(flag-of-wallis-&-futuna)",
                        "code": "&#x1F1FC;&#x1F1EB;"
                    },
                    {
                        "title": "Flag of Western Sahara",
                        "slug": "(flag-of-western-sahara)",
                        "code": "&#x1F1EA;&#x1F1ED;"
                    },
                    {
                        "title": "Flag of Yemen",
                        "slug": "(flag-of-yemen)",
                        "code": "&#x1F1FE;&#x1F1EA;"
                    },
                    {
                        "title": "Flag of Zambia",
                        "slug": "(flag-of-zambia)",
                        "code": "&#x1F1FF;&#x1F1F2;"
                    },
                    {
                        "title": "Flag of Zimbabwe",
                        "slug": "(flag-of-zimbabwe)",
                        "code": "&#x1F1FF;&#x1F1FC;"
                    }
                ]
            }
        ];
      
        this.activeEmojiGroup = null;

        
        this.currentUser = {
            id: new Date().getTime()
        };
        if (config.current_user) {
            this.currentUser = config.current_user;
        }
        this.socket = null;
        this.socketUrl = null;
        if (config.socket_url) {
           this.socketUrl = config.socket_url;
        }
        this.addScript("https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.2.0/socket.io.js", () => {
            this.socket = io(config.socket_url, {
                transports: ['websocket']
            });
            this.socket.on("receive", (data) => {
               //  console.log(data);
                let roomDom = document.querySelector('div.chat-box[data-room="' + data.room.id + '"]');
                
                if (roomDom) {
                    let currentTime = new Date().getTime();
                    this.appendMessage(data.room, {
                        id: 'room-'+data.room.id + '-' + currentTime,
                        senderId: data.sender.id,
                        type: 'TEXT',
                        message: data.message
                    });
   
                    let chatBody = roomDom.querySelector('.chat-body');
                    if (chatBody.classList.contains('minimize-body') && data.sender.id != this.currentUser.id) {
                       document.querySelector('div.chat-box[data-room="' + data.room.id + '"] .chat-header').classList.add('minimize-emit');
                    }
                } else {
                    this.generateChatBox({
                       id : data.room.id,
                       status:true,
                       person: data.sender
                    })
                }
                
            });
            this.socket.on("friend-leave", (data) => {
                let statusSpan = document.querySelector('div.chat-box[data-room="' + data.room.id + '"] span.status');
                statusSpan.classList.remove('online')
               statusSpan.classList.remove('offline');
               statusSpan.classList.add('offline');
            });
            this.socket.on("friend-join", (data) => {
                
               //  console.log(data, data.room.person.id , this.currentUser.id);
               if (data.room.person.id === this.currentUser.id) {
                   this.socket.emit("join", {
                       room: {
                           id: data.room.id,
                           status:true,
                           person: {
                               id: data.currentuser.id,
                               name: data.currentuser.name,
                               photo: data.currentuser.photo,
                           }
                        },
                       currentuser: this.currentUser
                   });
               }
                let statusSpan = document.querySelector('div.chat-box[data-room="' + data.room.id + '"] span.status');
                if (statusSpan && (this.currentUser && (data.currentuser.id != this.currentUser.id)) || data.client_no === 2) {
                    statusSpan.classList.remove('online')
                    statusSpan.classList.remove('offline');
                    statusSpan.classList.add('online');
                }
            });
        });

        this.roomList = [];
        if (config.rooms) {
            this.roomList = config.rooms;
        }
        this.listContainer = null;
        this.chatRoomContainer = null;
        this.chatBoxContainer = null;
        if (config.list_container) {
            this.listContainer = document.querySelector(config.list_container);
            this.chatRoomContainer = document.createElement('div');
            this.chatRoomContainer.classList.add('chat-room-container');
            this.listContainer.appendChild(this.chatRoomContainer);

            this.chatBoxContainer = document.createElement('div');
            this.chatBoxContainer.classList.add('chat-box-container');
            this.listContainer.appendChild(this.chatBoxContainer);
        }

        this.listButtonText = null;
        if (config.list_button_text) {
            this.listButtonText = config.list_button_text;
        }


        this.emojiStatus = true;
        if (config.emoji === false) {
            this.emojiStatus = config.emoji;
        }
        this.activeRoom = {};

    }



    generateChatRoomList() {
        if (this.listContainer && this.roomList && this.roomList.length > 0) {
            let listRow = null;
            for (let roomIndex = 0; roomIndex < this.roomList.length; roomIndex++) {
                let room = this.roomList[roomIndex];
                listRow = document.createElement('div');
                listRow.classList.add('room');
                listRow.setAttribute('data-room', room.id);
                let roomHeading = document.createElement('div');
                roomHeading.classList.add('room-heading');

                let roomPerson = document.createElement('div');
                roomPerson.classList.add('room-person');
                if (room.person.photo) {
                    let personPhoto = document.createElement('img');
                    personPhoto.classList.add('room-person-img')
                    personPhoto.setAttribute('src', room.person.photo);
                    roomPerson.appendChild(personPhoto);
                }
                if (room.person.name) {
                    let personName = document.createElement('span');
                    personName.classList.add('room-person-name');
                    personName.innerText = room.person.name;
                    roomPerson.appendChild(personName);
                }
                roomHeading.appendChild(roomPerson);
                let roomBtn = document.createElement('div');
                roomBtn.classList.add('room-btn')
                let btn = document.createElement('button');
                btn.innerText = this.listButtonText;
                btn.addEventListener('click', () => {
                   this.generateChatBox(room)
               })
                roomBtn.appendChild(btn);
                roomHeading.appendChild(roomBtn);

                listRow.appendChild(roomHeading);
                this.chatRoomContainer.appendChild(listRow);
            }
        }
    }
    generateChatBox(room) {
        this.activeRoom = room;
        if (document.querySelectorAll('div.chat-box[data-room="' + room.id + '"]').length == 0) {

            this.socket.emit("join", {
                room: room,
                currentuser: this.currentUser
            });

            let chatBox = document.createElement('div');
            chatBox.classList.add('chat-box');
            chatBox.setAttribute('data-room', room.id);
            let chatBoxHeader = document.createElement('div');
            chatBoxHeader.classList.add('chat-header');
            let chatBoxHeaderLeft = document.createElement('div');
            chatBoxHeaderLeft.classList.add('chat-header-left');
            let personImgContent = document.createElement('div');
            personImgContent.classList.add('person-img');
            if (room.person.photo) {
               let personPhoto = document.createElement('img');
               personPhoto.setAttribute('src', room.person.photo);
               personImgContent.appendChild(personPhoto);    
           } else {
               let personPhoto = document.createElement('span');
               personPhoto.classList.add('avatar');
               personPhoto.innerHTML = '&#128100;';
               personImgContent.appendChild(personPhoto);    
           }
           let status = document.createElement('span'); 
           status.classList.add('status');
           status.classList.add((room.status) ? 'online' : 'offline');
           personImgContent.appendChild(status);
           chatBoxHeaderLeft.appendChild(personImgContent);
            if (room.person.name) {
                let personNameContent = document.createElement('div');
                personNameContent.classList.add('person-name');
                let name = document.createElement('label'); 
                name.classList.add('person-name');
                name.innerText = room.person.name;
            
                personNameContent.appendChild(name);
                
                chatBoxHeaderLeft.appendChild(personNameContent)
            }
            chatBoxHeader.appendChild(chatBoxHeaderLeft);

            let chatBoxHeaderRight = document.createElement('div'); 
            chatBoxHeaderRight.classList.add('chat-header-right');

            let minimizeDiv = document.createElement('span');
            minimizeDiv.innerHTML = '&#9601;';
            minimizeDiv.addEventListener('click', ()=>{
               let chatBody = document.querySelector('div.chat-box[data-room="' + room.id + '"] .chat-body');
               if (chatBody.classList.contains('minimize-body')) {
                   chatBody.classList.remove('minimize-body');
                   minimizeDiv.innerHTML = '&#9601;';
                   document.querySelector('div.chat-box[data-room="' + room.id + '"] .chat-header').classList.remove('minimize-emit');
               } else {
                   chatBody.classList.add('minimize-body');
                   minimizeDiv.innerHTML = '&#9620;';
                  
               }
               // if (chatBody.style.display === 'none') {
               //     chatBody.style.display = 'block';
               //     chatBody.style.height = 'auto';
               // } else {
               //     chatBody.style.display = 'none';
               //     chatBody.style.height = 0;
               // }
            })
           chatBoxHeaderRight.appendChild(minimizeDiv)

            let closeDiv = document.createElement('span');
            closeDiv.innerHTML = '&#10005;';
            closeDiv.addEventListener('click', ()=>{
               this.chatBoxContainer.removeChild( document.querySelector('div.chat-box[data-room="' + room.id + '"]'));

               // this.socket.emit("leave", {
               //     room: room,
               //     curretuser: this.currentUser
               // });
            });

            chatBoxHeaderRight.appendChild(closeDiv)
            chatBoxHeader.appendChild(chatBoxHeaderRight);

            chatBox.appendChild(chatBoxHeader);

            let chatBoxBody = document.createElement('div');
            chatBoxBody.classList.add('chat-body');
            let chatBoxMessageBody = document.createElement('div');
            chatBoxMessageBody.classList.add('chat-message-body');
            let chatBoxLoaderContainer = document.createElement('div');
            chatBoxLoaderContainer.classList.add('chat-loader-container');
            let chatBoxLoader = document.createElement('div');
            chatBoxLoaderContainer.classList.add('hidden');
            chatBoxLoader.classList.add('chat-loader');
            chatBoxLoaderContainer.appendChild(chatBoxLoader);
            chatBoxMessageBody.appendChild(chatBoxLoaderContainer);

            let chatBoxMessageBodyUl = document.createElement('ul');
            chatBoxMessageBodyUl.classList.add('chat-text-ul');
            chatBoxMessageBodyUl.setAttribute('data-page', 1);
            chatBoxMessageBodyUl.setAttribute('data-total', 0);
            chatBoxMessageBodyUl.addEventListener('scroll', ()=>{
                this.scrollChatHistory(room);
            })
            chatBoxMessageBody.appendChild(chatBoxMessageBodyUl);

            if (this.emojiStatus) {

                let chatBoxEmojiContainer = document.createElement('div');
                chatBoxEmojiContainer.classList.add('emoji-container');
                chatBoxEmojiContainer.setAttribute('data-show', false);

                let emojiContent = document.createElement('ul');
                emojiContent.classList.add('emoji-group-content');
                chatBoxEmojiContainer.appendChild(emojiContent);

                let emojiGroupContent = document.createElement('ul');
                emojiGroupContent.classList.add('emoji-group-container');
                chatBoxEmojiContainer.appendChild(emojiGroupContent);
                for (let i = 0; i < this.emojiList.length; i++) {
                    let emojiLi = document.createElement('li');
                    emojiLi.setAttribute('title', this.emojiList[i].name);
                    let emojiSpan = document.createElement('span');
                    emojiSpan.innerHTML = this.emojiList[i].icon;
                    emojiLi.appendChild(emojiSpan);
                    emojiGroupContent.appendChild(emojiLi);

                    emojiLi.addEventListener('click', ()=>{
                       this.activeEmojiGroup = this.emojiList[i];
                       emojiContent.innerHTML = '';
                       for (let emojiIndex = 0; emojiIndex < this.activeEmojiGroup.smilyList.length; emojiIndex++) {
                           let activeEmoji = this.activeEmojiGroup.smilyList[emojiIndex];
                           let subemojiLi = document.createElement('li');
                           subemojiLi.setAttribute('title', activeEmoji.title);
                           let emojiSpan = document.createElement('span');
                           emojiSpan.innerHTML = activeEmoji.code;
                           subemojiLi.appendChild(emojiSpan);

                           subemojiLi.addEventListener('click', ()=>{
                               let appendHtml = document.querySelector('div.chat-box[data-room="' + room.id + '"] .chat-text').innerHTML;
                               document.querySelector('div.chat-box[data-room="' + room.id + '"] .chat-text').innerHTML = appendHtml + activeEmoji.code;
                           });
                           emojiContent.appendChild(subemojiLi);

                       }
                    });
                
                }
                chatBoxMessageBody.appendChild(chatBoxEmojiContainer);
            }
            chatBoxBody.appendChild(chatBoxMessageBody);

            let chatBoxAction = document.createElement('div');
            chatBoxAction.classList.add('chat-action');
            let chatBoxActionText = document.createElement('div');
            chatBoxActionText.classList.add('chat-text');
            chatBoxActionText.setAttribute('contenteditable', true);
            chatBoxActionText.addEventListener('keydown', (event)=>{
               this.sendMessage(room, event);
            })
            chatBoxAction.appendChild(chatBoxActionText);
            let chatBoxActionButtons = document.createElement('div');
            chatBoxActionButtons.classList.add('chat-action-btns');
            if (this.emojiStatus) {
                let emojiSpan = document.createElement('div');;
                emojiSpan.innerHTML = '&#x1F642;';
                emojiSpan.addEventListener('click', ()=>{
                   this.showHideEmoji();
                })
                chatBoxActionButtons.appendChild(emojiSpan);
            }

            chatBoxAction.appendChild(chatBoxActionButtons);
            chatBoxBody.appendChild(chatBoxAction);


            chatBox.appendChild(chatBoxBody);

            this.chatBoxContainer.appendChild(chatBox);
// get chat history
            this.getChatHistory(room).then((responseData)=>{
               for (let chatIndex = 0; chatIndex < responseData.data.length; chatIndex ++) {
                   let chat = responseData.data[chatIndex];
                   this.appendMessage(room,{
                       id : 'room-'+room.id+'-'+chat.id,
                       senderId: chat.send_user_id,
                       type: (chat.type == 0)?'TEXT':'MEDIA',
                       message: chat.message}, true);
               }
               chatBoxMessageBodyUl.setAttribute('data-page', 2);
               chatBoxMessageBodyUl.setAttribute('data-total', responseData.total);
               let ulObj = chatBoxMessageBodyUl.lastChild;
               if (ulObj){
                   setTimeout(() => {
                       ulObj.scrollIntoView();
                   }, 20);
               }
            });
        }
    }

    showHideEmoji(onlyHide = false) {
        let emojiContainer = document.querySelector('div.chat-box[data-room="' + this.activeRoom.id + '"] .emoji-container');
        if (onlyHide === true) {
            emojiContainer.setAttribute('data-show', false)
        } else {
            if (emojiContainer.getAttribute('data-show') == 'true') {
                emojiContainer.setAttribute('data-show', false)
            } else {
                emojiContainer.setAttribute('data-show', true);
            }
        }
    }

    sendMessage(room, e) {
        if (e.which == 13) {
           
            let text = encodeURIComponent(e.target.innerText);
            if (text) {
                let currentTime = new Date().getTime();
                let message = e.target.innerText;
                e.target.innerText = '';
                this.socket.emit("send", {
                    room: room,
                    sender: this.currentUser,
                    time: currentTime,
                    message: message
                });
                this.showHideEmoji(true);
            }
            e.preventDefault();
        }
    }

    appendMessage(room, message, history=false) {
        if (document.querySelectorAll("#" + message.id).length == 0) {
           
            let messageLi = document.createElement('li');
            messageLi.classList.add((message.senderId === this.currentUser.id) ? 'own' : 'friend');
            messageLi.classList.add('message');

         
            let msgText = document.createElement('div');
            msgText.classList.add('msg-txt');

           if (message.type === 'TEXT') {
                msgText.innerText = message.message;
            }
            /*else if (message.type === 'MEDIA') {
                if (message.message.file_name) {
                    let media = $("<div/>").addClass((message.message.is_image || message.message.is_temp_image) ? 'mediaImage' : '')

                    let mediaAnchor = $("<a/>").prop('href', message.message.file_name).prop('target', '_blank');
                    if (message.message.is_image || message.message.is_temp_image) {
                        mediaAnchor.append($("<img/>").prop('src', message.message.file_name));
                    } else {
                        mediaAnchor.text(message.message.name);
                    }
                    msgText.append(media);
                } else {
                    msgText.append(
                        $("<div/>").append(
                            $("<span/>").addClass('msg-err').text('🚫 Old file removed')
                        )
                    )
                }
            }*/
            messageLi.appendChild(msgText);
            let messageRoomUl = document.querySelector('div.chat-box[data-room="' + room.id + '"] .chat-text-ul');
            if (!history) {
                messageRoomUl.appendChild(messageLi);
                setTimeout(() => {
                    var objDiv = messageRoomUl.lastChild;
                    objDiv.scrollIntoView();
                }, 20);
            } else {
                if (messageRoomUl.firstChild) {
                   messageRoomUl.insertBefore(messageLi, messageRoomUl.firstChild);
                } else {
                   messageRoomUl.appendChild(messageLi);
                }
            }
        }


    }

    readJSONFile(file, callback) {
       var rawFile = new XMLHttpRequest();
       rawFile.overrideMimeType("application/json");
       rawFile.open("GET", file, true);
       rawFile.onreadystatechange = function() {
           if (rawFile.readyState === 4 && rawFile.status == "200") {
               callback(rawFile.responseText);
           }
       }
       rawFile.send(null);
   }

   addScript(path, callback) {
       
       const script = document.createElement('script');
       script.setAttribute('src',path);
       document.head.appendChild(script);
       script.onload = ()=>{
           callback();
       }
   
   }
    scrollChatHistory(room) {
        var objDiv = document.querySelector('div.chat-box[data-room="' + room.id + '"] .chat-text-ul');
        let page = Number(objDiv.getAttribute('data-page'));
        let total = Number(objDiv.getAttribute('data-total'));
        if (objDiv.scrollTop == 0) {
            if (total > 0 && objDiv.childElementCount < total ) {
               this.getChatHistory(room, page).then((responseData)=>{
                   for (let chatIndex = 0; chatIndex < responseData.data.length; chatIndex ++) {
                       let chat = responseData.data[chatIndex];
                       this.appendMessage(room,{
                           id : 'room-'+room.id+'-'+chat.id,
                           senderId: chat.send_user_id,
                           type: (chat.type == 0)?'TEXT':'MEDIA',
                           message: chat.message}, true);
                   }
                   objDiv.setAttribute('data-page', (page+1));
                   objDiv.setAttribute('data-total', responseData.total);
               });
           }
        }
    }

    getChatHistory(room, page=1) {
       return new Promise((resolve, reject) => {
           var loader = document.querySelector('div.chat-box[data-room="' + room.id + '"] .chat-loader-container');
           loader.classList.remove('hidden');

           var xhttp = new XMLHttpRequest();
           xhttp.responseType = 'json';
           xhttp.open('GET', this.socketUrl+'chat-history/'+room.id+'/'+page, true);
           xhttp.send();
           xhttp.onreadystatechange = function () {
               if (this.readyState == 4) {
                   if (this.status == 200) {
                       resolve(this.response);
                   } else {
                       resolve('something error');
                   }
                   loader.classList.add('hidden');
               }
           }
       });

    }
}