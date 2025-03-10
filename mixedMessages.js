const motivationalQuotes = [
	// "Deep" Motivational Quotes
	[
	`“We cannot solve problems with the kind of thinking we employed when we came up with them.” —Albert Einstein`,
	`“Learn as if you will live forever, live like you will die tomorrow.” —Mahatma Gandhi`,
	`“Stay away from those people who try to disparage your ambitions. Small minds will always do that, but great minds will give you a feeling that you can become great too.” —Mark Twain`,
	`“When you give joy to other people, you get more joy in return. You should give a good thought to the happiness that you can give out.” —Eleanor Roosevelt`,
	`“When you change your thoughts, remember to also change your world.” —Norman Vincent Peale`,
	`“It is only when we take chances that our lives improve. The initial and the most difficult risk we need to take is to become honest.” —Walter Anderson`,
	`“Nature has given us all the pieces required to achieve exceptional wellness and health, but has left it to us to put these pieces together.” —Diane McLaren`,
	],
	// Motivational quotes about success
	[
	`“Success is not final; failure is not fatal: It is the courage to continue that counts.” —Winston Churchill`,
	`“It is better to fail in originality than to succeed in imitation.” —Herman Melville`,
	`“The road to success and the road to failure are almost exactly the same.” —Colin R. Davis`,
	`“Success usually comes to those who are too busy to be looking for it.” —Henry David Thoreau`,
	`“Develop success from failures. Discouragement and failure are two of the surest stepping stones to success.” —Dale Carnegie`,
	`“Nothing in the world can take the place of persistence. Talent will not; nothing is more common than unsuccessful men with talent. Genius will not; unrewarded genius is almost a proverb. Education will not; the world is full of educated derelicts. The slogan ‘Press On’ has solved and always will solve the problems of the human race.” —Calvin Coolidge`,
	`“There are three ways to ultimate success: The first way is to be kind. The second way is to be kind. The third way is to be kind.” —Mister Rogers`,
	`“Success is peace of mind, which is a direct result of self-satisfaction in knowing you made the effort to become the best of which you are capable.” —John Wooden`,
	`“I never dreamed about success. I worked for it.” —Estée Lauder`,
	`“Success is getting what you want; happiness is wanting what you get.”―W. P. Kinsella`,
	],
	// Motivational quotes for personal life
	[
	`“The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty.” —Winston Churchill`,
	`“Don’t let yesterday take up too much of today.” —Will Rogers`,
	`“You learn more from failure than from success. Don’t let it stop you. Failure builds character.” —Unknown`,
	`“If you are working on something that you really care about, you don’t have to be pushed. The vision pulls you.” —Steve Jobs`,
	`“Experience is a hard teacher because she gives the test first, the lesson afterward.” ―Vernon Sanders Law`,
	`“To know how much there is to know is the beginning of learning to live.” —Dorothy West`,
	`“Goal setting is the secret to a compelling future.” —Tony Robbins`,
	],
	// Motivational quotes for work
	[
	`“Concentrate all your thoughts upon the work in hand. The sun’s rays do not burn until brought to a focus.” —Alexander Graham Bell`,
	`“Either you run the day or the day runs you.” —Jim Rohn`,
	`“I’m a great believer in luck, and I find the harder I work, the more I have of it.” —Thomas Jefferson`,
	`“When we strive to become better than we are, everything around us becomes better too.” —Paulo Coelho`,
	`“Opportunity is missed by most people because it is dressed in overalls and looks like work.” —Thomas Edison`,
	`“Setting goals is the first step in turning the invisible into the visible.” —Tony Robbins`,
	`“Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. If you haven’t found it yet, keep looking. Don’t settle. As with all matters of the heart, you’ll know when you find it.” —Steve Jobs`,
	],
	// Motivational quotes for women
	[
	`“Women challenge the status quo because we are never it.” —Cindy Gallop`,
	`“We don’t just sit around and wait for other people. We just make, and we do.” —Arlan Hamilton`,
	`“Think like a queen. A queen is not afraid to fail. Failure is another stepping stone to greatness.” —Oprah Winfrey`,
	`“The strongest actions for a woman is to love herself, be herself and shine amongst those who never believed she could.” —Unknown`,
	`“Whenever you see a successful woman, look out for three men who are going out of their way to try to block her.” —Yulia Tymoshenko`,
	`“Some women choose to follow men, and some choose to follow their dreams. If you’re wondering which way to go, remember that your career will never wake up and tell you that it doesn’t love you anymore.” —Lady Gaga`,
	`“The thing women have yet to learn is nobody gives you power. You just take it.” ― Roseanne Barr`,
	`“If they don’t give you a seat at the table, bring a folding chair.” ―Shirley Chisholm`,
	`“I raise up my voice—not so that I can shout, but so that those without a voice can be heard. … We cannot all succeed when half of us are held back.” ― Malala Yousafzai`,
	`“When a woman becomes her own best friend, life is easier.” —Diane Von Furstenberg`,
	`“If you want something said, ask a man; if you want something done, ask a woman.” —Margaret Thatcher`,
	`“We need women at all levels, including the top, to change the dynamic, reshape the conversation, to make sure women’s voices are heard and heeded, not overlooked and ignored.” —Sheryl Sandberg`,
	`“It took me quite a long time to develop a voice, and now that I have it, I am not going to be silent.” —Madeleine Albright`,
	`“Women must learn to play the game as men do.” —Eleanor Roosevelt`,
	`“I swear, by my life and my love of it, that I will never live for the sake of another man, nor ask another man to live for mine.” —Ayn Rand`,
	],
	// Motivational quotes for men
	[
	`“He who conquers himself is the mightiest warrior.” —Confucius`,
	`“Try not to become a man of success, but rather become a man of value.” —Albert Einstein`,
	`“One man with courage makes a majority.” —Andrew Jackson`,
	`“One secret of success in life is for a man to be ready for his opportunity when it comes.” —Benjamin Disraeli`,
	`“A man who has committed a mistake and doesn’t correct it is committing another mistake.” —Confucius Kongzi`,
	`“The successful man will profit from his mistakes and try again in a different way.” —Dale Carnegie`,
	`“A successful man is one who can lay a firm foundation with the bricks others have thrown at him.” —David Brinkley`,
	`“He is a wise man who does not grieve for the things which he has not, but rejoices for those which he has.” —Epictetus`,
	],
	// Funny motivational quotes
	[
	`“The elevator to success is out of order. You’ll have to use the stairs, one step at a time.” —Joe Girard`,
	`“Be a positive energy trampoline—absorb what you need and rebound more back.” —Dave Carolan`,
	`“People often say that motivation doesn’t last. Well, neither does bathing—that’s why we recommend it daily.” —Zig Ziglar`,
	`“Work until your bank account looks like a phone number.” —Unknown`,
	`“I am so clever that sometimes I don’t understand a single word of what I am saying.” —Oscar Wilde`,
	`“People say nothing is impossible, but I do nothing every day.” —Winnie the Pooh`,
	`“Life is like a sewer … what you get out of it depends on what you put into it.” —Tom Lehrer`,
	`“I always wanted to be somebody, but now I realize I should have been more specific.” —Lily Tomlin`,
	],
];

// Returns a random number between 0 and number, excluding number
const getRandomNumber = (number) => {
	return Math.floor(Math.random() * number);
}

