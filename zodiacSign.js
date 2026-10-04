import { LightningElement, track } from 'lwc';

export default class ZodiacSign extends LightningElement {

    @track userInfo = {};
    
    zodiaczsign = [
        { 
            name: 'Capricorn', 
            startMonth: 11, startDay: 22, 
            endMonth: 0, endDay: 19, 
            icon: 'utility:frozen', 
            traits: 'You are a disciplined, ambitious, and highly practical achiever who works tirelessly to build a secure, successful, and lasting legacy; your unmatched resilience allows you to climb any mountain life throws at you, but you often find it difficult to turn off your work brain and simply enjoy the present moment.'
        },
        { 
            name: 'Aquarius', 
            startMonth: 0, startDay: 20, 
            endMonth: 1, endDay: 18, 
            icon: 'utility:world', 
            traits: 'You are an innovative, fiercely independent, and forward-thinking humanitarian who values originality, intellectual freedom, and collective progress above all; you love breaking traditional molds and thinking outside the box, though your hyper-logical approach can sometimes make you appear emotionally detached to others.'
        },
        { 
            name: 'Pisces', 
            startMonth: 1, startDay: 19, 
            endMonth: 2, endDay: 20, 
            icon: 'utility:animal_and_nature', 
            traits: 'You are a deeply empathetic, imaginative, and spiritually attuned dreamer who navigates the world with an incredibly compassionate and artistic heart; you feel the emotions of the world around you with intense clarity, which gives you beautiful creative gifts but often requires you to escape into your own head to recharge.' 
        },
        { 
            name: 'Aries', 
            startMonth: 2, startDay: 21, 
            endMonth: 3, endDay: 19, 
            icon: 'utility:bold', 
            traits: 'You are a bold, passionate, and fiercely independent leader who thrives on taking action and facing new challenges head-on; your ultimate driving force is the thrill of the chase and the desire to blaze your own trail, though you sometimes find it hard to slow down and practice patience.'
        },
        { 
            name: 'Taurus', 
            startMonth: 3, startDay: 20, 
            endMonth: 4, endDay: 20, 
            icon: 'utility:anchor', 
            traits: 'You are a deeply grounded, patient, and reliable individual who values stability, comfort, and the finer things in life; you possess an unstoppable work ethic and immense loyalty to those you love, but your stubborn nature means you fiercely resist change until you are absolutely ready for it.'
        },
        { 
            name: 'Gemini', 
            startMonth: 4, startDay: 21, 
            endMonth: 5, endDay: 20, 
            icon: 'utility:groups', 
            traits: 'You are a highly adaptable, witty, and curious intellectual who loves socializing, sharing ideas, and exploring new perspectives; your mind moves at lightning speed, making you a master communicator, though you constantly battle a restless spirit that gets bored easily when things become routine.' 
        },
        { 
            name: 'Cancer', 
            startMonth: 5, startDay: 21, 
            endMonth: 6, endDay: 22, 
            icon: 'utility:shield', 
            traits: 'You are a deeply intuitive, nurturing, and fiercely protective soul who treasures deep emotional connections and a peaceful home life; you act as the emotional anchor for everyone around you, but you often hide behind a tough outer shell to guard your incredibly sensitive and vulnerable heart.'
        },
        { 
            name: 'Leo', 
            startMonth: 6, startDay: 23, 
            endMonth: 7, endDay: 22, 
            icon: 'utility:power', 
            traits: 'You are a charismatic, generous, and confident individual who naturally commands the spotlight and leads with a big, loyal heart; your vibrant energy inspires others to be their best selves, though your deep need for appreciation means you can take criticism or perceived slights heavily to heart.'
        },
        { 
            name: 'Virgo', 
            startMonth: 7, startDay: 23, 
            endMonth: 8, endDay: 22, 
            icon: 'utility:classic_interface', 
            traits: 'You are an analytical, dedicated, and organized perfectionist who expresses care through practical help and meticulous attention to detail; you are the ultimate problem-solver who can fix almost anything, but you constantly struggle with an inner critic that demands absolute perfection from yourself and others.'
        },
        { 
            name: 'Libra', 
            startMonth: 8, startDay: 23, 
            endMonth: 9, endDay: 22, 
            icon: 'utility:metrics', 
            traits: 'You are a charming, diplomatic, and artistic peacemaker who constantly strives for balance, harmony, and fairness in your relationships; you excel at seeing every side of a situation and bringing people together, though your intense hatred of conflict can sometimes make you indecisive or prone to people-pleasing.' 
        },
        { 
            name: 'Scorpio', 
            startMonth: 9, startDay: 23, 
            endMonth: 10, endDay: 21, 
            icon: 'utility:bug', 
            traits: 'You are an intensely passionate, mysterious, and emotionally deep force who possesses incredible resilience and razor-sharp intuition; you seek absolute honesty and deep psychological bonds in life, making you a fiercely loyal ally, but you rarely forget a betrayal and fiercely guard your private world.' 
        },
        { 
            name: 'Sagittarius', 
            startMonth: 10, startDay: 22, 
            endMonth: 11, endDay: 21, 
            icon: 'utility:forward', 
            traits: 'You are an optimistic, free-spirited, and adventurous philosopher who is driven by an endless quest for personal freedom, knowledge, and truth; your contagious enthusiasm and blunt honesty make you a joy to be around, though your craving for the next big adventure can make you run away from commitments.' 
        }
    ];

    userName; 
    birthDate;

    handleNameChange(event){
       this.userName = event.target.value;
    }

    handleBirthdateChange(event){
          this.birthDate = event.target.value;
    }

    Hundlesubmit(){
       if (!this.birthDate) return;

       let userDOB = new Date(this.birthDate);
       
       const usermonth = userDOB.getMonth(); 
       const userdate = userDOB.getDate();

       this.userInfo = this.checkZodiacSign(usermonth, userdate);
    }

    checkZodiacSign(month, date){
        for(let zsign of this.zodiaczsign){
            const matchStartPeriod = (month === zsign.startMonth && date >= zsign.startDay);
            const matchEndPeriod = (month === zsign.endMonth && date <= zsign.endDay);

            if(matchStartPeriod || matchEndPeriod) {
                return zsign;
            }
        }
        return {}; 
    }
}

