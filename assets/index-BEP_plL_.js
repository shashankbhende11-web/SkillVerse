var e=Object.defineProperty,t=(t,n)=>{let r={};for(var i in t)e(r,i,{get:t[i],enumerable:!0});return n||e(r,Symbol.toStringTag,{value:`Module`}),r};(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var n=`skillverse_db`,r={users:[{id:`admin_user`,name:`SkillVerse Administrator`,username:`admin`,email:`admin@skillverse.com`,role:`admin`,avatar:`https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200`,coverImage:`https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=600`,bio:`Chief System Administrator for SkillVerse Global Network.`,education:[{degree:`M.S. in Computer Science`,school:`Stanford University`,year:`2018`}],experience:[{role:`System Administrator`,company:`SkillVerse Core`,years:`2024 - Present`}],languages:[`English`],skillsTeach:[`Full Stack`,`System Architecture`,`Security`],skillsLearn:[`AI`],projects:[{title:`SkillVerse Platform`,description:`Global skill exchange ecosystem.`,link:`#`}],certificates:[{title:`Certified Kubernetes Administrator`,issuer:`CNCF`,date:`2023`}],scores:{security:99,architecture:98},ratings:5,reviews:[],badges:[`Platform Admin`,`Verified Staff`],credits:1e3,xp:5e3,streak:30,level:25,isVerified:!0,aiScore:99,availability:{days:[`Monday`,`Tuesday`,`Wednesday`,`Thursday`,`Friday`],hours:[`09:00 - 18:00`]},socials:{github:`https://github.com`,linkedin:`https://linkedin.com`},portfolioStrength:100},{id:`mentor_alex`,name:`Sanskrutii Tidke`,email:`sanskrutii@skillverse.io`,role:`Both`,avatar:`https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200`,coverImage:`https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=600`,bio:`Senior Full Stack Architect & Tech Speaker. Former Tech Lead at Stripe. I love breaking down complex programming concepts and building high-performance web systems.`,education:[{degree:`B.S. in Computer Science`,school:`Stanford University`,year:`2016`}],experience:[{role:`Senior Software Engineer`,company:`Stripe`,years:`2020 - 2024`},{role:`Software Engineer`,company:`GitHub`,years:`2016 - 2020`}],languages:[`English`,`Spanish`],skillsTeach:[`Web Development`,`Frontend`,`Backend`,`Full Stack`,`DevOps`,`Programming`],skillsLearn:[`Spanish`,`Music`,`Photography`],projects:[{title:`SaaS Starter Kit`,description:`Open source boilerplate built with vanilla JS and CSS.`,link:`#`}],certificates:[{title:`AWS Solutions Architect`,issuer:`Amazon Web Services`,date:`2023`}],scores:{coding:95,webdev:98,devops:88},ratings:4.9,reviews:[{reviewerName:`Harshita Rahangdale`,rating:5,comment:`Sanskrutii is an incredible teacher! She helped me build my first portfolio site from scratch.`,date:`2026-07-10`}],badges:[`Top Mentor`,`Code Warrior`,`Community Ambassador`],credits:120,xp:2450,streak:5,level:12,isVerified:!0,aiScore:94,availability:{days:[`Monday`,`Wednesday`,`Friday`],hours:[`09:00 - 12:00`,`14:00 - 17:00`]},socials:{github:`https://github.com`,linkedin:`https://linkedin.com`,twitter:`https://twitter.com`},portfolioStrength:88},{id:`mentor_elena`,name:`Harshita Rahangdale`,email:`harshita@skillverse.io`,role:`Both`,avatar:`https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200`,coverImage:`https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=600`,bio:`Professional Concert Pianist & Traditional Fine Artist. I specialize in impressionistic painting, sketch mastery, and classical music theory.`,education:[{degree:`Master of Fine Arts`,school:`Royal Academy of Arts`,year:`2018`}],experience:[{role:`Lead Illustrator`,company:`Freelance Creative`,years:`2019 - Present`},{role:`Piano Instructor`,company:`National Conservatory`,years:`2018 - 2021`}],languages:[`English`,`Russian`,`German`],skillsTeach:[`Drawing`,`Painting`,`Sketching`,`Music`],skillsLearn:[`Web Development`,`AI`,`Graphic Design`],projects:[{title:`Symphony of Colors`,description:`Art collection combining classical music themes with oil canvas.`,link:`#`}],certificates:[{title:`Royal Conservatory Certification`,issuer:`ABRSM`,date:`2017`}],scores:{art:98,music:96},ratings:4.8,reviews:[{reviewerName:`Sanskrutii Tidke`,rating:5,comment:`Harshita is patient and her drawing techniques are magical. Highly recommend!`,date:`2026-07-08`}],badges:[`Creative Genius`,`Top Learner`],credits:75,xp:1820,streak:12,level:8,isVerified:!0,aiScore:92,availability:{days:[`Tuesday`,`Thursday`],hours:[`10:00 - 13:00`,`15:00 - 18:00`]},socials:{behance:`https://behance.net`,instagram:`https://instagram.com`},portfolioStrength:90},{id:`mentor_marcus`,name:`Ashita Wairagade`,email:`ashita@skillverse.io`,role:`Mentor`,avatar:`https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200`,coverImage:`https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=600`,bio:`AI Research Scientist working on Deep Learning architectures. I teach Machine Learning, Python, Neural Networks, and Data Science workflows.`,education:[{degree:`Ph.D. in Computer Science (AI)`,school:`MIT`,year:`2021`}],experience:[{role:`Senior Research Scientist`,company:`OpenAI`,years:`2022 - Present`},{role:`ML Researcher`,company:`Google DeepMind`,years:`2021 - 2022`}],languages:[`English`,`Mandarin`],skillsTeach:[`Programming`,`AI`,`ML`,`Data Science`,`Python`],skillsLearn:[`French`,`Meditation`],projects:[{title:`NeuroTranslate`,description:`Low-latency translation model powered by neural networks.`,link:`#`}],certificates:[{title:`Google Professional ML Engineer`,issuer:`Google Cloud`,date:`2022`}],scores:{ai:99,ml:98,data_science:95},ratings:5,reviews:[],badges:[`AI Architect`,`Verification Badge`],credits:250,xp:3200,streak:3,level:15,isVerified:!0,aiScore:98,availability:{days:[`Saturday`,`Sunday`],hours:[`10:00 - 14:00`]},socials:{github:`https://github.com`,linkedin:`https://linkedin.com`},portfolioStrength:95},{id:`mentor_sarah`,name:`Sarah Jenkins`,email:`sarah@skillverse.io`,role:`Both`,avatar:`https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200`,coverImage:`https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&q=80&w=600`,bio:`Startup Advisor & Venture Creator. Formerly Y-Combinator alumni. Helping builders learn Entrepreneurship, Finance, Pitching, and Scaling.`,education:[{degree:`MBA`,school:`Harvard Business School`,year:`2015`}],experience:[{role:`Managing Director`,company:`Apex Ventures`,years:`2019 - Present`},{role:`Co-Founder`,company:`GrowthScale (YC W16)`,years:`2016 - 2019`}],languages:[`English`,`French`],skillsTeach:[`Business`,`Finance`,`Entrepreneurship`,`Marketing`,`Sales`],skillsLearn:[`Web Development`,`Python`,`UI UX`],projects:[{title:`PitchDeck Builder`,description:`Interactive templates for creating winning investor decks.`,link:`#`}],certificates:[{title:`Certified Financial Analyst (CFA)`,issuer:`CFA Institute`,date:`2017`}],scores:{business:94,marketing:90},ratings:4.7,reviews:[],badges:[`Startup Guru`,`Knowledge Ambassador`],credits:90,xp:1400,streak:8,level:7,isVerified:!0,aiScore:89,availability:{days:[`Monday`,`Tuesday`],hours:[`16:00 - 19:00`]},socials:{linkedin:`https://linkedin.com`,twitter:`https://twitter.com`},portfolioStrength:82}],sessions:[{id:`session_1`,learnerId:`mentor_elena`,learnerName:`Harshita Rahangdale`,mentorId:`mentor_alex`,mentorName:`Sanskrutii Tidke`,skillName:`Web Development`,date:`2026-07-18`,time:`10:00 - 11:00`,status:`Accepted`,type:`One-to-One`,roomUrl:`learning-room?sessionId=session_1`,aiNotes:`Focus on flexbox and CSS custom properties.`,creditCost:0},{id:`session_2`,learnerId:`mentor_alex`,learnerName:`Sanskrutii Tidke`,mentorId:`mentor_elena`,mentorName:`Harshita Rahangdale`,skillName:`Painting`,date:`2026-07-20`,time:`15:00 - 16:00`,status:`Pending`,type:`One-to-One`,roomUrl:`learning-room?sessionId=session_2`,aiNotes:``,creditCost:0}],messages:[{id:`msg_1`,sessionId:`session_1`,senderId:`mentor_elena`,senderName:`Harshita Rahangdale`,text:`Hi Sanskrutii! Looking forward to learning CSS tomorrow.`,timestamp:`2026-07-15T14:30:00Z`},{id:`msg_2`,sessionId:`session_1`,senderId:`mentor_alex`,senderName:`Sanskrutii Tidke`,text:`Excited! Have your code editor ready, we will build a glassmorphism card.`,timestamp:`2026-07-15T14:32:00Z`}],notifications:[{id:`notif_1`,userId:`mentor_alex`,text:`Harshita Rahangdale requested a painting session with you.`,type:`request`,date:`2026-07-16T08:00:00Z`,read:!1},{id:`notif_2`,userId:`mentor_elena`,text:`Sanskrutii Tidke accepted your Web Development session request.`,type:`alert`,date:`2026-07-15T15:00:00Z`,read:!0}],communityPosts:[{id:`post_1`,authorId:`mentor_alex`,authorName:`Sanskrutii Tidke`,authorAvatar:`https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200`,category:`Coding Rooms`,title:`Building modern SPAs with pure CSS variables and ES6 imports`,content:`Web frameworks like React are great, but have you tried creating a complete app with pure CSS custom properties and ES6 modules? The speed is outstanding, and it loads in milliseconds. Let me know your thoughts!`,likes:45,replies:[{authorName:`Harshita Rahangdale`,text:`Agree! The transitions are so much smoother without the virtual DOM overhead.`,date:`2026-07-15`}],date:`2026-07-14T10:00:00Z`},{id:`post_2`,authorId:`mentor_marcus`,authorName:`Ashita Wairagade`,authorAvatar:`https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200`,category:`Study Groups`,title:`ML Study Session - Sunday Morning`,content:`Gathering a group this Sunday to go through neural network backpropagation equations on the collaborative whiteboard. Everyone is welcome to join!`,likes:22,replies:[],date:`2026-07-15T16:00:00Z`}],assessments:[{id:`assess_webdev`,title:`Frontend CSS Master Assessment`,category:`Technology`,skill:`Web Development`,difficulty:`Medium`,xpReward:300,questions:[{id:`q1`,question:`Which CSS property is required to enable glassmorphic blur effect?`,options:[`filter: blur()`,`backdrop-filter: blur()`,`opacity`,`background-blur`],correct:1},{id:`q2`,question:`What is the primary difference between CSS Grid and Flexbox?`,options:[`Flexbox is two-dimensional while Grid is one-dimensional`,`Grid is two-dimensional while Flexbox is one-dimensional`,`There is no functional difference`,`Grid only works in dark mode`],correct:1}]},{id:`assess_python`,title:`Python Basic Algorithms`,category:`Programming`,skill:`Programming`,difficulty:`Easy`,xpReward:200,questions:[{id:`q1`,question:`Which of the following creates a list in Python?`,options:[`my_list = {}`,`my_list = []`,`my_list = ()`,`my_list = list<>`],correct:1}]}],certificates:[{id:`cert_1`,userId:`mentor_elena`,userName:`Harshita Rahangdale`,skill:`Web Development`,issuer:`SkillVerse AI`,date:`2026-07-01`,score:98,credentialId:`SV-WD-8392`}],achievements:[{id:`ach_1`,title:`First Exchange`,desc:`Completed your first skill swap session`,icon:`🤝`,unlocked:!0},{id:`ach_2`,title:`Stellar Mentor`,desc:`Maintained a 4.9+ rating over 10 hours`,icon:`⭐`,unlocked:!1},{id:`ach_3`,title:`Brainiac`,desc:`Scored 95%+ on any assessment`,icon:`🧠`,unlocked:!0},{id:`ach_4`,title:`Streak Master`,desc:`Achieved a 10-day active learning streak`,icon:`🔥`,unlocked:!0}]},i=new class{constructor(){this.init()}init(){if(!localStorage.getItem(n))localStorage.setItem(n,JSON.stringify(r));else try{let e=JSON.parse(localStorage.getItem(n)),t=!1,r=e.users.find(e=>e.id===`mentor_elena`);r&&r.name!==`Harshita Rahangdale`&&(r.name=`Harshita Rahangdale`,r.email=`harshita@skillverse.io`,t=!0);let i=e.users.find(e=>e.id===`mentor_alex`);i&&i.name!==`Sanskrutii Tidke`&&(i.name=`Sanskrutii Tidke`,i.email=`sanskrutii@skillverse.io`,t=!0),e.users.find(e=>e.email&&e.email.toLowerCase()===`admin@skillverse.com`)||(e.users.unshift({id:`admin_user`,name:`SkillVerse Administrator`,username:`admin`,email:`admin@skillverse.com`,role:`admin`,avatar:`https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200`,coverImage:`https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=600`,bio:`Chief System Administrator for SkillVerse Global Network.`,education:[{degree:`M.S. in Computer Science`,school:`Stanford University`,year:`2018`}],experience:[{role:`System Administrator`,company:`SkillVerse Core`,years:`2024 - Present`}],languages:[`English`],skillsTeach:[`Full Stack`,`System Architecture`,`Security`],skillsLearn:[`AI`],projects:[{title:`SkillVerse Platform`,description:`Global skill exchange ecosystem.`,link:`#`}],certificates:[{title:`Certified Kubernetes Administrator`,issuer:`CNCF`,date:`2023`}],scores:{security:99,architecture:98},ratings:5,reviews:[],badges:[`Platform Admin`,`Verified Staff`],credits:1e3,xp:5e3,streak:30,level:25,isVerified:!0,aiScore:99,availability:{days:[`Monday`,`Tuesday`,`Wednesday`,`Thursday`,`Friday`],hours:[`09:00 - 18:00`]},socials:{github:`https://github.com`,linkedin:`https://linkedin.com`},portfolioStrength:100}),t=!0);let a=`https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200`,o=e.users.find(e=>e.id===`mentor_marcus`);o&&(o.name!==`Ashita Wairagade`||o.avatar!==a)&&(o.name=`Ashita Wairagade`,o.email=`ashita@skillverse.io`,o.avatar=a,t=!0),e.communityPosts&&e.communityPosts.forEach(e=>{e.authorId===`mentor_marcus`&&e.authorAvatar!==a&&(e.authorAvatar=a,t=!0)}),e.sessions&&e.sessions.forEach(e=>{e.creditCost!==0&&(e.creditCost=0,t=!0),e.learnerId===`mentor_elena`&&e.learnerName!==`Harshita Rahangdale`&&(e.learnerName=`Harshita Rahangdale`,t=!0),e.mentorId===`mentor_elena`&&e.mentorName!==`Harshita Rahangdale`&&(e.mentorName=`Harshita Rahangdale`,t=!0),e.learnerId===`mentor_alex`&&e.learnerName!==`Sanskrutii Tidke`&&(e.learnerName=`Sanskrutii Tidke`,t=!0),e.mentorId===`mentor_alex`&&e.mentorName!==`Sanskrutii Tidke`&&(e.mentorName=`Sanskrutii Tidke`,t=!0)}),t&&(this.saveData(e),localStorage.removeItem(`skillverse_current_user`))}catch(e){console.error(`Migration failed, resetting db`,e),localStorage.setItem(n,JSON.stringify(r)),localStorage.removeItem(`skillverse_current_user`)}}getData(){return this.init(),JSON.parse(localStorage.getItem(n))}saveData(e){localStorage.setItem(n,JSON.stringify(e))}getCurrentUser(){let e=localStorage.getItem(`skillverse_current_user`);return e?JSON.parse(e):null}setCurrentUser(e){localStorage.setItem(`skillverse_current_user`,JSON.stringify(e));let t=this.getData(),n=e.id||e._id,r=t.users.findIndex(e=>e.id&&e.id===n||e._id&&e._id===n);r===-1?t.users.push(e):t.users[r]={...t.users[r],...e},this.saveData(t)}getUsers(){return this.getData().users}getUser(e){return this.getUsers().find(t=>t.id&&t.id===e||t._id&&t._id===e)}updateUser(e,t){let n=this.getData(),r=n.users.findIndex(t=>t.id&&t.id===e||t._id&&t._id===e);if(r!==-1){n.users[r]={...n.users[r],...t},this.saveData(n);let i=this.getCurrentUser(),a=i?i.id||i._id:null;return a&&a===e&&this.setCurrentUser(n.users[r]),n.users[r]}return null}getSessions(){return this.getData().sessions}createSession(e){let t=this.getData(),n={id:`session_`+Date.now(),status:`Pending`,roomUrl:`learning-room?sessionId=session_${Date.now()}`,aiNotes:``,...e};t.sessions.push(n);let r={id:`notif_`+Date.now(),userId:e.mentorId,text:`${e.learnerName} requested a ${e.skillName} session with you.`,type:`request`,date:new Date().toISOString(),read:!1};return t.notifications.push(r),this.saveData(t),n}updateSession(e,t){let n=this.getData(),r=n.sessions.findIndex(t=>t.id===e);if(r!==-1){if(n.sessions[r]={...n.sessions[r],...t},t.status===`Accepted`){let e={id:`notif_`+Date.now(),userId:n.sessions[r].learnerId,text:`${n.sessions[r].mentorName} accepted your session for ${n.sessions[r].skillName}.`,type:`alert`,date:new Date().toISOString(),read:!1};n.notifications.push(e)}return this.saveData(n),n.sessions[r]}return null}getNotifications(e){return this.getData().notifications.filter(t=>t.userId===e)}markNotificationsRead(e){let t=this.getData();t.notifications.forEach(t=>{t.userId===e&&(t.read=!0)}),this.saveData(t)}getPosts(){return this.getData().communityPosts}createPost(e){let t=this.getData(),n={id:`post_`+Date.now(),likes:0,replies:[],date:new Date().toISOString(),...e};return t.communityPosts.unshift(n),this.saveData(t),n}likePost(e){let t=this.getData(),n=t.communityPosts.find(t=>t.id===e);n&&(n.likes+=1,this.saveData(t))}replyToPost(e,t){let n=this.getData(),r=n.communityPosts.find(t=>t.id===e);r&&(r.replies.push({authorName:t.authorName,text:t.text,date:new Date().toISOString().split(`T`)[0]}),this.saveData(n))}getAssessments(){return this.getData().assessments}getCertificates(e){return this.getData().certificates.filter(t=>t.userId===e)}createCertificate(e){let t=this.getData(),n={id:`cert_`+Date.now(),credentialId:`SV-`+Math.floor(1e3+Math.random()*9e3),date:new Date().toISOString().split(`T`)[0],...e};return t.certificates.push(n),this.saveData(t),n}getAchievements(){return this.getData().achievements}getConversations(e){let t=this.getData(),n=t.messages||[],r=t.users||[],i=new Map;n.forEach(t=>{if(t.senderId===e||t.recipientId===e){let n=t.senderId===e?t.recipientId:t.senderId,r=i.get(n);(!r||new Date(t.timestamp)>new Date(r.timestamp))&&i.set(n,t)}});let a=[];for(let[t,o]of i.entries()){let i=r.find(e=>(e.id||e._id)===t);if(i){let r=[e,t].sort().join(`_`),s=n.filter(t=>t.conversationId===r&&t.recipientId===e&&!t.read).length;a.push({conversationId:r,user:i,lastMessage:o,unreadCount:s})}}return a}getMessages(e){return(this.getData().messages||[]).filter(t=>t.conversationId===e)}createMessage(e,t,n,r=null){let i=this.getData();i.messages||=[];let a=[e,t].sort().join(`_`),o=r||(n&&n.includes(`#learning-room`)?n.match(/#learning-room[^\s]*/)?.[0]:null),s={id:`msg_`+Date.now()+`_`+Math.random().toString(36).substring(2,5),conversationId:a,senderId:e,recipientId:t,text:n,roomLink:o||null,timestamp:new Date().toISOString(),read:!1};return i.messages.push(s),this.saveData(i),s}readMessages(e,t){let n=this.getData();n.messages&&(n.messages.forEach(n=>{n.conversationId===e&&n.recipientId===t&&(n.read=!0)}),this.saveData(n))}createLearningRoom(e){let t=this.getData();t.learningRooms||=[];let n={id:`room_`+Date.now(),createdAt:new Date().toISOString(),...e};return t.learningRooms.push(n),this.saveData(t),n}},a=new class{constructor(){this.authListeners=new Set,this.currentUser=null;let e=localStorage.getItem(`skillverse_current_user`);if(e)try{this.currentUser=JSON.parse(e)}catch{this.currentUser=null}this.checkSession()}async checkSession(){let e=localStorage.getItem(`skillverse_jwt_token`);if(!e){this.notifyListeners(null);return}try{let t=await fetch(`http://localhost:5000/api/auth/me`,{headers:{Authorization:`Bearer ${e}`}});if(t.ok){let e=await t.json();if(e.success&&e.user){this.setCurrentUser(e.user);return}}}catch(e){console.warn(`Failed to verify backend session, relying on local storage`,e)}this.notifyListeners(this.currentUser)}getCurrentUser(){let e=localStorage.getItem(`skillverse_current_user`);if(e)try{return JSON.parse(e)}catch{return null}return null}setCurrentUser(e){this.currentUser=e,e?localStorage.setItem(`skillverse_current_user`,JSON.stringify(e)):localStorage.removeItem(`skillverse_current_user`),this.notifyListeners(e)}onAuthChanged(e){return this.authListeners.add(e),e(this.currentUser),()=>this.authListeners.delete(e)}notifyListeners(e){this.currentUser=e;for(let t of this.authListeners)t(e)}async login(e,t){try{let n=await fetch(`http://localhost:5000/api/auth/login`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({email:e,password:t})}),r=await n.json();if(!n.ok)throw Error(r.error||`Login failed.`);return localStorage.setItem(`skillverse_jwt_token`,r.token),localStorage.setItem(`skillverse_current_user`,JSON.stringify(r.user)),this.notifyListeners(r.user),r.user}catch(t){if(t.message?.includes(`Failed to fetch`)||t.message?.includes(`NetworkError`)||t.message?.includes(`Load failed`)){console.warn(`Backend unreachable on port 5000. Checking local mock database fallback...`);let t=i.getUsers().find(t=>t.email.toLowerCase()===e.toLowerCase());if(t){let e=`mock_jwt_token_`+Date.now();return localStorage.setItem(`skillverse_jwt_token`,e),i.setCurrentUser(t),this.notifyListeners(t),t}throw Error(`Cannot connect to backend on port 5000 and user not found locally. Please ensure the backend server is running.`)}throw t}}async loginWithGoogle(){let e=prompt(`Enter your Google Account email to simulate sign in:`,`sanskrutii@skillverse.io`);if(!e)throw Error(`Google login cancelled`);let t=i.getUsers().find(t=>t.email.toLowerCase()===e.toLowerCase());if(t)return i.setCurrentUser(t),this.notifyListeners(t),t;let n=e.split(`@`)[0],r={id:`google_`+Date.now(),name:n.charAt(0).toUpperCase()+n.slice(1),email:e,role:`Both`,avatar:``,coverImage:`https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=600`,bio:`Logged in via Google Identity Connect.`,education:[],experience:[],languages:[`English`],skillsTeach:[],skillsLearn:[],projects:[],certificates:[],scores:{},ratings:5,reviews:[],badges:[`Google User`],credits:50,xp:100,streak:1,level:1,isVerified:!0,aiScore:75,socials:{},portfolioStrength:30};return i.setCurrentUser(r),this.notifyListeners(r),r}async signup(e,t,n,r,a,o=[],s=[],c=[`English`],l=``,u={days:[],hours:[]},d=``){try{let i=await fetch(`http://localhost:5000/api/auth/signup`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({email:e,password:t,name:n,role:r,bio:a,skillsTeach:o,skillsLearn:s,languages:c,country:l,availability:u,username:d})}),f=await i.json();if(!i.ok)throw Error(f.error||`Signup failed.`);return localStorage.setItem(`skillverse_jwt_token`,f.token),localStorage.setItem(`skillverse_current_user`,JSON.stringify(f.user)),this.notifyListeners(f.user),f.user}catch(t){if(t.message?.includes(`Failed to fetch`)||t.message?.includes(`NetworkError`)){console.warn(`Backend unreachable on port 5000 during signup. Creating local profile in mockDb...`);let t={id:`user_`+Date.now(),name:n,username:d||e.split(`@`)[0],email:e,role:r,bio:a||`SkillVerse member`,country:l,languages:c,skillsTeach:o,skillsLearn:s,availability:u,avatar:``,coverImage:`https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=600`,education:[],experience:[],projects:[],certificates:[],scores:{},ratings:5,reviews:[],badges:[`Early Adopter`],credits:50,xp:100,streak:1,level:1,isVerified:r===`admin`,aiScore:75,socials:{},portfolioStrength:25},f=i.getUsers();f.push(t);let p=i.getData();return p.users=f,i.saveData(p),i.setCurrentUser(t),localStorage.setItem(`skillverse_jwt_token`,`mock_jwt_token_`+Date.now()),this.notifyListeners(t),t}throw t}}async sendSMSCode(e,t){return console.log(`Mock SMS OTP sent to: `+e),{confirm:async t=>{if(t===`123456`){let t=`phone_`+Date.now(),n=i.getUsers().find(t=>t.phone===e);if(n)return i.setCurrentUser(n),this.notifyListeners(n),{user:n};let r={id:t,name:`Phone User `+e.slice(-4),email:`phone_${Date.now()}@skillverse.io`,phone:e,role:`Both`,avatar:``,coverImage:`https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=600`,bio:`I joined SkillVerse to share my knowledge.`,education:[],experience:[],languages:[`English`],skillsTeach:[],skillsLearn:[],projects:[],certificates:[],scores:{},ratings:5,reviews:[],badges:[`Phone Verified`],credits:50,xp:100,streak:1,level:1,isVerified:!0,aiScore:70,socials:{},portfolioStrength:20};return i.setCurrentUser(r),this.notifyListeners(r),{user:r}}else throw Error(`Invalid verification code`)}}}async logout(){let e=localStorage.getItem(`skillverse_jwt_token`);if(e)try{await fetch(`http://localhost:5000/api/auth/logout`,{method:`POST`,headers:{Authorization:`Bearer ${e}`}})}catch(e){console.warn(`Backend logout request failed`,e)}localStorage.removeItem(`skillverse_jwt_token`),localStorage.removeItem(`skillverse_current_user`),this.notifyListeners(null)}},o=class{constructor(e,t=`main-content`){this.routes=e,this.container=document.getElementById(t),window.addEventListener(`hashchange`,()=>this.handleRouteChange()),window.addEventListener(`load`,()=>this.handleRouteChange())}parseHash(){let[e,t]=(window.location.hash||`#landing`).split(`?`),n=e.slice(1)||`landing`,r={};if(t){let e=new URLSearchParams(t);for(let[t,n]of e.entries())r[t]=n}return{path:n,params:r}}async handleRouteChange(){let{path:e,params:t}=this.parseHash(),n=this.routes[e]||this.routes.landing,r=a.getCurrentUser();if(n.isPrivate&&!r){window.location.hash=`#auth`;return}if(e===`auth`&&r){window.location.hash=`#dashboard`;return}document.body.classList;let i=document.getElementById(`app`);if(e===`landing`||e===`auth`){i.classList.add(`no-sidebar`);let e=document.getElementById(`app-sidebar`),t=document.getElementById(`app-header`);e&&(e.style.display=`none`),t&&(t.style.display=`none`)}else{i.classList.remove(`no-sidebar`);let e=document.getElementById(`app-sidebar`),t=document.getElementById(`app-header`);e&&(e.style.display=`flex`),t&&(t.style.display=`flex`)}this.container.classList.remove(`page-fade-enter-active`),this.container.classList.add(`page-fade-enter`);try{let r=n.component,i=new r(t);this.container.innerHTML=await i.render(),requestAnimationFrame(()=>{this.container.classList.remove(`page-fade-enter`),this.container.classList.add(`page-fade-enter-active`)}),i.afterRender&&await i.afterRender(),window.lucide&&window.lucide.createIcons(),window.scrollTo(0,0),this.updateSidebarActiveState(e)}catch(e){console.error(`Error rendering page: `,e),this.container.innerHTML=`
        <div class="glass-card text-center" style="max-width:500px; margin: 4rem auto;">
          <h2 style="color:var(--secondary); margin-bottom:1rem;">Oops! Component Error</h2>
          <p style="color:var(--text-muted); margin-bottom:1.5rem;">Failed to load view details.</p>
          <a href="#dashboard" class="btn btn-primary">Back to Dashboard</a>
        </div>
      `}}updateSidebarActiveState(e){document.querySelectorAll(`.sidebar-link`).forEach(t=>{t.getAttribute(`href`)===`#${e}`?t.classList.add(`active`):t.classList.remove(`active`)})}},s=`http://localhost:5000/api`,c=()=>({"Content-Type":`application/json`,Authorization:`Bearer ${localStorage.getItem(`skillverse_jwt_token`)}`}),l=new class{async getUsers(){try{let e=await fetch(`${s}/users`,{headers:c()});if(e.ok)return await e.json()}catch(e){console.error(`Fetch users error:`,e.message)}return i.getUsers()}async getUser(e){try{let t=await fetch(`${s}/users/${e}`,{headers:c()});if(t.ok)return await t.json()}catch(e){console.error(`Fetch user profile error:`,e.message)}return i.getUser(e)}async setUser(e,t){try{let n=await fetch(`${s}/users/${e}`,{method:`PUT`,headers:c(),body:JSON.stringify(t)});if(n.ok){let e=await n.json();return localStorage.setItem(`skillverse_current_user`,JSON.stringify(e)),e}}catch(e){console.error(`Set user profile error:`,e.message)}return i.updateUser(e,t)}async updateUser(e,t){try{let n=await fetch(`${s}/users/${e}`,{method:`PUT`,headers:c(),body:JSON.stringify(t)});if(n.ok){let e=await n.json();return localStorage.setItem(`skillverse_current_user`,JSON.stringify(e)),e}}catch(e){console.error(`Update user profile error:`,e.message)}return i.updateUser(e,t)}async getSessions(e){try{let t=await fetch(`${s}/sessions?userId=${e}`,{headers:c()});if(t.ok)return await t.json()}catch(e){console.error(`Get sessions error:`,e.message)}return i.getSessions().filter(t=>t.learnerId===e||t.mentorId===e)}async createSession(e){try{let t=await fetch(`${s}/sessions`,{method:`POST`,headers:c(),body:JSON.stringify(e)});if(t.ok)return await t.json()}catch(e){console.error(`Create session error:`,e.message)}return i.createSession(e)}async updateSession(e,t){try{let n=await fetch(`${s}/sessions/${e}`,{method:`PUT`,headers:c(),body:JSON.stringify(t)});if(n.ok)return await n.json()}catch(e){console.error(`Update session error:`,e.message)}return i.updateSession(e,t)}async getNotifications(e){return i.getNotifications(e)}async markNotificationsRead(e){i.markNotificationsRead(e)}async getPosts(){try{let e=await fetch(`${s}/posts`,{headers:c()});if(e.ok)return await e.json()}catch(e){console.error(`Get community posts error:`,e.message)}return i.getPosts()}async createPost(e){try{let t=await fetch(`${s}/posts`,{method:`POST`,headers:c(),body:JSON.stringify(e)});if(t.ok)return await t.json()}catch(e){console.error(`Create community post error:`,e.message)}return i.createPost(e)}async likePost(e){try{await fetch(`${s}/posts/${e}/like`,{method:`PUT`,headers:c()})}catch(e){console.error(`Like community post error:`,e.message)}i.likePost(e)}async replyToPost(e,t){try{await fetch(`${s}/posts/${e}/reply`,{method:`POST`,headers:c(),body:JSON.stringify(t)})}catch(e){console.error(`Reply community post error:`,e.message)}i.replyToPost(e,t)}async getAssessments(){return i.getAssessments()}async getCertificates(e){return i.getCertificates(e)}async createCertificate(e){return i.createCertificate(e)}async getAchievements(){return i.getAchievements()}async getConversations(){try{let e=await fetch(`${s}/messages/conversations`,{headers:c()});if(e.ok)return await e.json()}catch{}let e=JSON.parse(localStorage.getItem(`skillverse_current_user`)||`{}`),t=e.id||e._id;return t?i.getConversations(t):[]}async getMessages(e){try{let t=await fetch(`${s}/messages/${e}`,{headers:c()});if(t.ok)return await t.json()}catch{}return i.getMessages(e)}async sendMessage(e,t){try{let n=await fetch(`${s}/messages/send`,{method:`POST`,headers:c(),body:JSON.stringify({recipientId:e,text:t})});if(n.ok)return await n.json()}catch{}let n=JSON.parse(localStorage.getItem(`skillverse_current_user`)||`{}`),r=n.id||n._id;return i.createMessage(r,e,t)}async readMessages(e){try{if((await fetch(`${s}/messages/read`,{method:`PUT`,headers:c(),body:JSON.stringify({conversationId:e})})).ok)return}catch{}let t=JSON.parse(localStorage.getItem(`skillverse_current_user`)||`{}`),n=t.id||t._id;i.readMessages(e,n)}async createLearningRoom(e){try{let t=await fetch(`${s}/learning-rooms/create`,{method:`POST`,headers:c(),body:JSON.stringify(e)});if(t.ok)return await t.json()}catch{}let t=JSON.parse(localStorage.getItem(`skillverse_current_user`)||`{}`);return i.createLearningRoom({...e,mentorId:t.id||t._id})}},u=class{async render(){let e=a.getCurrentUser();if(!e)return``;let t=await l.getNotifications(e.id),n=t.filter(e=>!e.read).length;return`
      <header id="app-header" class="glass-card" style="position: fixed; top: 0; left: 0; right: 0; height: 70px; border-radius: 0; border-bottom: 1px solid var(--glass-border); padding: 0 2rem; display: flex; align-items: center; justify-content: space-between; z-index: 100; box-shadow: 0 4px 20px rgba(0,0,0,0.02); background: rgba(255, 255, 255, 0.7); backdrop-filter: var(--glass-blur);">
        <div style="display: flex; align-items: center; gap: 2rem;">
          <a href="#dashboard" style="display: flex; align-items: center; gap: 0.75rem; text-decoration: none; font-family: 'Outfit', sans-serif; font-size: 1.5rem; font-weight: 800; color: var(--secondary);">
            <div style="width: 32px; height: 32px; border-radius: var(--radius-sm); background: linear-gradient(135deg, var(--primary), var(--secondary)); display: flex; align-items: center; justify-content: center; color: #fff; font-size: 1.1rem;">S</div>
            <span>SkillVerse</span>
          </a>
        </div>

        <div style="display: flex; align-items: center; gap: 1.5rem;">
          <!-- Credits Balance Indicator -->
          <div class="badge badge-credits" style="padding: 0.5rem 1rem; font-size: 0.85rem; display: flex; align-items: center; gap: 0.5rem; cursor: pointer; border-radius: var(--radius-md);" id="header-credits-display">
            <span>🪙</span>
            <span style="font-weight: 700;">${e.credits??e.creditsBalance??0} Credits</span>
          </div>

          <!-- Notification Icon & Bell -->
          <div style="position: relative;">
            <button id="notif-toggle-btn" style="background: none; border: none; font-size: 1.35rem; cursor: pointer; color: var(--text-dark); position: relative; padding: 4px;">
              🔔
              ${n>0?`<span style="position: absolute; top: 0; right: 0; width: 8px; height: 8px; border-radius: 50%; background: #e06c75;"></span>`:``}
            </button>
            
            <!-- Notifications Overlay Dropdown -->
            <div id="notif-dropdown" class="glass-card" style="display: none; position: absolute; top: 45px; right: 0; width: 320px; max-height: 400px; overflow-y: auto; z-index: 1000; padding: 1rem; border-radius: var(--radius-md); box-shadow: 0 10px 40px rgba(0,0,0,0.12); background: rgba(255,255,255,0.92);">
              <h4 style="margin-bottom: 0.75rem; display:flex; justify-content:space-between; align-items:center; color: var(--secondary);">
                <span>Notifications</span>
                ${n>0?`<span style="font-size:0.75rem; background:var(--primary); color:#fff; padding:2px 6px; border-radius:4px;">${n} New</span>`:``}
              </h4>
              <div id="notif-list" style="display:flex; flex-direction:column; gap:0.5rem;">
                ${t.length===0?`
                  <p style="font-size:0.85rem; color:var(--text-muted); text-align:center; padding:1.5rem 0;">No notifications yet.</p>
                `:t.map(e=>`
                  <div style="padding:0.75rem; border-radius:var(--radius-sm); border-bottom:1px solid rgba(0,0,0,0.03); background:${e.read?`transparent`:`rgba(121,163,195,0.08)`}; font-size:0.8rem;">
                    <p style="margin-bottom:2px; color:var(--text-dark);">${e.text}</p>
                    <small style="color:var(--text-muted);">${new Date(e.date).toLocaleDateString()}</small>
                  </div>
                `).join(``)}
              </div>
            </div>
          </div>

          <!-- User Dropdown Menu -->
          <div style="position: relative;">
            <div id="user-profile-menu" style="display: flex; align-items: center; gap: 0.75rem; cursor: pointer; padding: 4px; border-radius: var(--radius-md);">
              <img src="${e.avatar||`data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2379a3c3' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' style='background:%23f5ebe7;padding:4px;border-radius:50%;'><path d='M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2'/><circle cx='12' cy='7' r='4'/></svg>`}" style="width: 36px; height: 36px; border-radius: 50%; object-fit: cover; border: 2px solid var(--primary);" />
              <div style="display: flex; flex-direction: column;" class="no-print">
                <span style="font-size: 0.85rem; font-weight: 600; color: var(--text-dark);">${e.name}</span>
                <span style="font-size: 0.7rem; color: var(--text-muted);">${e.role}</span>
              </div>
            </div>
            
            <div id="profile-dropdown" class="glass-card" style="display: none; position: absolute; top: 48px; right: 0; width: 180px; z-index: 1000; padding: 0.5rem; border-radius: var(--radius-md); box-shadow: 0 10px 40px rgba(0,0,0,0.12); background: rgba(255,255,255,0.95);">
              <a href="#profile" class="dropdown-item" style="display: block; padding: 0.5rem 1rem; color: var(--text-dark); text-decoration: none; font-size: 0.85rem; font-weight: 500; border-radius: var(--radius-sm); transition: background var(--transition-fast);">👤 My Profile</a>
              <a href="#dashboard" class="dropdown-item" style="display: block; padding: 0.5rem 1rem; color: var(--text-dark); text-decoration: none; font-size: 0.85rem; font-weight: 500; border-radius: var(--radius-sm); transition: background var(--transition-fast);">📊 Dashboard</a>
              ${e.role===`admin`?`<a href="#admin" class="dropdown-item" style="display: block; padding: 0.5rem 1rem; color: var(--primary); text-decoration: none; font-size: 0.85rem; font-weight: 600; border-radius: var(--radius-sm); transition: background var(--transition-fast);">🔑 Admin Portal</a>`:``}
              <button id="dropdown-settings-btn" class="dropdown-item" style="display: block; width: 100%; text-align: left; background: none; border: none; padding: 0.5rem 1rem; color: var(--text-dark); font-size: 0.85rem; font-weight: 500; cursor: pointer; border-radius: var(--radius-sm); transition: background var(--transition-fast);">⚙️ Settings</button>
              <hr style="margin: 0.25rem 0; border: none; border-top: 1px solid rgba(0,0,0,0.06);" />
              <button id="logout-btn" class="dropdown-item" style="display: flex; width: 100%; text-align: left; background: none; border: none; padding: 0.5rem 1rem; color: #e06c75; font-size: 0.85rem; font-weight: 600; cursor: pointer; border-radius: var(--radius-sm);">🚪 Logout</button>
            </div>
          </div>
        </div>
      </header>
    `}async afterRender(){let e=a.getCurrentUser();if(!e)return;let t=document.getElementById(`notif-toggle-btn`),n=document.getElementById(`notif-dropdown`);t&&n&&t.addEventListener(`click`,async r=>{r.stopPropagation();let i=n.style.display===`block`;if(n.style.display=i?`none`:`block`,!i){await l.markNotificationsRead(e.id);let n=t.querySelector(`span`);n&&n.remove()}});let r=document.getElementById(`user-profile-menu`),i=document.getElementById(`profile-dropdown`);r&&i&&r.addEventListener(`click`,e=>{e.stopPropagation(),i.style.display=i.style.display===`block`?`none`:`block`}),document.addEventListener(`click`,()=>{n&&(n.style.display=`none`),i&&(i.style.display=`none`)});let o=document.getElementById(`logout-btn`);o&&o.addEventListener(`click`,async()=>{await a.logout(),window.showToast(`Logged out successfully`,`info`),window.location.hash=`#landing`});let s=document.getElementById(`dropdown-settings-btn`);s&&s.addEventListener(`click`,e=>{e.stopPropagation(),this.openAIApiKeyModal(),i&&(i.style.display=`none`)}),document.querySelectorAll(`.dropdown-item`).forEach(e=>{e.addEventListener(`mouseenter`,()=>{e.style.background=`rgba(121, 163, 195, 0.15)`}),e.addEventListener(`mouseleave`,()=>{e.style.background=`transparent`})});let c=document.getElementById(`header-credits-display`);c&&c.addEventListener(`click`,()=>{this.openAIApiKeyModal()})}openAIApiKeyModal(){let e=document.getElementById(`settings-modal-backdrop`);e||(e=document.createElement(`div`),e.id=`settings-modal-backdrop`,e.className=`modal-backdrop`,document.body.appendChild(e));let t=localStorage.getItem(`skillverse_gemini_api_key`)||``;e.innerHTML=`
      <div class="modal-container glass-card" style="max-width:480px;">
        <h3 style="color:var(--secondary); margin-bottom:1rem; display:flex; align-items:center; gap:0.5rem;">
          ⚙️ SkillVerse AI Settings
        </h3>
        <p style="font-size:0.85rem; color:var(--text-muted); margin-bottom:1.5rem; line-height:1.5;">
          Enter your <strong>Google Gemini API Key</strong> to activate live AI evaluations, personalized roadmap generation, and mock interview coaching. If left blank, SkillVerse will operate in smart simulator mode.
        </p>
        <div style="margin-bottom:1.5rem;">
          <label style="display:block; font-size:0.8rem; font-weight:600; color:var(--text-dark); margin-bottom:0.5rem;">Gemini API Key</label>
          <input type="password" id="gemini-key-input" class="glass-input" value="${t}" placeholder="AIzaSy..." />
        </div>
        <div style="display:flex; justify-content:flex-end; gap:0.75rem;">
          <button id="close-settings-modal" class="btn btn-glass">Cancel</button>
          <button id="save-settings-modal" class="btn btn-primary">Save Key</button>
        </div>
      </div>
    `,e.classList.add(`active`);let n=document.getElementById(`close-settings-modal`),r=document.getElementById(`save-settings-modal`),i=document.getElementById(`gemini-key-input`),a=()=>{e.classList.remove(`active`)};n.addEventListener(`click`,a),r.addEventListener(`click`,()=>{let e=i.value.trim();e?(localStorage.setItem(`skillverse_gemini_api_key`,e),window.showToast(`Gemini API key saved! Live AI activated.`,`success`)):(localStorage.removeItem(`skillverse_gemini_api_key`),window.showToast(`Gemini Key removed. Running in simulator mode.`,`info`)),a()})}},d=class{async render(){let e=a.getCurrentUser();return e?`
      <aside id="app-sidebar" class="glass-card no-print" style="position: fixed; top: 70px; left: 0; bottom: 0; width: 260px; border-radius: 0; border-right: 1px solid var(--glass-border); padding: 2rem 1.5rem; display: flex; flex-direction: column; justify-content: space-between; z-index: 90; background: rgba(255, 255, 255, 0.45); backdrop-filter: var(--glass-blur); transition: transform var(--transition-smooth);">
        
        <!-- Navigation Links -->
        <nav style="display: flex; flex-direction: column; gap: 0.5rem; width: 100%;">
          
          <a href="#dashboard" class="sidebar-link active">
            <span class="sidebar-icon">📊</span>
            <span>Dashboard</span>
          </a>

          <a href="#profile" class="sidebar-link">
            <span class="sidebar-icon">👤</span>
            <span>Digital Resume</span>
          </a>

          <a href="#matching" class="sidebar-link">
            <span class="sidebar-icon">🤝</span>
            <span>AI Match & Swap</span>
          </a>

          <a href="#discovery" class="sidebar-link">
            <span class="sidebar-icon">🔍</span>
            <span>Find Mentors</span>
          </a>

          <a href="#learning-room" class="sidebar-link">
            <span class="sidebar-icon">💻</span>
            <span>Learning Room</span>
          </a>

          <a href="#ai-assistant" class="sidebar-link">
            <span class="sidebar-icon">🤖</span>
            <span>AI Career Coach</span>
          </a>

          <a href="#assessments" class="sidebar-link">
            <span class="sidebar-icon">📝</span>
            <span>AI Assessments</span>
          </a>

          <a href="#community" class="sidebar-link">
            <span class="sidebar-icon">💬</span>
            <span>Community Space</span>
          </a>

          <a href="#admin" class="sidebar-link">
            <span class="sidebar-icon">🔑</span>
            <span>Admin Portal</span>
          </a>

        </nav>

        <!-- User Streak Widget -->
        <div class="glass-card" style="padding: 1rem; border-radius: var(--radius-md); display: flex; align-items: center; gap: 0.75rem; background: rgba(235, 205, 183, 0.25); border-color: rgba(235, 205, 183, 0.4);">
          <span style="font-size: 1.75rem;">🔥</span>
          <div>
            <h5 style="margin: 0; color: var(--secondary); font-size: 0.85rem; font-weight: 700;">Daily Streak</h5>
            <p style="margin: 0; color: var(--text-dark); font-size: 0.75rem; font-weight: 600;">${e.streak||1} Days Active</p>
          </div>
        </div>

      </aside>

      <style>
        .sidebar-link {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem 1rem;
          border-radius: var(--radius-md);
          color: var(--text-muted);
          font-family: var(--font-sans);
          font-weight: 600;
          font-size: 0.95rem;
          text-decoration: none;
          transition: all var(--transition-fast);
        }

        .sidebar-link:hover {
          background: rgba(121, 163, 195, 0.1);
          color: var(--secondary);
          transform: translateX(4px);
        }

        .sidebar-link.active {
          background: var(--primary);
          color: #fff;
          box-shadow: 0 4px 12px rgba(121, 163, 195, 0.3);
        }

        .sidebar-link.active .sidebar-icon {
          filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.15));
        }

        .sidebar-icon {
          font-size: 1.15rem;
        }

        @media (max-width: 1024px) {
          #app-sidebar {
            width: 80px;
            padding: 2rem 0.5rem;
            align-items: center;
          }
          #app-sidebar span:not(.sidebar-icon) {
            display: none;
          }
          #app-sidebar .glass-card {
            display: none !important;
          }
          .sidebar-link {
            justify-content: center;
            padding: 0.75rem;
          }
          .sidebar-link:hover {
            transform: none;
          }
        }

        @media (max-width: 768px) {
          #app-sidebar {
            transform: translateX(-100%);
            display: none !important;
          }
        }
      </style>
    `:``}async afterRender(){}};function f(){let e=document.getElementById(`toast-container`);e||(e=document.createElement(`div`),e.id=`toast-container`,document.body.appendChild(e)),window.showToast=(t,n=`success`)=>{let r=document.createElement(`div`);r.className=`toast toast-${n}`;let i=`🔔`;n===`success`&&(i=`✅`),n===`error`&&(i=`❌`),n===`info`&&(i=`ℹ️`),n===`credits`&&(i=`🪙`),r.innerHTML=`
      <div style="display:flex; align-items:center; gap:0.75rem;">
        <span style="font-size:1.25rem;">${i}</span>
        <span style="color:var(--text-dark); font-weight:500; font-size:0.9rem;">${t}</span>
      </div>
      <button style="background:none; border:none; color:var(--text-muted); cursor:pointer; font-size:1.1rem; padding-left:0.5rem;">&times;</button>
    `,r.querySelector(`button`).addEventListener(`click`,()=>{r.classList.remove(`show`),setTimeout(()=>r.remove(),400)}),e.appendChild(r),setTimeout(()=>{r.classList.add(`show`)},50),setTimeout(()=>{r.parentNode&&(r.classList.remove(`show`),setTimeout(()=>r.remove(),400))},4e3)}}var p=new class{constructor(){this.storageKey=`skillverse_gemini_api_key`}getApiKey(){return localStorage.getItem(this.storageKey)||``}setApiKey(e){e?localStorage.setItem(this.storageKey,e):localStorage.removeItem(this.storageKey)}hasLiveAI(){return!!this.getApiKey().trim()}async callGemini(e){let t=this.getApiKey();if(!t)throw Error(`No Gemini API key configured.`);let n=`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${t}`,r=await fetch(n,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({contents:[{parts:[{text:e}]}]})});if(!r.ok){let e=await r.json();throw Error(e.error?.message||`Gemini API error.`)}return(await r.json()).candidates?.[0]?.content?.parts?.[0]?.text||`No response received.`}async generateRoadmap(e){if(this.hasLiveAI()){let t=`Create a detailed, step-by-step learning roadmap for learning the skill "${e}". 
      Format the response using clean GitHub markdown. Include stages, estimated completion times, weekly milestones, recommended projects to build, and resources to use.
      Use professional styling tags (e.g. alerts, bullet points). Keep it actionable.`;try{return await this.callGemini(t)}catch(e){console.warn(`Live Gemini API call failed. Falling back to simulator.`,e)}}return this.simulateRoadmap(e)}async evaluateChallenge(e,t){if(this.hasLiveAI()){let n=`Evaluate the following code submission for the challenge: "${t}".
      Code submitted:
      \`\`\`
      ${e}
      \`\`\`
      
      Please evaluate this code. Provide:
      1. Score (0-100)
      2. Correctness feedback
      3. Code Quality and styling improvements
      4. Suggestions on time/space complexity optimization.
      Format the response in structured markdown.`;try{return await this.callGemini(n)}catch(e){console.warn(`Live Gemini API failed. Falling back to simulator.`,e)}}return this.simulateCodeEvaluation(e,t)}async reviewPortfolio(e){if(this.hasLiveAI()){let t=`Analyze the following professional profile for SkillVerse.
      Name: ${e.name}
      Bio: ${e.bio}
      Skills to teach: ${e.skillsTeach.join(`, `)}
      Skills to learn: ${e.skillsLearn.join(`, `)}
      Experience: ${JSON.stringify(e.experience)}
      Education: ${JSON.stringify(e.education)}
      Certificates: ${JSON.stringify(e.certificates)}
      XP: ${e.xp} | Rating: ${e.ratings}
      
      Review the profile strength. Calculate a new Portfolio Strength Percentage (0-100).
      Provide a breakdown of what they are doing right, and 3 specific actionable tips to improve their professional score and attract more learners/recruiters.
      Include a line saying "PORTFOLIO_STRENGTH: [score]" where [score] is your calculated numeric score.`;try{return await this.callGemini(t)}catch(e){console.warn(`Live Gemini API failed. Falling back to simulator.`,e)}}return this.simulatePortfolioReview(e)}async generateInterviewQuestion(e,t,n=1){if(this.hasLiveAI()){let r=`Generate interview question #${n} for a candidate applying for: "${e}" focusing on the technical skill "${t}". 
      Ask a scenario-based or depth-based question. Provide a short hint, and the expected answer checklist. Format with markdown.`;try{return await this.callGemini(r)}catch(e){console.warn(`Live Gemini API failed. Falling back to simulator.`,e)}}return this.simulateInterview(e,t,n)}simulateRoadmap(e){let t=e.charAt(0).toUpperCase()+e.slice(1);return`# 🗺️ Personalized AI Roadmap: ${t}
    
> [!NOTE]
> This roadmap has been customized based on your profile as a skill exchange participant. Completing milestone projects will automatically reward you with XP and Skill Credits!

## Stage 1: Fundamentals & Setting the Stage (Week 1 - 2)
* **Goal**: Understand core concepts, syntax, and fundamental tooling.
* **Topics to Cover**:
  * Environment setup and package managers
  * Basic structures, syntax guidelines, and logic flows
  * Core layout principles or API configurations
* **Recommended Resource**: Modern documentation pages and interactive tutorial websites.
* **Milestone Project**: Build a single-page interactive utility (e.g. calculator, converter) deploying clean syntax.

## Stage 2: Deep Dive & Intermediate Patterns (Week 3 - 4)
* **Goal**: Build modular code, handle asynchronous events, or implement design patterns.
* **Topics to Cover**:
  * Asynchronous operations & API fetch methods
  * Structuring state data flow
  * Advanced layouts (glassmorphism details, transitions)
* **Milestone Project**: Build a responsive data dashboard integrating a public api feed.

## Stage 3: Professional Workflow & Integrations (Week 5 - 6)
* **Goal**: Write tests, optimize code for speed, and set up deployment templates.
* **Topics to Cover**:
  * Bundlers (e.g. Vite), modular code architecture
  * Security configurations & user auth flows
  * Automated testing scripts
* **Milestone Project**: Deploy a full-stack mockup of a booking or communication platform.

> [!TIP]
> Seek a Skill Exchange partner in the **SkillVerse Discovery Tab** who teaches **${t}** in exchange for skills you specialize in! This boosts learning speed by 2.5x.`}simulateCodeEvaluation(e,t){let n=e.includes(`//`)||e.includes(`/*`)||e.includes(`#`),r=n?92:80;return`# 🤖 AI Assessment Evaluation Result
    
## Final Score: **${r}/100**

> [!TIP]
> Excellent attempt! Your code displays a solid grasp of structural loops and variable assignments.

### Correctness Review
- **Test Cases Passed**: 5/5
- The code handles base constraints and boundary conditions successfully.

### Style and Code Quality
* **Comments/Documentation**: ${n?`Good. Inline comments explain the logical flow clearly.`:`Room for improvement. Add inline code docstrings to explain algorithm helper methods.`}
* **Naming Conventions**: Variables are descriptive and follow standards.

### Optimization Suggestion
\`\`\`javascript
// Current time complexity: O(N^2) due to nested loops.
// Consider utilizing a Hash Map tracker to optimize to O(N) linear time complexity.
\`\`\`

*Rewards Earned: +${r*2} XP, +5 Skill Credits! Certificate available in your Achievements portal.*`}simulatePortfolioReview(e){let t=Math.min(100,Math.max(30,e.skillsTeach.length*10+e.experience.length*15+e.certificates.length*20));return`# 📊 AI Portfolio Review Report: ${e.name}
    
## Calculated Portfolio Strength: **${t}%**

PORTFOLIO_STRENGTH: ${t}

### Key Strengths
- **Diverse Skills**: Excellent list of target skills (${e.skillsTeach.join(`, `)||`None listed yet`}).
- **Verification Status**: ${e.isVerified?`Verified Badge increases profile clicks by 40%.`:`Add professional credentials to unlock the Verified Blue Badge.`}

### Actions to Improve Strength Score
1. **Add Project Portfolios**: Create a specific item inside your projects list displaying repository links or screenshots.
2. **Expand Education**: Include university course completions or online micro-credentials.
3. **Earn SkillVerse Certificates**: Take the AI Skills Assessment test in the dashboard to list verified assessment credentials.`}simulateInterview(e,t,n){return`# 🎙️ AI Mock Interview - Question ${n}
    
### Context: Senior Role - ${t} Specialist

**Question**: 
"Imagine a scenario where your web app experiences a sudden latency spike. Explain how you would isolate the performance issue between client-side assets, API call bottlenecks, and database queries. What browser dev tools or APM metrics would you examine first?"

---

### 💡 Hint
Focus on network timing metrics (TTFB, DOMContentLoaded) and how console profiling can identify long-running scripts.

### Expected Checklist
* [ ] Mentioning Chrome DevTools Network Tab & Performance Profiling.
* [ ] Clarifying TTFB (Time to First Byte) analysis.
* [ ] Discussing database query optimization (indexing, caching).
* [ ] Utilizing console timelines or CPU throttling configurations.`}},m=class{constructor(){this.isOpen=!1,this.messages=[{sender:`AI`,text:`Hello! I am your SkillVerse AI Assistant. How can I help you swap skills, find mentors, or build your portfolio today?`,timestamp:new Date}],this.isTyping=!1,this.container=null}render(){this.container||(this.container=document.createElement(`div`),this.container.id=`global-ai-chatbot`,this.container.style.position=`fixed`,this.container.style.bottom=`2rem`,this.container.style.right=`2rem`,this.container.style.zIndex=`9999`,this.container.style.fontFamily=`'Outfit', sans-serif`,document.body.appendChild(this.container)),this.container.innerHTML=`
      <!-- Chatbot Toggle Floating Button -->
      <button id="chatbot-toggle-btn" class="chatbot-bubble" aria-label="Open AI Assistant">
        <span class="bubble-icon">💬</span>
        <span class="bubble-pulse"></span>
      </button>

      <!-- Chatbot Panel Container -->
      <div id="chatbot-panel" class="chatbot-panel-card ${this.isOpen?`open`:``}">
        <!-- Panel Header -->
        <div class="chatbot-header">
          <div style="display:flex; align-items:center; gap:0.75rem;">
            <div class="bot-avatar">🤖</div>
            <div>
              <h4 style="margin:0; font-size:1rem; font-weight:700; color:var(--text-light);">SkillVerse AI Coach</h4>
              <span style="font-size:0.7rem; color:rgba(255,255,255,0.7); display:flex; align-items:center; gap:0.25rem;">
                <span class="online-indicator"></span> Online
              </span>
            </div>
          </div>
          <button id="chatbot-close-btn" style="background:none; border:none; color:#fff; font-size:1.25rem; cursor:pointer;">&times;</button>
        </div>

        <!-- Panel Body Messages -->
        <div id="chatbot-messages" class="chatbot-messages-body">
          ${this.messages.map(e=>`
            <div class="chat-bubble-row ${e.sender===`User`?`user-row`:`bot-row`}">
              <div class="chat-bubble">
                ${this.parseMessage(e.text)}
              </div>
              <small class="chat-bubble-time">${this.formatTime(e.timestamp)}</small>
            </div>
          `).join(``)}
          
          ${this.isTyping?`
            <div class="chat-bubble-row bot-row" id="chatbot-typing">
              <div class="chat-bubble typing-bubble">
                <span class="dot"></span>
                <span class="dot"></span>
                <span class="dot"></span>
              </div>
            </div>
          `:``}
        </div>

        <!-- Suggestion Chips -->
        <div class="chatbot-suggestions">
          <button class="suggestion-chip" data-query="How does skill swap work?">🤝 How does swapping work?</button>
          <button class="suggestion-chip" data-query="Who are Sanskrutii Tidke and Ashita Wairagade?">👥 View mentors</button>
          <button class="suggestion-chip" data-query="Is mentorship really free?">🪙 Is it free?</button>
        </div>

        <!-- Panel Footer Input -->
        <div class="chatbot-footer">
          <input type="text" id="chatbot-input" placeholder="Type a message..." autocomplete="off" />
          <button id="chatbot-send-btn">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </button>
        </div>
      </div>

      <style>
        .chatbot-bubble {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
          border: none;
          box-shadow: 0 10px 30px rgba(121, 163, 195, 0.4);
          cursor: pointer;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .chatbot-bubble:hover {
          transform: scale(1.1) rotate(5deg);
          box-shadow: 0 12px 35px rgba(121, 163, 195, 0.5);
        }
        .bubble-icon {
          font-size: 1.6rem;
          color: #fff;
        }
        .bubble-pulse {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: var(--primary);
          opacity: 0.4;
          z-index: -1;
          animation: pulse-ring 2s infinite;
        }
        @keyframes pulse-ring {
          0% { transform: scale(0.95); opacity: 0.5; }
          50% { transform: scale(1.2); opacity: 0; }
          100% { transform: scale(0.95); opacity: 0; }
        }

        .chatbot-panel-card {
          position: absolute;
          bottom: 75px;
          right: 0;
          width: 360px;
          height: 480px;
          border-radius: var(--radius-md);
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid var(--glass-border);
          box-shadow: 0 15px 40px rgba(0,0,0,0.15);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          opacity: 0;
          transform: translateY(20px) scale(0.95);
          pointer-events: none;
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .chatbot-panel-card.open {
          opacity: 1;
          transform: translateY(0) scale(1);
          pointer-events: auto;
        }

        .chatbot-header {
          background: linear-gradient(135deg, var(--secondary) 0%, #302623 100%);
          padding: 1rem;
          color: #fff;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .bot-avatar {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(255,255,255,0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.25rem;
        }
        .online-indicator {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #4cd964;
          display: inline-block;
        }

        .chatbot-messages-body {
          flex: 1;
          padding: 1rem;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          background: rgba(255,255,255,0.3);
        }

        .chat-bubble-row {
          display: flex;
          flex-direction: column;
          max-width: 80%;
        }
        .bot-row {
          align-self: flex-start;
        }
        .user-row {
          align-self: flex-end;
          align-items: flex-end;
        }

        .chat-bubble {
          padding: 0.75rem 1rem;
          border-radius: var(--radius-sm);
          font-size: 0.85rem;
          line-height: 1.4;
          word-break: break-word;
        }
        .bot-row .chat-bubble {
          background: rgba(255, 255, 255, 0.9);
          color: var(--text-dark);
          border-bottom-left-radius: 2px;
          border: 1px solid rgba(0,0,0,0.05);
        }
        .user-row .chat-bubble {
          background: var(--primary);
          color: #fff;
          border-bottom-right-radius: 2px;
        }
        .chat-bubble-time {
          font-size: 0.65rem;
          color: var(--text-muted);
          margin-top: 0.2rem;
          padding: 0 0.25rem;
        }

        .chatbot-suggestions {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
          padding: 0.5rem 1rem;
          background: rgba(255,255,255,0.4);
          border-top: 1px solid rgba(0,0,0,0.05);
        }
        .suggestion-chip {
          background: rgba(255, 255, 255, 0.8);
          border: 1px solid rgba(121, 163, 195, 0.25);
          border-radius: 12px;
          padding: 0.3rem 0.6rem;
          font-size: 0.75rem;
          cursor: pointer;
          color: var(--text-muted);
          transition: all 0.2s ease;
          font-family: inherit;
        }
        .suggestion-chip:hover {
          background: var(--primary);
          color: #fff;
          border-color: var(--primary);
        }

        .chatbot-footer {
          display: flex;
          padding: 0.75rem 1rem;
          background: #fff;
          border-top: 1px solid rgba(0,0,0,0.05);
          align-items: center;
          gap: 0.5rem;
        }
        #chatbot-input {
          flex: 1;
          border: 1px solid rgba(0,0,0,0.1);
          border-radius: var(--radius-sm);
          padding: 0.5rem 0.75rem;
          font-size: 0.85rem;
          outline: none;
          transition: border-color 0.2s ease;
          font-family: inherit;
        }
        #chatbot-input:focus {
          border-color: var(--primary);
        }
        #chatbot-send-btn {
          background: var(--primary);
          color: #fff;
          border: none;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: transform 0.2s ease;
        }
        #chatbot-send-btn:hover {
          transform: scale(1.05);
        }

        /* Typing Indicator Bubble */
        .typing-bubble {
          display: flex;
          gap: 3px;
          align-items: center;
          justify-content: center;
          padding: 0.5rem 0.75rem;
        }
        .typing-bubble .dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--text-muted);
          animation: bounce 1.4s infinite ease-in-out both;
        }
        .typing-bubble .dot:nth-child(1) { animation-delay: -0.32s; }
        .typing-bubble .dot:nth-child(2) { animation-delay: -0.16s; }
        @keyframes bounce {
          0%, 80%, 100% { transform: scale(0); }
          40% { transform: scale(1.0); }
        }
      </style>
    `,this.bindEvents()}bindEvents(){let e=this.container.querySelector(`#chatbot-toggle-btn`),t=this.container.querySelector(`#chatbot-close-btn`),n=this.container.querySelector(`#chatbot-send-btn`),r=this.container.querySelector(`#chatbot-input`),i=this.container.querySelector(`#chatbot-panel`);e.addEventListener(`click`,()=>{this.isOpen=!this.isOpen,i.classList.toggle(`open`,this.isOpen),this.isOpen&&(setTimeout(()=>this.scrollMessages(),100),r.focus())}),t.addEventListener(`click`,()=>{this.isOpen=!1,i.classList.remove(`open`)}),n.addEventListener(`click`,()=>this.handleSendMessage()),r.addEventListener(`keydown`,e=>{e.key===`Enter`&&this.handleSendMessage()}),this.container.querySelectorAll(`.suggestion-chip`).forEach(e=>{e.addEventListener(`click`,e=>{let t=e.target.getAttribute(`data-query`);this.sendQuery(t)})})}async sendQuery(e){if(!e.trim())return;this.messages.push({sender:`User`,text:e,timestamp:new Date}),this.renderMessagesOnly(),this.scrollMessages(),this.isTyping=!0,this.renderMessagesOnly(),this.scrollMessages();let t=``;try{t=p.hasLiveAI()?await p.callGemini(e):this.generateSimulatedReply(e)}catch{t=`I'm sorry, I encountered a temporary connection issue. Please feel free to ask me another question.`}setTimeout(()=>{this.isTyping=!1,this.messages.push({sender:`AI`,text:t,timestamp:new Date}),this.renderMessagesOnly(),this.scrollMessages()},800)}handleSendMessage(){let e=this.container.querySelector(`#chatbot-input`),t=e.value.trim();t&&(e.value=``,this.sendQuery(t))}generateSimulatedReply(e){let t=e.toLowerCase();if(t.includes(`swap`)||t.includes(`work`))return`**Skill Swapping** on SkillVerse is direct and mutual! Here is how it works:

1. Browse/Search mentors on the **Discovery** tab.
2. Request a swap. You choose a skill you can teach them in exchange for a skill they teach.
3. Alternatively, schedule for **0 Credits** if you just want general mentorship.
4. Accept requests in your **Dashboard** and meet in our interactive collaborative **Learning Room**!`;if(t.includes(`mentor`)||t.includes(`sanskrutii`)||t.includes(`tidke`)||t.includes(`ashita`)||t.includes(`wairagade`))return`We have outstanding top-tier mentors on SkillVerse!

- **Sanskrutii Tidke**: Expert in Full Stack Web Development, Frontend, and Cloud DevOps. Formerly a Tech Lead at Stripe.
- **Ashita Wairagade**: AI Research Scientist specializing in Deep Learning, Python, and neural networks.

You can connect with either of them directly on the **Discovery** panel!`;if(t.includes(`free`)||t.includes(`charge`)||t.includes(`credit`))return`Yes! **Mentorship on SkillVerse is 100% free of charge**. All mentors offer their expertise for 0 credits. You can teach others to earn credits or swap skills directly without spending any money!`;if(t.includes(`my profile`)||t.includes(`who am i`)||t.includes(`my name`)){let e=a.getCurrentUser();return`Your name is registered as **${e?e.name:`Learner`}**. You are configured as a **${e?e.role:`Both`}** user, which means you can swap and teach. You currently have **${e?e.credits:75} Skill Credits** and **${e?e.xp:1820} XP**!`}return t.includes(`hello`)||t.includes(`hi`)||t.includes(`hey`)?`Hi there! I am ready to guide you. Try asking about our mentors, how skill swaps work, or how to schedule free live sessions!`:`That's an interesting question! I am your SkillVerse coach. You can ask me to help build your professional profile, generate a custom learning roadmap, or search for free skill-swaps with Sanskrutii or Ashita.`}renderMessagesOnly(){let e=this.container.querySelector(`#chatbot-messages`);e&&(e.innerHTML=`
      ${this.messages.map(e=>`
        <div class="chat-bubble-row ${e.sender===`User`?`user-row`:`bot-row`}">
          <div class="chat-bubble">
            ${this.parseMessage(e.text)}
          </div>
          <small class="chat-bubble-time">${this.formatTime(e.timestamp)}</small>
        </div>
      `).join(``)}
      
      ${this.isTyping?`
        <div class="chat-bubble-row bot-row" id="chatbot-typing">
          <div class="chat-bubble typing-bubble">
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
          </div>
        </div>
      `:``}
    `)}scrollMessages(){let e=this.container.querySelector(`#chatbot-messages`);e&&(e.scrollTop=e.scrollHeight)}formatTime(e){return new Date(e).toLocaleTimeString([],{hour:`2-digit`,minute:`2-digit`})}parseMessage(e){return e?e.replace(/\n/g,`<br>`).replace(/\*\*([^*]+)\*\*/g,`<strong>$1</strong>`):``}destroy(){this.container&&=(this.container.remove(),null)}},h=class{constructor(){this.categories=[{name:`Technology`,icon:`💻`,count:124},{name:`Languages`,icon:`🗣️`,count:85},{name:`Creative Arts`,icon:`🎨`,count:96},{name:`Business`,icon:`📈`,count:73},{name:`Academics`,icon:`🎓`,count:110},{name:`Fitness`,icon:`🧘`,count:48},{name:`Hobbies`,icon:`♟️`,count:32}]}async render(){let e=i.getUsers().slice(0,3);return`
      <div style="width:100%; min-height:100vh;">
        <!-- Premium Landing Nav -->
        <nav style="display:flex; justify-content:space-between; align-items:center; padding: 1.5rem 4rem; width:100%; background:rgba(255,255,255,0.25); backdrop-filter:var(--glass-blur); border-bottom:1px solid var(--glass-border); position:fixed; top:0; z-index:100;">
          <div style="display:flex; align-items:center; gap:0.75rem; font-family:'Outfit', sans-serif; font-size:1.5rem; font-weight:800; color:var(--secondary);">
            <div style="width:32px; height:32px; border-radius:var(--radius-sm); background:linear-gradient(135deg, var(--primary), var(--secondary)); display:flex; align-items:center; justify-content:center; color:#fff; font-size:1.1rem;">S</div>
            <span>SkillVerse</span>
          </div>
          <div style="display:flex; align-items:center; gap:2rem;">
            <a href="#discovery" style="text-decoration:none; color:var(--text-dark); font-weight:600; font-size:0.95rem;">Explore Mentors</a>
            <a href="#community" style="text-decoration:none; color:var(--text-dark); font-weight:600; font-size:0.95rem;">Community</a>
            <a href="#auth" class="btn btn-glass" style="padding:0.5rem 1.25rem;">Sign In</a>
            <a href="#auth" class="btn btn-primary" style="padding:0.5rem 1.25rem;">Get Started</a>
          </div>
        </nav>

        <!-- Hero Section -->
        <section class="landing-hero">
          <div style="display:inline-block; padding: 0.35rem 1rem; border-radius:var(--radius-full); background:rgba(121, 163, 195, 0.15); border:1px solid rgba(121, 163, 195, 0.3); color:#4a7d9f; font-size:0.8rem; font-weight:700; text-transform:uppercase; margin-bottom:1.5rem; letter-spacing:0.08em;">
            ✨ Introducing AI Skill Swapping
          </div>
          <h1 class="hero-title">One Profile. Unlimited Skills.<br>Infinite Opportunities.</h1>
          <p class="hero-tagline">SkillVerse is a global platform where every user becomes both a Learner and a Mentor. Exchange knowledge directly or earn Skill Credits by teaching others.</p>
          
          <div style="display:flex; justify-content:center; gap:1.25rem; margin-bottom:4rem;">
            <a href="#auth" class="btn btn-primary" style="font-size:1.05rem; padding:0.9rem 2.25rem;">Swap Skills Now</a>
            <a href="#discovery" class="btn btn-glass" style="font-size:1.05rem; padding:0.9rem 2.25rem;">Meet Mentors</a>
          </div>

          <!-- Interactive Feature Showcase (Glass Cards) -->
          <div class="landing-stats">
            <div class="glass-card stat-card">
              <div class="stat-number">10,000+</div>
              <div class="stat-label">Active Members</div>
            </div>
            <div class="glass-card stat-card">
              <div class="stat-number">15,000+</div>
              <div class="stat-label">Swaps Completed</div>
            </div>
            <div class="glass-card stat-card">
              <div class="stat-number">98%</div>
              <div class="stat-label">AI Match Score</div>
            </div>
            <div class="glass-card stat-card">
              <div class="stat-number">0 Cost</div>
              <div class="stat-label">Direct Skill Swap</div>
            </div>
          </div>
        </section>

        <!-- Skill Categories Grid -->
        <section style="padding:5rem 4rem; max-width:1200px; margin:0 auto;">
          <h2 style="font-family:'Outfit',sans-serif; font-size:2.25rem; font-weight:700; color:var(--secondary); text-align:center; margin-bottom:3rem;">Explore Custom Categories</h2>
          <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(180px, 1fr)); gap:1.5rem;">
            ${this.categories.map(e=>`
              <div class="glass-card glass-card-hover" style="text-align:center; padding:2rem 1.5rem; cursor:pointer;" onclick="window.location.hash='#discovery?category=${e.name}'">
                <div style="font-size:3rem; margin-bottom:1rem; transform:scale(1); transition:transform var(--transition-fast);" onmouseover="this.style.transform='scale(1.2)'" onmouseout="this.style.transform='scale(1)'">${e.icon}</div>
                <h4 style="color:var(--secondary); font-weight:700; font-size:1.05rem; margin-bottom:0.25rem;">${e.name}</h4>
                <small style="color:var(--text-muted);">${e.count} Mentors</small>
              </div>
            `).join(``)}
          </div>
        </section>

        <!-- AI Showcase Feature Section -->
        <section style="padding:6rem 4rem; background:rgba(255,255,255,0.3); backdrop-filter:var(--glass-blur); border-top:1px solid var(--glass-border); border-bottom:1px solid var(--glass-border);">
          <div style="max-width:1100px; margin:0 auto; display:grid; grid-template-columns:1fr 1fr; gap:4rem; align-items:center;">
            <div>
              <div class="badge badge-verified" style="margin-bottom:1rem;">Main USP</div>
              <h2 style="font-family:'Outfit',sans-serif; font-size:2.5rem; color:var(--secondary); font-weight:700; line-height:1.2; margin-bottom:1.5rem;">How does AI Skill Exchange work?</h2>
              <p style="color:var(--text-muted); line-height:1.6; margin-bottom:1.5rem;">Instead of paying for expensive courses, swap your talents. User A teaches Python to User B. In exchange, User B teaches English to User A. No cash required.</p>
              
              <div style="display:flex; flex-direction:column; gap:1.25rem;">
                <div style="display:flex; gap:1rem; align-items:flex-start;">
                  <div style="background:var(--primary); color:#fff; border-radius:50%; width:28px; height:28px; display:flex; align-items:center; justify-content:center; font-weight:bold; flex-shrink:0;">1</div>
                  <div>
                    <h4 style="color:var(--secondary); font-weight:700;">Build your Skill resume</h4>
                    <p style="font-size:0.85rem; color:var(--text-muted);">List your capabilities and skills you want to learn.</p>
                  </div>
                </div>
                <div style="display:flex; gap:1rem; align-items:flex-start;">
                  <div style="background:var(--primary); color:#fff; border-radius:50%; width:28px; height:28px; display:flex; align-items:center; justify-content:center; font-weight:bold; flex-shrink:0;">2</div>
                  <div>
                    <h4 style="color:var(--secondary); font-weight:700;">AI Engine Matches Profiles</h4>
                    <p style="font-size:0.85rem; color:var(--text-muted);">Matches availability, timezone, level, rating, and language compatibility.</p>
                  </div>
                </div>
                <div style="display:flex; gap:1rem; align-items:flex-start;">
                  <div style="background:var(--primary); color:#fff; border-radius:50%; width:28px; height:28px; display:flex; align-items:center; justify-content:center; font-weight:bold; flex-shrink:0;">3</div>
                  <div>
                    <h4 style="color:var(--secondary); font-weight:700;">Schedule & Practice</h4>
                    <p style="font-size:0.85rem; color:var(--text-muted);">Meet in the collaborative video room and complete tests to update your global portfolio.</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Beautiful Visual Simulation Box -->
            <div class="glass-card" style="padding:2.5rem; position:relative; min-height:350px; display:flex; flex-direction:column; justify-content:space-between; box-shadow:0 20px 50px rgba(0,0,0,0.05);">
              <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid rgba(0,0,0,0.05); padding-bottom:1rem; margin-bottom:1.5rem;">
                <span style="font-weight:700; color:var(--secondary);">AI Matching Simulator</span>
                <span class="badge badge-verified">94% Compatibility</span>
              </div>
              <div style="display:flex; justify-content:space-between; align-items:center; gap:1.5rem;">
                <!-- User A Card -->
                <div class="glass-card" style="flex:1; padding:1rem; text-align:center; background:#fff;">
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150" style="width:60px; height:60px; border-radius:50%; object-fit:cover; margin-bottom:0.5rem;" />
                  <h4 style="font-size:0.9rem; color:var(--secondary); margin-bottom:0.25rem;">Alex R.</h4>
                  <div class="badge badge-credits" style="font-size:0.6rem; padding:2px 6px;">Teaches Code</div>
                </div>
                <!-- Swap Arrow -->
                <div style="font-size:2rem; color:var(--primary); animation: bounceX 2s infinite;">↔️</div>
                <!-- User B Card -->
                <div class="glass-card" style="flex:1; padding:1rem; text-align:center; background:#fff;">
                  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150" style="width:60px; height:60px; border-radius:50%; object-fit:cover; margin-bottom:0.5rem;" />
                  <h4 style="font-size:0.9rem; color:var(--secondary); margin-bottom:0.25rem;">Elena R.</h4>
                  <div class="badge badge-credits" style="font-size:0.6rem; padding:2px 6px;">Teaches Art</div>
                </div>
              </div>
              <div style="margin-top:1.5rem; text-align:center;">
                <small style="color:var(--text-muted); font-style:italic;">"Swap session booked for Saturday 10:00 AM."</small>
              </div>
            </div>
          </div>
        </section>

        <!-- Mentor Spotlights Section -->
        <section style="padding:6rem 4rem; max-width:1200px; margin:0 auto;">
          <h2 style="font-family:'Outfit',sans-serif; font-size:2.25rem; font-weight:700; color:var(--secondary); text-align:center; margin-bottom:1rem;">Top Rated Knowledge Swappers</h2>
          <p style="color:var(--text-muted); text-align:center; margin-bottom:3rem;">Meet professionals ready to teach and trade skills today.</p>
          <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(320px, 1fr)); gap:2rem;">
            ${e.map(e=>`
              <div class="glass-card glass-card-hover" style="display:flex; flex-direction:column; justify-content:space-between; padding:2rem;">
                <div>
                  <div style="display:flex; gap:1.25rem; align-items:center; margin-bottom:1.25rem;">
                    <img src="${e.avatar}" style="width:64px; height:64px; border-radius:50%; object-fit:cover; border:2px solid var(--primary);" />
                    <div>
                      <h3 style="font-family:'Outfit',sans-serif; color:var(--secondary); font-size:1.2rem; font-weight:700;">${e.name}</h3>
                      <div style="color:#d4af37; font-size:0.85rem;">⭐ ${e.ratings} (${e.reviews.length} Swaps)</div>
                    </div>
                  </div>
                  <p style="font-size:0.85rem; color:var(--text-muted); line-height:1.5; margin-bottom:1.25rem; min-height:60px;">${e.bio}</p>
                  <div style="margin-bottom:1.5rem;">
                    <div style="font-size:0.75rem; font-weight:700; text-transform:uppercase; color:var(--neutral); margin-bottom:0.5rem;">Teaches:</div>
                    <div style="display:flex; flex-wrap:wrap; gap:0.25rem;">
                      ${e.skillsTeach.map(e=>`<span class="badge badge-verified" style="font-size:0.65rem;">${e}</span>`).join(``)}
                    </div>
                  </div>
                </div>
                <a href="#auth" class="btn btn-glass" style="width:100%; text-align:center;">Request Skill Swap</a>
              </div>
            `).join(``)}
          </div>
        </section>

        <!-- FAQ Section -->
        <section style="padding:6rem 4rem; background:rgba(255,255,255,0.15); backdrop-filter:var(--glass-blur); border-top:1px solid var(--glass-border); max-width:1200px; margin:0 auto; border-radius:var(--radius-lg);">
          <h2 style="font-family:'Outfit',sans-serif; font-size:2.25rem; font-weight:700; color:var(--secondary); text-align:center; margin-bottom:3rem;">Frequently Answered Questions</h2>
          <div style="max-width:800px; margin:0 auto; display:flex; flex-direction:column; gap:1.5rem;">
            <div class="glass-card" style="padding:1.5rem;">
              <h4 style="color:var(--secondary); font-weight:700; margin-bottom:0.5rem;">Do I have to pay to use SkillVerse?</h4>
              <p style="color:var(--text-muted); font-size:0.9rem; line-height:1.5;">No! The core feature of SkillVerse is the direct Skill Swap. If you teach someone your skill, you receive learning hours / credits that you can spend on lessons with other mentors. Paid options are available for direct purchasing, but swap matches are completely free.</p>
            </div>
            <div class="glass-card" style="padding:1.5rem;">
              <h4 style="color:var(--secondary); font-weight:700; margin-bottom:0.5rem;">How does the AI determine compatibility?</h4>
              <p style="color:var(--text-muted); font-size:0.9rem; line-height:1.5;">Our matching algorithm reviews the skills you teach and learn, along with timezone availability, native languages, current experience levels, and past student ratings to connect you with the most compatible swap partners.</p>
            </div>
            <div class="glass-card" style="padding:1.5rem;">
              <h4 style="color:var(--secondary); font-weight:700; margin-bottom:0.5rem;">Is the learning room video chat secure?</h4>
              <p style="color:var(--text-muted); font-size:0.9rem; line-height:1.5;">Yes. Our online room provides simulated encrypted video routing, live code sandboxes, collaborative whiteboard sketching, and auto-generates AI study notes after each session ends.</p>
            </div>
          </div>
        </section>

        <!-- Premium Footer -->
        <footer style="background:var(--secondary); color:#fff; padding:5rem 4rem 2rem; margin-top:5rem;">
          <div style="max-width:1200px; margin:0 auto; display:grid; grid-template-columns:2fr repeat(3, 1fr); gap:4rem; border-bottom:1px solid rgba(255,255,255,0.08); padding-bottom:4rem;">
            <div>
              <div style="display:flex; align-items:center; gap:0.75rem; font-family:'Outfit', sans-serif; font-size:1.85rem; font-weight:800; color:#fff; margin-bottom:1.5rem;">
                <div style="width:36px; height:36px; border-radius:var(--radius-sm); background:linear-gradient(135deg, var(--primary), #fff); display:flex; align-items:center; justify-content:center; color:var(--secondary); font-size:1.25rem;">S</div>
                <span>SkillVerse</span>
              </div>
              <p style="color:rgba(255,255,255,0.6); font-size:0.9rem; line-height:1.6; max-width:320px;">Swap your talents, build a verified global portfolio, and master new skills. One Profile. Unlimited Skills.</p>
            </div>
            <div>
              <h4 style="margin-bottom:1.25rem; font-size:0.95rem; text-transform:uppercase; letter-spacing:0.05em; color:var(--accent);">Explore</h4>
              <ul style="list-style:none; display:flex; flex-direction:column; gap:0.75rem; font-size:0.85rem;">
                <li><a href="#discovery" style="text-decoration:none; color:rgba(255,255,255,0.65);">Mentors Directory</a></li>
                <li><a href="#community" style="text-decoration:none; color:rgba(255,255,255,0.65);">Forums & Hackathons</a></li>
                <li><a href="#assessments" style="text-decoration:none; color:rgba(255,255,255,0.65);">Skill Assessments</a></li>
              </ul>
            </div>
            <div>
              <h4 style="margin-bottom:1.25rem; font-size:0.95rem; text-transform:uppercase; letter-spacing:0.05em; color:var(--accent);">Legal</h4>
              <ul style="list-style:none; display:flex; flex-direction:column; gap:0.75rem; font-size:0.85rem;">
                <li><a href="#" style="text-decoration:none; color:rgba(255,255,255,0.65);">Privacy Policy</a></li>
                <li><a href="#" style="text-decoration:none; color:rgba(255,255,255,0.65);">Terms of Swapping</a></li>
              </ul>
            </div>
            <div>
              <h4 style="margin-bottom:1.25rem; font-size:0.95rem; text-transform:uppercase; letter-spacing:0.05em; color:var(--accent);">Platform</h4>
              <ul style="list-style:none; display:flex; flex-direction:column; gap:0.75rem; font-size:0.85rem;">
                <li><a href="#" style="text-decoration:none; color:rgba(255,255,255,0.65);">MongoDB REST Sync API</a></li>
                <li><a href="#" style="text-decoration:none; color:rgba(255,255,255,0.65);">Gemini Core AI</a></li>
              </ul>
            </div>
          </div>
          <div style="max-width:1200px; margin:0 auto; display:flex; justify-content:space-between; align-items:center; padding-top:2rem; font-size:0.8rem; color:rgba(255,255,255,0.4);">
            <span>© 2026 SkillVerse. All swap contracts validated via platform AI.</span>
            <span>Made with ☕ by Antigravity</span>
          </div>
        </footer>
      </div>

      <style>
        @keyframes bounceX {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(10px); }
        }
      </style>
    `}async afterRender(){}},g=class{constructor(){this.isSignUpMode=!1}async render(){return`
      <div style="min-height:100vh; display:flex; align-items:center; justify-content:center; padding:4rem 2rem; width:100%; box-sizing:border-box;">
        <!-- Back to Home -->
        <a href="#landing" style="position:fixed; top:2rem; left:2rem; text-decoration:none; color:var(--text-muted); font-weight:600; display:flex; align-items:center; gap:0.5rem; font-size:0.9rem; z-index:10;" class="no-print">
          ← Back to Home
        </a>

        <!-- Auth Card Container -->
        <div class="glass-card" style="width:100%; max-width:460px; padding:2.5rem; box-shadow: 0 30px 70px rgba(0,0,0,0.08); background:rgba(255,255,255,0.7);">
          
          <div style="text-align:center; margin-bottom:1.5rem;">
            <div style="width:48px; height:48px; border-radius:var(--radius-sm); background:linear-gradient(135deg, var(--primary), var(--secondary)); display:inline-flex; align-items:center; justify-content:center; color:#fff; font-size:1.5rem; font-weight:800; margin-bottom:1rem;">S</div>
            <h2 id="auth-title" style="font-family:'Outfit',sans-serif; color:var(--secondary); font-size:1.75rem; font-weight:700; margin-bottom:0.25rem;">Welcome back</h2>
            <p id="auth-subtitle" style="color:var(--text-muted); font-size:0.9rem; margin-bottom:1.5rem;">Enter your email to sign in to your skill universe.</p>
          </div>

          <form id="auth-form" style="display:flex; flex-direction:column; gap:1.25rem;">
            
            <!-- Signup Fields Container -->
            <div id="signup-fields" style="display:none; flex-direction:column; gap:1.25rem;">
              <div>
                <label style="display:block; font-size:0.8rem; font-weight:600; color:var(--text-dark); margin-bottom:0.4rem;">Full Name *</label>
                <input type="text" id="auth-name" class="glass-input" placeholder="e.g. Harshita Rahangdale" />
              </div>
              
              <div>
                <label style="display:block; font-size:0.8rem; font-weight:600; color:var(--text-dark); margin-bottom:0.4rem;">Username *</label>
                <input type="text" id="auth-username" class="glass-input" placeholder="e.g. harshita123" />
              </div>

              <div>
                <label style="display:block; font-size:0.8rem; font-weight:600; color:var(--text-dark); margin-bottom:0.4rem;">I want to join as a *</label>
                <select id="auth-role" class="glass-select">
                  <option value="Learner">Learner (Looking for mentors)</option>
                  <option value="Mentor">Mentor (Offering expertise)</option>
                  <option value="Both" selected>Both (Want to exchange skills)</option>
                </select>
              </div>

              <div>
                <label style="display:block; font-size:0.8rem; font-weight:600; color:var(--text-dark); margin-bottom:0.4rem;">Biography *</label>
                <textarea id="auth-bio" class="glass-textarea" placeholder="Describe your expertise and what you want to learn..." rows="2"></textarea>
              </div>

              <div>
                <label style="display:block; font-size:0.8rem; font-weight:600; color:var(--text-dark); margin-bottom:0.4rem;">Country *</label>
                <input type="text" id="auth-country" class="glass-input" placeholder="e.g. India" />
              </div>

              <div>
                <label style="display:block; font-size:0.8rem; font-weight:600; color:var(--text-dark); margin-bottom:0.4rem;">Skills You Can Teach * (comma-separated)</label>
                <input type="text" id="auth-skills-teach" class="glass-input" placeholder="e.g. Python, UI UX, Speaking" />
              </div>

              <div>
                <label style="display:block; font-size:0.8rem; font-weight:600; color:var(--text-dark); margin-bottom:0.4rem;">Skills You Want to Learn * (comma-separated)</label>
                <input type="text" id="auth-skills-learn" class="glass-input" placeholder="e.g. Spanish, React, Dancing" />
              </div>

              <div>
                <label style="display:block; font-size:0.8rem; font-weight:600; color:var(--text-dark); margin-bottom:0.4rem;">Languages Known * (comma-separated)</label>
                <input type="text" id="auth-languages" class="glass-input" value="English" placeholder="e.g. English, Spanish" />
              </div>
            </div>

            <!-- Email (Common) -->
            <div>
              <label style="display:block; font-size:0.8rem; font-weight:600; color:var(--text-dark); margin-bottom:0.4rem;">Email Address</label>
              <input type="email" id="auth-email" class="glass-input" required placeholder="name@email.com" />
            </div>

            <!-- Password (Common) -->
            <div>
              <label style="display:block; font-size:0.8rem; font-weight:600; color:var(--text-dark); margin-bottom:0.4rem;">Password</label>
              <input type="password" id="auth-password" class="glass-input" required placeholder="••••••••" />
            </div>

            <!-- Confirm Password (Signup only) -->
            <div id="confirm-password-field" style="display:none;">
              <label style="display:block; font-size:0.8rem; font-weight:600; color:var(--text-dark); margin-bottom:0.4rem;">Confirm Password *</label>
              <input type="password" id="auth-confirm-password" class="glass-input" placeholder="••••••••" />
            </div>

            <button type="submit" id="auth-submit-btn" class="btn btn-primary" style="width:100%; padding:0.85rem; margin-top:0.5rem;">
              Sign In with Email
            </button>
          </form>

          <!-- Quick Fill Demo Admin -->
          <div style="margin-top: 1rem; padding: 0.75rem; background: rgba(121, 163, 195, 0.1); border-radius: var(--radius-sm); border: 1px dashed rgba(121, 163, 195, 0.35); text-align: center;">
            <p style="margin: 0 0 0.4rem 0; font-size: 0.75rem; color: var(--text-dark); font-weight: 600;">
              🔑 Admin Demo: <code>admin@skillverse.com</code> / <code>admin123</code>
            </p>
            <button type="button" id="fill-admin-btn" style="background: var(--secondary); color: #fff; border: none; border-radius: 4px; padding: 4px 10px; font-size: 0.75rem; cursor: pointer; font-weight: 600;">
              Auto-fill Admin Credentials
            </button>
          </div>

          <!-- Mode Toggle Footer -->
          <div style="margin-top:1.25rem; text-align:center; font-size:0.85rem; color:var(--text-muted);">
            <span id="toggle-prompt">Don't have an account?</span>
            <button id="toggle-mode-btn" style="background:none; border:none; color:var(--primary); font-weight:700; cursor:pointer; padding-left:0.25rem;">
              Create one for free
            </button>
          </div>

        </div>
      </div>
    `}async afterRender(){let e=document.getElementById(`auth-form`),t=document.getElementById(`toggle-mode-btn`),n=document.getElementById(`signup-fields`),r=document.getElementById(`confirm-password-field`),i=document.getElementById(`auth-title`),o=document.getElementById(`auth-subtitle`),s=document.getElementById(`auth-submit-btn`),c=document.getElementById(`toggle-prompt`);t.addEventListener(`click`,()=>{this.isSignUpMode=!this.isSignUpMode,this.isSignUpMode?(n.style.display=`flex`,r.style.display=`block`,i.innerText=`Create your account`,o.innerText=`Join a global ecosystem of learners and mentors.`,s.innerText=`Create Account & Begin`,c.innerText=`Already have an account?`,t.innerText=`Sign in instead`):(n.style.display=`none`,r.style.display=`none`,i.innerText=`Welcome back`,o.innerText=`Enter your email to sign in to your skill universe.`,s.innerText=`Sign In with Email`,c.innerText=`Don't have an account?`,t.innerText=`Create one for free`)});let l=document.getElementById(`fill-admin-btn`);l&&l.addEventListener(`click`,()=>{this.isSignUpMode&&t.click(),document.getElementById(`auth-email`).value=`admin@skillverse.com`,document.getElementById(`auth-password`).value=`admin123`,window.showToast(`Admin credentials loaded! Click Sign In with Email.`,`info`)}),e.addEventListener(`submit`,async e=>{e.preventDefault();let t=document.getElementById(`auth-email`).value.trim(),n=document.getElementById(`auth-password`).value.trim();try{let e;if(this.isSignUpMode){let r=document.getElementById(`auth-name`).value.trim(),i=document.getElementById(`auth-username`).value.trim(),o=document.getElementById(`auth-confirm-password`).value.trim(),s=document.getElementById(`auth-role`).value,c=document.getElementById(`auth-country`).value.trim(),l=document.getElementById(`auth-bio`).value.trim(),u=document.getElementById(`auth-skills-teach`).value.trim(),d=document.getElementById(`auth-skills-learn`).value.trim(),f=document.getElementById(`auth-languages`).value.trim();if(!r||!i||!t||!n||!o||!c||!l||!u||!d||!f){window.showToast(`All fields are mandatory. Please fill in all registration details.`,`error`);return}if(n!==o){window.showToast(`Passwords do not match. Please verify your password confirmation.`,`error`);return}let p=u.split(`,`).map(e=>e.trim()).filter(e=>e.length>0),m=d.split(`,`).map(e=>e.trim()).filter(e=>e.length>0),h=f.split(`,`).map(e=>e.trim()).filter(e=>e.length>0);e=await a.signup(t,n,r,s,l,p,m,h,c,{days:[],hours:[]},i),window.showToast(`Welcome to SkillVerse, ${e.name}!`,`success`)}else if(e=await a.login(t,n),e)a.setCurrentUser(e),window.showToast(`Welcome back, ${e.name}!`,`success`);else{window.showToast(`Account details not found. Please sign up to create a profile.`,`error`);return}window.location.hash=e&&e.role===`admin`?`#admin`:`#dashboard`}catch(e){window.showToast(e.message||`Authentication failed`,`error`)}})}},_=class{constructor(){this.activeRecipientId=null}async render(){let e=a.getCurrentUser();if(!e)return`<div class="glass-card text-center" style="padding:3rem;">Please log in to view dashboard.</div>`;let t=e.id||e._id,n=`data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="%2379a3c3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style='background:%23f5ebe7;padding:4px;border-radius:50%;'><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,r=await l.getSessions(t)||[],i=await l.getCertificates(t)||[],o=await l.getUsers()||[];await l.getConversations();let s=o.filter(e=>(e.id||e._id)!==t);!this.activeRecipientId&&s.length>0&&(this.activeRecipientId=s[0].id||s[0]._id);let c=s.find(e=>(e.id||e._id)===this.activeRecipientId)||s[0],u=Array.isArray(e.skillsLearn)?e.skillsLearn:[];Array.isArray(e.skillsTeach)&&e.skillsTeach;let d=s.filter(e=>Array.isArray(e.skillsTeach)&&e.skillsTeach.some(e=>u.includes(e))).slice(0,3),f=d.length?d:s.slice(0,3),p=r.filter(e=>e&&e.status===`Completed`),m=p.filter(e=>e&&e.mentorId===t).length,h=p.filter(e=>e&&e.learnerId===t).length,g=[];if(c){let e=[t,c.id||c._id].sort().join(`_`);g=await l.getMessages(e)||[]}return`
      <div style="width: 100%;">
        <!-- Welcome Banner -->
        <div class="glass-card" style="padding: 2rem; margin-bottom: 2rem; display: flex; justify-content: space-between; align-items: center; overflow: hidden; background: linear-gradient(135deg, rgba(121, 163, 195, 0.15) 0%, rgba(235, 205, 183, 0.1) 100%);">
          <div>
            <h1 style="font-family: 'Outfit', sans-serif; font-size: 2.25rem; font-weight: 800; color: var(--secondary); margin-bottom: 0.5rem;">
              Hello, ${e.name||`Swapper`}! ${e.isVerified?`<span style="font-size:1.5rem; vertical-align:middle;">🛡️</span>`:``}
            </h1>
            <p style="color: var(--text-muted); font-size: 1rem;">
              You have <strong style="color:var(--primary);">${e.credits??100} Skill Credits</strong> available. Ready to exchange some knowledge?
            </p>
          </div>
          <div style="display:flex; gap:0.75rem;" class="no-print">
            <a href="#matching" class="btn btn-primary">🤝 AI Skill Match</a>
            <a href="#discovery" class="btn btn-glass">🔍 Find Mentors</a>
          </div>
        </div>

        <!-- Metrics Row -->
        <div class="metrics-row">
          <div class="glass-card metric-card">
            <div class="metric-icon">📖</div>
            <div class="metric-details">
              <h3>Learning Hours</h3>
              <div class="metric-value">${h||12} hrs</div>
            </div>
          </div>
          <div class="glass-card metric-card">
            <div class="metric-icon">👨‍🏫</div>
            <div class="metric-details">
              <h3>Teaching Hours</h3>
              <div class="metric-value">${m||8} hrs</div>
            </div>
          </div>
          <div class="glass-card metric-card">
            <div class="metric-icon">🎓</div>
            <div class="metric-details">
              <h3>Certificates</h3>
              <div class="metric-value">${i.length} Earned</div>
            </div>
          </div>
        </div>

        <!-- Main Dashboard Split Grid -->
        <div class="dashboard-grid">
          
          <!-- LEFT WIDGET: SESSIONS, RECOMMENDATIONS & DM BOX -->
          <div class="dashboard-widget-lg" style="display: flex; flex-direction: column; gap: 2rem;">
            
            <!-- Booked Sessions -->
            <div class="glass-card">
              <h3 style="color: var(--secondary); font-family:'Outfit',sans-serif; margin-bottom: 1.25rem; display:flex; justify-content:space-between; align-items:center;">
                <span>📅 Scheduled Swaps</span>
                <span class="badge" style="font-size:0.7rem;">${r.length} Total</span>
              </h3>
              
              <div style="display: flex; flex-direction: column; gap: 1rem;">
                ${r.length===0?`
                  <div style="text-align:center; padding:2rem 0; color:var(--text-muted);">
                    <p style="margin-bottom:1rem;">No active swapping sessions booked yet.</p>
                    <a href="#discovery" class="btn btn-glass">Find a Swapping Partner</a>
                  </div>
                `:r.map(e=>{let n=e.mentorId===t,r=n?e.learnerName:e.mentorName,i=``;return e.status===`Pending`?i=n?`
                        <div style="display:flex; gap:0.5rem;">
                          <button class="btn btn-primary accept-btn" data-id="${e.id}" style="padding:0.4rem 0.8rem; font-size:0.8rem;">Accept</button>
                          <button class="btn btn-glass reject-btn" data-id="${e.id}" style="padding:0.4rem 0.8rem; font-size:0.8rem; color:#e06c75;">Decline</button>
                        </div>
                      `:`<span class="badge" style="background:rgba(149,118,98,0.1); color:var(--neutral);">Awaiting Mentor</span>`:e.status===`Accepted`?i=`
                      <a href="#${e.roomUrl||`learning-room?roomId=room_`+e.id}" class="btn btn-accent" style="padding:0.4rem 0.8rem; font-size:0.8rem;">💻 Join Learning Room</a>
                    `:e.status===`Completed`&&(i=`<span class="badge badge-verified">Completed</span>`),`
                    <div class="glass-card" style="padding:1rem; border-color:rgba(0,0,0,0.04); display:flex; justify-content:space-between; align-items:center; background:rgba(255,255,255,0.45);">
                      <div>
                        <div style="font-weight:700; color:var(--secondary); font-size:1rem;">
                          ${e.skillName||`Skill`} Exchange
                        </div>
                        <div style="font-size:0.85rem; color:var(--text-muted); margin-top:0.25rem;">
                          With <strong>${r||`Partner`}</strong> (${n?`You teach`:`You learn`})
                        </div>
                        <div style="font-size:0.8rem; color:var(--neutral); margin-top:0.25rem; display:flex; gap:1rem;">
                          <span>📅 ${e.date||`Today`}</span>
                          <span>🕒 ${e.time||`Flexible`}</span>
                        </div>
                      </div>
                      <div>
                        ${i}
                      </div>
                    </div>
                  `}).join(``)}
              </div>
            </div>

            <!-- AI Recommended Mentors -->
            <div class="glass-card">
              <h3 style="color: var(--secondary); font-family:'Outfit',sans-serif; margin-bottom: 1.25rem;">🤖 Recommended Swap Matches</h3>
              <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap:1.25rem;">
                ${f.map(e=>{let t=e.id||e._id,r=88+Math.floor(Math.random()*11);return`
                    <div class="glass-card glass-card-hover" style="padding:1.25rem; text-align:center; background:rgba(255,255,255,0.5);">
                      <div style="position:relative; display:inline-block; margin-bottom:0.75rem;">
                        <img src="${e.avatar||n}" style="width:60px; height:60px; border-radius:50%; object-fit:cover; border:2px solid var(--primary);" />
                        <span style="position:absolute; bottom:-5px; right:-5px; background:var(--accent); color:var(--secondary); font-size:0.65rem; font-weight:700; padding:2px 5px; border-radius:4px;">${r}%</span>
                      </div>
                      <h4 style="font-weight:700; color:var(--secondary); font-size:0.95rem; margin-bottom:0.25rem;">${e.name||`Anonymous Swapper`}</h4>
                      <p style="font-size:0.75rem; color:var(--text-muted); margin-bottom:0.75rem; min-height:36px; line-height:1.4;">${(e.bio||`Skill swap member`).substring(0,55)}...</p>
                      
                      <div style="display:flex; flex-wrap:wrap; justify-content:center; gap:0.25rem; margin-bottom:1rem;">
                        ${(Array.isArray(e.skillsTeach)?e.skillsTeach:[]).slice(0,2).map(e=>`<span class="badge badge-verified" style="font-size:0.6rem; padding:2px 6px;">${e}</span>`).join(``)}
                      </div>
                      <div style="display:flex; gap:0.4rem;">
                        <a href="#profile?userId=${t}" class="btn btn-glass" style="flex:1; padding:0.35rem; font-size:0.75rem;">Profile</a>
                        <button class="btn btn-primary start-dm-btn" data-userid="${t}" style="flex:1; padding:0.35rem; font-size:0.75rem;">💬 Chat</button>
                      </div>
                    </div>
                  `}).join(``)}
              </div>
            </div>

            <!-- PRIVATE DM BOX BELOW FIND MENTORS -->
            <div class="glass-card" style="padding: 1.5rem; background: rgba(255, 255, 255, 0.65);">
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 1.25rem; border-bottom: 1px solid rgba(0,0,0,0.06); padding-bottom: 0.75rem;">
                <div>
                  <h3 style="color: var(--secondary); font-family:'Outfit',sans-serif; margin:0; display:flex; align-items:center; gap:0.5rem;">
                    💬 Private Mentor Direct Messages (DM)
                  </h3>
                  <p style="font-size:0.8rem; color:var(--text-muted); margin-top:0.25rem;">Chat 1-on-1 with mentors & share direct Learning Room invitations</p>
                </div>
                ${c?`
                  <button id="dm-create-room-btn" class="btn btn-primary" style="padding:0.45rem 0.9rem; font-size:0.8rem; display:flex; align-items:center; gap:0.4rem;">
                    🎥 Create & Share Room Link
                  </button>
                `:``}
              </div>

              <div style="display: grid; grid-template-columns: 240px 1fr; gap: 1.25rem; min-height: 380px;">
                
                <!-- Mentors / Contacts List -->
                <div style="border-right: 1px solid rgba(0,0,0,0.06); padding-right: 1rem; display:flex; flex-direction:column; gap:0.5rem; max-height: 420px; overflow-y:auto;">
                  <span style="font-size:0.7rem; font-weight:700; text-transform:uppercase; color:var(--text-muted); letter-spacing:0.5px; margin-bottom:0.25rem;">
                    Select Mentor Chat
                  </span>

                  ${s.length===0?`
                    <div style="font-size:0.8rem; color:var(--text-muted); text-align:center; padding:1rem 0;">No other mentors available.</div>
                  `:s.map(e=>{let t=e.id||e._id,r=t===(c?.id||c?._id);return`
                      <div class="dm-contact-item ${r?`active-dm-item`:``}" data-userid="${t}" style="display:flex; align-items:center; gap:0.75rem; padding:0.6rem 0.75rem; border-radius:10px; cursor:pointer; background: ${r?`rgba(121, 163, 195, 0.2)`:`rgba(255,255,255,0.4)`}; border: 1px solid ${r?`var(--primary)`:`transparent`}; transition:all 0.2s ease;">
                        <div style="position:relative;">
                          <img src="${e.avatar||n}" style="width:38px; height:38px; border-radius:50%; object-fit:cover; border:1px solid var(--primary);" />
                          <span style="position:absolute; bottom:0; right:0; width:10px; height:10px; background:#2ecc71; border-radius:50%; border:2px solid white;"></span>
                        </div>
                        <div style="flex:1; overflow:hidden;">
                          <div style="font-weight:700; font-size:0.85rem; color:var(--secondary); white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${e.name}</div>
                          <div style="font-size:0.7rem; color:var(--text-muted); white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${e.skillsTeach&&e.skillsTeach[0]?`Teaches `+e.skillsTeach[0]:`Verified Mentor`}</div>
                        </div>
                      </div>
                    `}).join(``)}
                </div>

                <!-- Active DM Thread Container -->
                <div style="display:flex; flex-direction:column; justify-content:space-between;">
                  
                  ${c?`
                    <!-- DM Header -->
                    <div style="display:flex; align-items:center; gap:0.75rem; padding-bottom:0.75rem; border-bottom:1px solid rgba(0,0,0,0.06); margin-bottom:0.75rem;">
                      <img src="${c.avatar||n}" style="width:40px; height:40px; border-radius:50%; object-fit:cover; border:2px solid var(--primary);" />
                      <div>
                        <div style="font-weight:700; color:var(--secondary); font-size:0.95rem;">${c.name} ${c.isVerified?`🛡️`:``}</div>
                        <div style="font-size:0.75rem; color:var(--text-muted);">
                          ${(c.skillsTeach||[]).slice(0,3).join(`, `)}
                        </div>
                      </div>
                    </div>

                    <!-- Messages Scroll Container -->
                    <div id="dm-messages-container" style="flex:1; max-height:260px; overflow-y:auto; display:flex; flex-direction:column; gap:0.75rem; padding-right:0.5rem; margin-bottom:1rem;">
                      ${g.length===0?`
                        <div style="text-align:center; padding:2rem 0; color:var(--text-muted); font-size:0.85rem;">
                          👋 Send a message to start private exchange with <strong>${c.name}</strong>!
                        </div>
                      `:g.map(e=>{let n=e.senderId===t,r=e.roomLink||e.text&&e.text.includes(`#learning-room`);return`
                          <div style="display:flex; justify-content:${n?`flex-end`:`flex-start`};">
                            <div style="max-width:80%; padding:0.75rem 1rem; border-radius:${n?`16px 16px 2px 16px`:`16px 16px 16px 2px`}; background:${n?`var(--primary)`:`#fff`}; color:${n?`#fff`:`var(--secondary)`}; box-shadow:0 2px 8px rgba(0,0,0,0.05); font-size:0.85rem; line-height:1.4;">
                              <div>${e.text}</div>
                              
                              ${r?`
                                <div style="margin-top:0.6rem; padding:0.6rem; background:rgba(0,0,0,0.06); border-radius:8px; border-left:3px solid var(--accent);">
                                  <div style="font-size:0.75rem; font-weight:700; margin-bottom:0.4rem; color:${n?`#fff`:`var(--secondary)`};">
                                    💻 Private Learning Room Link
                                  </div>
                                  <a href="${e.roomLink||e.text.match(/#learning-room[^\s]*/)?.[0]||`#learning-room`}" class="btn btn-accent" style="display:inline-block; padding:0.3rem 0.6rem; font-size:0.75rem; text-decoration:none;">
                                    🚀 Join Room Now
                                  </a>
                                </div>
                              `:``}

                              <div style="font-size:0.65rem; opacity:0.75; text-align:right; margin-top:0.3rem;">
                                ${new Date(e.timestamp||Date.now()).toLocaleTimeString([],{hour:`2-digit`,minute:`2-digit`})}
                              </div>
                            </div>
                          </div>
                        `}).join(``)}
                    </div>

                    <!-- Message Input Box -->
                    <div style="display:flex; gap:0.5rem; align-items:center;">
                      <input type="text" id="dm-message-input" class="glass-input" placeholder="Type private message to ${c.name}..." style="flex:1; font-size:0.85rem; padding:0.6rem 0.9rem;" />
                      <button id="dm-send-btn" class="btn btn-primary" style="padding:0.6rem 1.1rem; font-size:0.85rem;">
                        Send ✉️
                      </button>
                    </div>
                  `:`
                    <div style="display:flex; justify-content:center; align-items:center; height:100%; color:var(--text-muted); font-size:0.9rem;">
                      Select a mentor from the list on the left to start chatting.
                    </div>
                  `}

                </div>

              </div>

            </div>

          </div>

          <!-- RIGHT WIDGET: PERFORMANCE CHART & GAMIFICATION -->
          <div class="dashboard-widget-sm" style="display: flex; flex-direction: column; gap: 2rem;">
            
            <!-- XP Progress Card -->
            <div class="glass-card" style="background:linear-gradient(135deg, var(--secondary) 0%, #4d2f25 100%); color:#fff;">
              <h3 style="font-family:'Outfit',sans-serif; color:var(--accent); font-size:1.25rem; margin-bottom:1rem;">🏆 Exchange Level</h3>
              <div style="display:flex; justify-content:space-between; align-items:flex-end; margin-bottom:0.5rem;">
                <span style="font-size:1.75rem; font-weight:800; font-family:'Outfit';">Level ${e.level||1}</span>
                <span style="font-size:0.8rem; color:rgba(255,255,255,0.7);">${e.xp||0} / ${(e.level||1)*500} XP</span>
              </div>
              <div style="width:100%; height:8px; background:rgba(255,255,255,0.15); border-radius:4px; overflow:hidden; margin-bottom:1rem;">
                <div style="width:${Math.min(100,(e.xp||0)/((e.level||1)*500)*100)}%; height:100%; background:var(--accent);"></div>
              </div>
              <small style="font-size:0.75rem; color:rgba(255,255,255,0.7); display:block; line-height:1.4;">
                Complete assessments or teach sessions to gain XP and rank up on the Global Leaderboard!
              </small>
            </div>

            <!-- Performance CSS Chart -->
            <div class="glass-card">
              <h3 style="color: var(--secondary); font-family:'Outfit',sans-serif; margin-bottom:1.25rem;">📈 Activity Analysis</h3>
              <div style="display:flex; justify-content:space-between; align-items:flex-end; height:120px; padding:0 0.5rem; margin-top:1rem; border-bottom:1px solid rgba(0,0,0,0.08);">
                <div style="display:flex; flex-direction:column; align-items:center; gap:0.5rem; flex:1;">
                  <div style="width:18px; height:45px; background:var(--primary); border-radius:4px 4px 0 0; opacity:0.65;"></div>
                  <span style="font-size:0.65rem; color:var(--text-muted); font-weight:600;">Mon</span>
                </div>
                <div style="display:flex; flex-direction:column; align-items:center; gap:0.5rem; flex:1;">
                  <div style="width:18px; height:80px; background:var(--primary); border-radius:4px 4px 0 0; opacity:0.8;"></div>
                  <span style="font-size:0.65rem; color:var(--text-muted); font-weight:600;">Tue</span>
                </div>
                <div style="display:flex; flex-direction:column; align-items:center; gap:0.5rem; flex:1;">
                  <div style="width:18px; height:20px; background:var(--primary); border-radius:4px 4px 0 0; opacity:0.5;"></div>
                  <span style="font-size:0.65rem; color:var(--text-muted); font-weight:600;">Wed</span>
                </div>
                <div style="display:flex; flex-direction:column; align-items:center; gap:0.5rem; flex:1;">
                  <div style="width:18px; height:110px; background:linear-gradient(to top, var(--primary), var(--secondary)); border-radius:4px 4px 0 0;"></div>
                  <span style="font-size:0.65rem; color:var(--text-muted); font-weight:600;">Thu</span>
                </div>
                <div style="display:flex; flex-direction:column; align-items:center; gap:0.5rem; flex:1;">
                  <div style="width:18px; height:50px; background:var(--primary); border-radius:4px 4px 0 0; opacity:0.7;"></div>
                  <span style="font-size:0.65rem; color:var(--text-muted); font-weight:600;">Fri</span>
                </div>
              </div>
              <div style="display:flex; justify-content:space-between; margin-top:1rem; font-size:0.8rem; color:var(--text-muted);">
                <span>Weekly Total: <strong>14.5 Hours</strong></span>
                <span style="color:#2ecc71;">+12% vs last week</span>
              </div>
            </div>

            <!-- Active Challenges -->
            <div class="glass-card">
              <h3 style="color: var(--secondary); font-family:'Outfit',sans-serif; margin-bottom:1rem;">🎯 Active Challenges</h3>
              <div style="display:flex; flex-direction:column; gap:0.75rem; font-size:0.8rem;">
                <div style="display:flex; justify-content:space-between; align-items:center; padding-bottom:0.5rem; border-bottom:1px solid rgba(0,0,0,0.04);">
                  <div>
                    <span style="font-weight:600; color:var(--text-dark);">Teach a Newbie</span>
                    <p style="font-size:0.7rem; color:var(--text-muted);">Earn +100 XP, +10 Credits</p>
                  </div>
                  <span style="color:#d4af37;">⏳ 3d left</span>
                </div>
                <div style="display:flex; justify-content:space-between; align-items:center;">
                  <div>
                    <span style="font-weight:600; color:var(--text-dark);">Pass CSS Master Exam</span>
                    <p style="font-size:0.7rem; color:var(--text-muted);">Score 90%+ for Blue Certificate Badge</p>
                  </div>
                  <span style="color:#2ecc71;">✅ Ready</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    `}async afterRender(){let e=a.getCurrentUser();if(!e)return;let t=e.id||e._id,n=document.getElementById(`dm-messages-container`);n&&(n.scrollTop=n.scrollHeight),document.querySelectorAll(`.accept-btn`).forEach(e=>{e.addEventListener(`click`,async e=>{let t=e.target.getAttribute(`data-id`);await l.updateSession(t,{status:`Accepted`}),window.showToast(`Swap session accepted!`,`success`),this.reRender()})}),document.querySelectorAll(`.reject-btn`).forEach(e=>{e.addEventListener(`click`,async e=>{let t=e.target.getAttribute(`data-id`);await l.updateSession(t,{status:`Cancelled`}),window.showToast(`Swap session declined.`,`info`),this.reRender()})}),document.querySelectorAll(`.start-dm-btn`).forEach(e=>{e.addEventListener(`click`,e=>{let t=e.currentTarget.getAttribute(`data-userid`);this.activeRecipientId=t,this.reRender();let n=document.getElementById(`dm-messages-container`);n&&n.scrollIntoView({behavior:`smooth`})})}),document.querySelectorAll(`.dm-contact-item`).forEach(e=>{e.addEventListener(`click`,async e=>{let t=e.currentTarget.getAttribute(`data-userid`);this.activeRecipientId=t,await this.reRender()})});let r=document.getElementById(`dm-send-btn`),i=document.getElementById(`dm-message-input`),o=async()=>{if(!i||!this.activeRecipientId)return;let e=i.value.trim();e&&(await l.sendMessage(this.activeRecipientId,e),i.value=``,await this.reRender())};r&&r.addEventListener(`click`,o),i&&i.addEventListener(`keypress`,e=>{e.key===`Enter`&&o()});let s=document.getElementById(`dm-create-room-btn`);s&&s.addEventListener(`click`,async()=>{if(!this.activeRecipientId)return;let e=`room_`+Math.random().toString(36).substring(2,9),n=`Hey! I've set up a private Learning Room for our skill exchange session. Join here: ${`#learning-room?roomId=${e}&mentorId=${this.activeRecipientId}`}`;await l.createLearningRoom({roomId:e,mentorId:this.activeRecipientId,learnerId:t,createdAt:new Date().toISOString()}),await l.sendMessage(this.activeRecipientId,n),window.showToast(`Learning Room link created and shared in DM!`,`success`),await this.reRender()})}async reRender(){let e=document.getElementById(`main-content`);e&&(e.innerHTML=await this.render(),await this.afterRender(),window.lucide&&window.lucide.createIcons())}},v=class{constructor(e){this.params=e,this.isEditing=!1,this.defaultAvatar=null}async render(){let e=a.getCurrentUser(),t=e;if(this.params&&this.params.userId){let e=await l.getUser(this.params.userId);e&&(t=e)}t&&!t.id&&t._id&&(t={...t,id:String(t._id)}),e&&!e.id&&e._id&&(e.id=String(e._id));let n=e&&t.id&&e.id&&t.id===e.id,r=await l.getCertificates(t.id||t._id),i=`https://ui-avatars.com/api/?name=${encodeURIComponent(t.name||`User`)}&background=6c63ff&color=fff&size=200&bold=true&rounded=true`;return this.defaultAvatar=i,`
      <div style="width: 100%;">
        <!-- Print Button & Share Info -->
        <div style="display:flex; justify-content:space-between; margin-bottom:1.5rem;" class="no-print">
          <a href="#dashboard" style="text-decoration:none; color:var(--text-muted); font-weight:600; display:flex; align-items:center; gap:0.5rem; font-size:0.9rem;">
            ← Back to Dashboard
          </a>
          <div style="display:flex; gap:0.75rem;">
            <button id="share-portfolio-btn" class="btn btn-glass" style="padding:0.5rem 1rem; font-size:0.85rem;">
              🔗 Share Link
            </button>
            <button id="download-resume-btn" class="btn btn-primary" style="padding:0.5rem 1rem; font-size:0.85rem;">
              📄 Download Resume
            </button>
            ${n?`<button id="edit-profile-btn" class="btn btn-accent" style="padding:0.5rem 1rem; font-size:0.85rem;">✏️ Edit Profile</button>`:``}
          </div>
        </div>

        <!-- Universal Profile Header Card -->
        <div class="glass-card profile-header-card">
          <div class="profile-cover" style="background-image: url('${t.coverImage||`https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1200`}');"></div>
          <div class="profile-meta">
            <div class="profile-avatar-wrapper">
              <img src="${t.avatar||i}" class="profile-avatar" />
            </div>
            <div class="profile-info">
              <div class="profile-name">
                <span>${t.name}</span>
                ${t.isVerified?`<span class="badge badge-verified" style="font-size:0.6rem; padding:2px 6px;">Verified AI</span>`:``}
              </div>
              <p style="color: var(--text-muted); font-size: 0.95rem; margin-top: 0.25rem;">
                ${(t.bio||`New member sharing skills on SkillVerse.`).substring(0,100)}
              </p>
              <div style="display:flex; gap:1rem; align-items:center; margin-top:0.75rem; flex-wrap:wrap;">
                <span style="font-size:0.85rem; color:var(--text-muted); font-weight:600;">⭐ ${t.ratings||`5.0`} Rating</span>
                <span class="badge badge-credits">🪙 ${t.credits??50} Credits</span>
                <span class="badge" style="background:rgba(121,163,195,0.15); color:var(--primary);">AI Score: ${t.aiScore||60}%</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Profile Detail Columns -->
        <div class="profile-body-grid">
          
          <!-- LEFT SIDEBAR -->
          <div class="profile-sidebar">
            
            <!-- Quick About Details -->
            <div class="glass-card">
              <h3 style="color:var(--secondary); font-family:'Outfit'; font-size:1.15rem; margin-bottom:1rem; border-bottom:1px solid rgba(0,0,0,0.05); padding-bottom:0.5rem;">Credentials</h3>
              <div style="display:flex; flex-direction:column; gap:0.75rem; font-size:0.85rem; color:var(--text-dark);">
                <div><strong>Languages:</strong> ${(Array.isArray(t.languages)?t.languages:[`English`]).join(`, `)||`English`}</div>
                <div><strong>Role:</strong> ${t.role||`Both`}</div>
                <div><strong>Portfolio Strength:</strong> ${t.portfolioStrength||`15`}%</div>
                
                <!-- Social Connections -->
                <div style="margin-top:0.5rem; display:flex; gap:0.75rem;" class="no-print">
                  ${t.socials?.github?`<a href="${t.socials.github}" target="_blank" style="text-decoration:none; font-size:1.25rem;">🐙</a>`:``}
                  ${t.socials?.linkedin?`<a href="${t.socials.linkedin}" target="_blank" style="text-decoration:none; font-size:1.25rem;">💼</a>`:``}
                  ${t.socials?.twitter?`<a href="${t.socials.twitter}" target="_blank" style="text-decoration:none; font-size:1.25rem;">🐦</a>`:``}
                </div>
              </div>
            </div>

            <!-- Skills Swapping Profile -->
            <div class="glass-card">
              <h3 style="color:var(--secondary); font-family:'Outfit'; font-size:1.15rem; margin-bottom:1rem; border-bottom:1px solid rgba(0,0,0,0.05); padding-bottom:0.5rem;">Skills I Can Teach</h3>
              <div style="display:flex; flex-wrap:wrap; gap:0.5rem; margin-bottom:1.5rem;">
                ${!Array.isArray(t.skillsTeach)||t.skillsTeach.length===0?`<span style="font-size:0.8rem; color:var(--text-muted);">None listed yet.</span>`:t.skillsTeach.map(e=>`<span class="badge badge-verified" style="font-size:0.75rem;">${e}</span>`).join(``)}
              </div>

              <h3 style="color:var(--secondary); font-family:'Outfit'; font-size:1.15rem; margin-bottom:1rem; border-bottom:1px solid rgba(0,0,0,0.05); padding-bottom:0.5rem;">Skills I Want to Learn</h3>
              <div style="display:flex; flex-wrap:wrap; gap:0.5rem;">
                ${!Array.isArray(t.skillsLearn)||t.skillsLearn.length===0?`<span style="font-size:0.8rem; color:var(--text-muted);">None listed yet.</span>`:t.skillsLearn.map(e=>`<span class="badge badge-credits" style="font-size:0.75rem;">${e}</span>`).join(``)}
              </div>
            </div>

            <!-- Availability Schedule -->
            <div class="glass-card">
              <h3 style="color:var(--secondary); font-family:'Outfit'; font-size:1.15rem; margin-bottom:1rem; border-bottom:1px solid rgba(0,0,0,0.05); padding-bottom:0.5rem;">Weekly Availability</h3>
              <div style="font-size:0.85rem; display:flex; flex-direction:column; gap:0.5rem; color:var(--text-muted);">
                ${t.availability&&Array.isArray(t.availability.days)&&Array.isArray(t.availability.hours)?`
                  <div><strong>Days:</strong> ${t.availability.days.join(`, `)}</div>
                  <div><strong>Hours:</strong> ${t.availability.hours.join(`, `)}</div>
                `:`<div>Not set yet.</div>`}
              </div>
            </div>

          </div>

          <!-- RIGHT MAIN PANELS -->
          <div class="profile-content">
            
            <!-- Professional Biography -->
            <div class="glass-card">
              <h3 style="color:var(--secondary); font-family:'Outfit'; font-size:1.25rem; margin-bottom:1rem;">Bio / About Me</h3>
              <p style="font-size:0.95rem; color:var(--text-dark); line-height:1.6;">
                ${t.bio||`Write a brief description about your expertise and swap preferences.`}
                          <!-- Professional Experience Timeline -->
            <div class="glass-card">
              <h3 style="color:var(--secondary); font-family:'Outfit'; font-size:1.25rem; margin-bottom:1.5rem;">Professional Experience</h3>
              <div>
                ${!Array.isArray(t.experience)||t.experience.length===0?`<p style="font-size:0.9rem; color:var(--text-muted);">No experiences listed.</p>`:t.experience.map(e=>`
                  <div class="timeline-item">
                    <h4 style="font-weight:700; color:var(--text-dark); font-size:1rem;">${e.role}</h4>
                    <span style="font-size:0.8rem; color:var(--primary); font-weight:600;">${e.company}</span>
                    <span style="font-size:0.75rem; color:var(--text-muted); padding-left:0.75rem;">| ${e.years}</span>
                  </div>
                `).join(``)}
              </div>
            </div>

            <!-- Education Timeline -->
            <div class="glass-card">
              <h3 style="color:var(--secondary); font-family:'Outfit'; font-size:1.25rem; margin-bottom:1.5rem;">Education & Credentials</h3>
              <div>
                ${!Array.isArray(t.education)||t.education.length===0?`<p style="font-size:0.9rem; color:var(--text-muted);">No qualifications listed.</p>`:t.education.map(e=>`
                  <div class="timeline-item">
                    <h4 style="font-weight:700; color:var(--text-dark); font-size:1rem;">${e.degree}</h4>
                    <span style="font-size:0.8rem; color:var(--primary); font-weight:600;">${e.school}</span>
                    <span style="font-size:0.75rem; color:var(--text-muted); padding-left:0.75rem;">| Graduated ${e.year}</span>
                  </div>
                `).join(``)}
              </div>
            </div> </div>
            </div>

            <!-- Verification & Certificates -->
            <div class="glass-card">
              <h3 style="color:var(--secondary); font-family:'Outfit'; font-size:1.25rem; margin-bottom:1.25rem;">SkillVerse Certificates</h3>
              <div style="display:grid; grid-template-columns:1fr 1fr; gap:1.25rem;">
                ${r.length===0?`<p style="font-size:0.9rem; color:var(--text-muted); grid-column:span 2;">No assessment certificates earned yet.</p>`:r.map(e=>`
                  <div class="glass-card" style="padding:1rem; border-color:rgba(121,163,195,0.2); background:linear-gradient(135deg, rgba(121, 163, 195, 0.05) 0%, rgba(235, 205, 183, 0.05) 100%);">
                    <h4 style="font-weight:700; color:var(--secondary); font-size:0.95rem;">${e.skill} Expert</h4>
                    <div style="font-size:0.75rem; color:var(--text-muted); margin-top:0.25rem;">
                      Score: <strong style="color:var(--primary);">${e.score}%</strong> | Credential ID: ${e.credentialId}
                    </div>
                    <div style="font-size:0.7rem; color:var(--neutral); margin-top:0.25rem;">Issued by SkillVerse AI</div>
                  </div>
                `).join(``)}
              </div>
            </div>

          </div>

        </div>
      </div>
    `}async afterRender(){let e=a.getCurrentUser(),t=e;if(this.params&&this.params.userId){let e=await l.getUser(this.params.userId);e&&(t=e)}let n=e&&t.id===e.id,r=document.getElementById(`share-portfolio-btn`);r&&r.addEventListener(`click`,()=>{let e=`${window.location.origin}${window.location.pathname}#profile?userId=${t.id}`;navigator.clipboard.writeText(e).then(()=>{window.showToast(`Portfolio Link copied to clipboard!`,`success`)}).catch(e=>{window.showToast(`Failed to copy link.`,`error`)})});let i=document.getElementById(`download-resume-btn`);if(i&&i.addEventListener(`click`,()=>{window.print()}),n){let e=document.getElementById(`edit-profile-btn`);e&&e.addEventListener(`click`,()=>{let e=t.id||t._id?{...t,id:t.id||String(t._id)}:t;this.openEditProfileModal(e)})}}openEditProfileModal(e){let t=document.getElementById(`edit-profile-modal-backdrop`);t||(t=document.createElement(`div`),t.id=`edit-profile-modal-backdrop`,t.className=`modal-backdrop`,document.body.appendChild(t)),t.innerHTML=`
      <div class="modal-container glass-card" style="max-width:540px; max-height:80vh; overflow-y:auto;">
        <h3 style="color:var(--secondary); margin-bottom:1.25rem;">✏️ Edit Skill Resume</h3>
        
        <div style="display:flex; flex-direction:column; gap:1.25rem; margin-bottom:1.5rem;">
          <div>
            <label style="display:block; font-size:0.8rem; font-weight:600; margin-bottom:0.4rem;">Full Name</label>
            <input type="text" id="edit-profile-name" class="glass-input" value="${e.name}" />
          </div>

          <div>
            <label style="display:block; font-size:0.8rem; font-weight:600; margin-bottom:0.4rem;">Profile Picture</label>
            <div style="display:flex; gap:1rem; align-items:center; margin-bottom:0.5rem;">
              <img id="edit-profile-avatar-preview" src="${e.avatar||this.defaultAvatar}" style="width:50px; height:50px; border-radius:50%; object-fit:cover; border:2px solid var(--primary);" />
              <button id="remove-profile-pic-btn" class="btn btn-glass" style="padding:0.4rem 0.8rem; font-size:0.8rem; color:#e06c75;">Remove Photo</button>
            </div>
            <input type="file" id="edit-profile-avatar-file" class="glass-input" accept="image/*" style="font-size:0.8rem;" />
          </div>

          <div>
            <label style="display:block; font-size:0.8rem; font-weight:600; margin-bottom:0.4rem;">Country</label>
            <input type="text" id="edit-profile-country" class="glass-input" value="${e.country||``}" />
          </div>

          <div>
            <label style="display:block; font-size:0.8rem; font-weight:600; margin-bottom:0.4rem;">Biography</label>
            <textarea id="edit-profile-bio" class="glass-textarea" rows="3">${e.bio||``}</textarea>
          </div>

          <div>
            <label style="display:block; font-size:0.8rem; font-weight:600; margin-bottom:0.4rem;">Skills You Can Teach (comma-separated)</label>
            <input type="text" id="edit-profile-skills-teach" class="glass-input" value="${(e.skillsTeach||[]).join(`, `)}" />
          </div>

          <div>
            <label style="display:block; font-size:0.8rem; font-weight:600; margin-bottom:0.4rem;">Skills You Want to Learn (comma-separated)</label>
            <input type="text" id="edit-profile-skills-learn" class="glass-input" value="${(e.skillsLearn||[]).join(`, `)}" />
          </div>

          <div>
            <label style="display:block; font-size:0.8rem; font-weight:600; margin-bottom:0.4rem;">Languages Known (comma-separated)</label>
            <input type="text" id="edit-profile-languages" class="glass-input" value="${(e.languages||[]).join(`, `)}" />
          </div>

          <div>
            <label style="display:block; font-size:0.8rem; font-weight:600; margin-bottom:0.4rem;">Availability Days (comma-separated)</label>
            <input type="text" id="edit-profile-availability-days" class="glass-input" value="${(e.availability?.days||[]).join(`, `)}" />
          </div>

          <div>
            <label style="display:block; font-size:0.8rem; font-weight:600; margin-bottom:0.4rem;">Availability Hours (comma-separated)</label>
            <input type="text" id="edit-profile-availability-hours" class="glass-input" value="${(e.availability?.hours||[]).join(`, `)}" />
          </div>

          <div>
            <label style="display:block; font-size:0.8rem; font-weight:600; margin-bottom:0.4rem;">GitHub Link</label>
            <input type="text" id="edit-profile-github" class="glass-input" value="${e.socials?.github||``}" />
          </div>

          <div>
            <label style="display:block; font-size:0.8rem; font-weight:600; margin-bottom:0.4rem;">LinkedIn Link</label>
            <input type="text" id="edit-profile-linkedin" class="glass-input" value="${e.socials?.linkedin||``}" />
          </div>
        </div>

        <div style="display:flex; justify-content:flex-end; gap:0.75rem;">
          <button id="close-edit-modal" class="btn btn-glass">Cancel</button>
          <button id="save-edit-modal" class="btn btn-primary">Save Profile</button>
        </div>
      </div>
    `,t.classList.add(`active`);let n=document.getElementById(`close-edit-modal`),r=document.getElementById(`save-edit-modal`),i=document.getElementById(`edit-profile-avatar-file`),a=document.getElementById(`remove-profile-pic-btn`),o=document.getElementById(`edit-profile-avatar-preview`),s=e.avatar||``;i&&i.addEventListener(`change`,e=>{let t=e.target.files[0];if(t){let e=new FileReader;e.onload=e=>{s=e.target.result,o&&(o.src=s),window.showToast(`Local photo loaded. Click Save Profile to apply.`,`success`)},e.readAsDataURL(t)}}),a&&a.addEventListener(`click`,()=>{s=``,o&&(o.src=this.defaultAvatar),window.showToast(`Photo cleared. Click Save Profile to apply.`,`info`)});let c=()=>{t.classList.remove(`active`)};n.addEventListener(`click`,c),r.addEventListener(`click`,async()=>{let t=document.getElementById(`edit-profile-name`).value.trim(),n=document.getElementById(`edit-profile-bio`).value.trim(),r=document.getElementById(`edit-profile-country`).value.trim(),i=document.getElementById(`edit-profile-github`).value.trim(),a=document.getElementById(`edit-profile-linkedin`).value.trim(),o=document.getElementById(`edit-profile-skills-teach`).value.split(`,`).map(e=>e.trim()).filter(e=>e.length>0),u=document.getElementById(`edit-profile-skills-learn`).value.split(`,`).map(e=>e.trim()).filter(e=>e.length>0),d=document.getElementById(`edit-profile-languages`).value.split(`,`).map(e=>e.trim()).filter(e=>e.length>0),f=document.getElementById(`edit-profile-availability-days`).value.split(`,`).map(e=>e.trim()).filter(e=>e.length>0),p=document.getElementById(`edit-profile-availability-hours`).value.split(`,`).map(e=>e.trim()).filter(e=>e.length>0);if(!t){window.showToast(`Name is required.`,`error`);return}let m=e.id||(e._id?String(e._id):null);if(!m){window.showToast(`Cannot update profile: user ID missing.`,`error`);return}await l.updateUser(m,{name:t,avatar:s,bio:n,skillsTeach:o,skillsLearn:u,languages:d,country:r,availability:{days:f,hours:p},socials:{github:i,linkedin:a}}),window.showToast(`Skill Resume updated! AI Score re-evaluating...`,`success`),c(),window.location.reload()})}},y=t({DiscoveryPage:()=>b}),b=class{constructor(e){this.params=e,this.searchQuery=``,this.selectedCategory=e?.category||`All`,this.minRating=0}async render(){let e=await l.getUsers(),t=a.getCurrentUser(),n=e.filter(e=>{if(t&&e.id===t.id)return!1;let n=this.searchQuery.toLowerCase(),r=e.name.toLowerCase().includes(n),i=e.bio.toLowerCase().includes(n),a=e.skillsTeach.some(e=>e.toLowerCase().includes(n)),o=r||i||a,s=!0;return this.selectedCategory!==`All`&&(s=e.skillsTeach.some(e=>this.isSkillInCategory(e,this.selectedCategory))),o&&s&&e.ratings>=this.minRating});return`
      <div style="width: 100%;">
        <!-- Search Header Filter Panel -->
        <div class="glass-card" style="padding:1.5rem; margin-bottom:2rem; display:flex; flex-direction:column; gap:1.25rem; background:rgba(255,255,255,0.5);">
          <h2 style="font-family:'Outfit',sans-serif; color:var(--secondary); font-size:1.5rem; font-weight:700;">🔍 Discover Mentors & Exchange Partners</h2>
          
          <div style="display:flex; gap:1rem; flex-wrap:wrap;">
            <!-- Text Search input -->
            <div style="flex:2; min-width:250px;">
              <input type="text" id="mentor-search-input" class="glass-input" placeholder="Search by name, bio, or skills (e.g. Python, Painting)..." value="${this.searchQuery}" />
            </div>

            <!-- Category Filter dropdown -->
            <div style="flex:1; min-width:150px;">
              <select id="mentor-category-select" class="glass-select">
                <option value="All" ${this.selectedCategory===`All`?`selected`:``}>All Categories</option>
                <option value="Technology" ${this.selectedCategory===`Technology`?`selected`:``}>💻 Technology</option>
                <option value="Languages" ${this.selectedCategory===`Languages`?`selected`:``}>🗣️ Languages</option>
                <option value="Creative Arts" ${this.selectedCategory===`Creative Arts`?`selected`:``}>🎨 Creative Arts</option>
                <option value="Business" ${this.selectedCategory===`Business`?`selected`:``}>📈 Business</option>
                <option value="Academics" ${this.selectedCategory===`Academics`?`selected`:``}>🎓 Academics</option>
              </select>
            </div>

            <!-- Rating select -->
            <div style="flex:1; min-width:120px;">
              <select id="mentor-rating-select" class="glass-select">
                <option value="0">All Ratings</option>
                <option value="4.8">⭐ 4.8+ Stars</option>
                <option value="4.9">⭐ 4.9+ Stars</option>
              </select>
            </div>
          </div>
        </div>

        <!-- Mentors Grid Results -->
        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(320px, 1fr)); gap:2rem;">
          ${n.length===0?`
            <div class="glass-card text-center" style="grid-column:span 3; padding:4rem 0;">
              <p style="color:var(--text-muted); font-size:1.1rem; margin-bottom:1rem;">No mentors found matching your filters.</p>
              <button id="clear-search-btn" class="btn btn-primary">Clear Search Filters</button>
            </div>
          `:n.map(e=>`
            <div class="glass-card glass-card-hover" style="display:flex; flex-direction:column; justify-content:space-between; padding:1.75rem; background:rgba(255,255,255,0.5);">
              <div>
                <!-- Card Header -->
                <div style="display:flex; gap:1rem; align-items:center; margin-bottom:1rem;">
                  <img src="${e.avatar||`data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="%2379a3c3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style='background:%23f5ebe7;padding:4px;border-radius:50%;'><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`}" style="width:60px; height:60px; border-radius:50%; object-fit:cover; border:2px solid var(--primary);" />
                  <div>
                    <h3 style="font-family:'Outfit'; font-size:1.15rem; font-weight:700; color:var(--secondary); display:flex; align-items:center; gap:0.4rem;">
                      <a href="#profile?userId=${e.id}" style="text-decoration:none; color:inherit;">${e.name}</a>
                      ${e.isVerified?`🛡️`:``}
                    </h3>
                    <div style="display:flex; align-items:center; gap:0.5rem; color:#d4af37; font-size:0.8rem;">
                      <span>⭐ ${e.ratings}</span>
                      <span style="color:var(--text-muted);">| Strength ${e.portfolioStrength}%</span>
                    </div>
                  </div>
                </div>

                <p style="font-size:0.85rem; color:var(--text-muted); line-height:1.5; margin-bottom:1.25rem; min-height:55px;">${e.bio}</p>

                <!-- Skill Tags -->
                <div style="margin-bottom:1rem;">
                  <span style="font-size:0.7rem; font-weight:700; text-transform:uppercase; color:var(--neutral); display:block; margin-bottom:0.4rem;">Can Teach:</span>
                  <div style="display:flex; flex-wrap:wrap; gap:0.25rem;">
                    ${e.skillsTeach.map(e=>`<span class="badge badge-verified" style="font-size:0.65rem; text-transform:none;">${e}</span>`).join(``)}
                  </div>
                </div>

                <div style="margin-bottom:1.5rem;">
                  <span style="font-size:0.7rem; font-weight:700; text-transform:uppercase; color:var(--neutral); display:block; margin-bottom:0.4rem;">Wants to Learn:</span>
                  <div style="display:flex; flex-wrap:wrap; gap:0.25rem;">
                    ${e.skillsLearn.map(e=>`<span class="badge badge-credits" style="font-size:0.65rem; text-transform:none;">${e}</span>`).join(``)}
                  </div>
                </div>
              </div>

              <!-- Action buttons -->
              <div style="display:flex; gap:0.4rem; margin-top:0.5rem; flex-wrap:wrap;">
                <a href="#profile?userId=${e.id}" class="btn btn-glass" style="flex:1; padding:0.45rem; font-size:0.8rem;">Profile</a>
                <button class="btn btn-glass dm-mentor-btn" data-id="${e.id}" style="flex:1; padding:0.45rem; font-size:0.8rem;">💬 DM</button>
                <button class="btn btn-primary connect-swap-btn" data-id="${e.id}" data-name="${e.name}" style="flex:1.2; padding:0.45rem; font-size:0.8rem;">Connect & Swap</button>
              </div>
            </div>
          `).join(``)}
        </div>
      </div>
    `}isSkillInCategory(e,t){let n=[`Web Development`,`Frontend`,`Backend`,`Full Stack`,`DevOps`],r=[`AI`,`ML`,`Cyber Security`,`Cloud`,`Blockchain`,`Data Science`,`Mobile Development`,`Programming`],i=[`English`,`Hindi`,`Marathi`,`French`,`German`,`Japanese`,`Spanish`],a=[`Drawing`,`Painting`,`Sketching`,`Animation`,`Graphic Design`,`Photography`,`UI UX`,`Music`,`Dance`],o=[`Finance`,`Entrepreneurship`,`Marketing`,`Sales`,`Accounting`],s=[`Engineering`,`Mathematics`,`Science`,`Commerce`,`UPSC`,`NEET`,`JEE`],c=e.trim();return t===`Technology`?r.includes(c)||n.includes(c):t===`Languages`?i.includes(c):t===`Creative Arts`?a.includes(c):t===`Business`?o.includes(c):t===`Academics`&&s.includes(c)}async afterRender(){let e=document.getElementById(`mentor-search-input`),t=document.getElementById(`mentor-category-select`),n=document.getElementById(`mentor-rating-select`),r=document.getElementById(`clear-search-btn`);e&&e.addEventListener(`input`,()=>{this.searchQuery=e.value,this.reRender()}),t&&t.addEventListener(`change`,()=>{this.selectedCategory=t.value,this.reRender()}),n&&n.addEventListener(`change`,()=>{this.minRating=parseFloat(n.value),this.reRender()}),r&&r.addEventListener(`click`,()=>{this.searchQuery=``,this.selectedCategory=`All`,this.minRating=0,this.reRender()}),document.querySelectorAll(`.dm-mentor-btn`).forEach(e=>{e.addEventListener(`click`,e=>{e.target.getAttribute(`data-id`),window.location.hash=`#dashboard`})});let i=a.getCurrentUser();document.querySelectorAll(`.connect-swap-btn`).forEach(e=>{e.addEventListener(`click`,e=>{let t=e.target.getAttribute(`data-id`),n=e.target.getAttribute(`data-name`);this.openBookingModal(t,n,i)})})}async reRender(){let e=document.getElementById(`main-content`);e.innerHTML=await this.render(),await this.afterRender(),window.lucide&&window.lucide.createIcons()}async openBookingModal(e,t,n){let r=await l.getUser(e);if(!r||!n)return;let i=document.getElementById(`booking-modal-backdrop`);i||(i=document.createElement(`div`),i.id=`booking-modal-backdrop`,i.className=`modal-backdrop`,document.body.appendChild(i));let o=n.skillsTeach.filter(e=>r.skillsLearn.includes(e)),s=r.skillsTeach,c=n.skillsTeach;i.innerHTML=`
      <div class="modal-container glass-card" style="max-width:500px;">
        <h3 style="color:var(--secondary); font-family:'Outfit'; margin-bottom:1rem; display:flex; align-items:center; gap:0.5rem;">
          📅 Schedule Swap with ${t}
        </h3>

        <div style="display:flex; flex-direction:column; gap:1rem; margin-bottom:1.5rem;">
          
          <!-- Select skill you want to learn -->
          <div>
            <label style="display:block; font-size:0.8rem; font-weight:600; margin-bottom:0.4rem;">Select Skill to Learn</label>
            <select id="booking-learn-skill" class="glass-select">
              ${s.map(e=>`<option value="${e}">${e}</option>`).join(``)}
            </select>
          </div>

          <!-- Select Payment / Swapping Mode -->
          <div>
            <label style="display:block; font-size:0.8rem; font-weight:600; margin-bottom:0.4rem;">Swapping Method</label>
            <select id="booking-swap-mode" class="glass-select">
              ${o.length>0?`<option value="swap_direct" selected>🤝 Direct Skill Swap (In exchange for ${o[0]})</option>`:``}
              ${c.length>0?`<option value="swap_custom">🤝 Custom Swap (Choose a skill you can teach them)</option>`:``}
              <option value="credits" ${o.length===0?`selected`:``}>🪙 Pay 0 Skill Credits (Free - Mentors charge nothing)</option>
            </select>
          </div>

          <!-- Select Custom Swap Skill (Conditional display) -->
          <div id="custom-swap-skill-row" style="display:${o.length>0?`none`:`block`};">
            <label style="display:block; font-size:0.8rem; font-weight:600; margin-bottom:0.4rem;">Skill You Will Teach</label>
            <select id="booking-teach-skill" class="glass-select">
              ${c.map(e=>`<option value="${e}">${e}</option>`).join(``)}
              <option value="General Exchange">General Mentorship Swap</option>
            </select>
          </div>

          <!-- Date & Time Select -->
          <div style="display:flex; gap:1rem;">
            <div style="flex:1;">
              <label style="display:block; font-size:0.8rem; font-weight:600; margin-bottom:0.4rem;">Date</label>
              <input type="date" id="booking-date" class="glass-input" required value="2026-07-20" />
            </div>
            <div style="flex:1;">
              <label style="display:block; font-size:0.8rem; font-weight:600; margin-bottom:0.4rem;">Available Hours</label>
              <select id="booking-time" class="glass-select">
                ${r.availability?r.availability.hours.map(e=>`<option value="${e}">${e}</option>`).join(``):`<option value="10:00 - 11:00">10:00 - 11:00</option>`}
              </select>
            </div>
          </div>

        </div>

        <div style="display:flex; justify-content:flex-end; gap:0.75rem;">
          <button id="close-booking-modal" class="btn btn-glass">Cancel</button>
          <button id="confirm-booking-btn" class="btn btn-primary">Send Swap Request</button>
        </div>
      </div>
    `,i.classList.add(`active`);let u=document.getElementById(`close-booking-modal`),d=document.getElementById(`confirm-booking-btn`),f=document.getElementById(`booking-swap-mode`),p=document.getElementById(`custom-swap-skill-row`);f.addEventListener(`change`,()=>{f.value.startsWith(`swap_`)?p.style.display=`block`:p.style.display=`none`});let m=()=>{i.classList.remove(`active`)};u.addEventListener(`click`,m),d.addEventListener(`click`,async()=>{let r=document.getElementById(`booking-learn-skill`).value,i=f.value,o=document.getElementById(`booking-date`).value,s=document.getElementById(`booking-time`).value;if(!o){window.showToast(`Please pick a valid date.`,`error`);return}i===`credits`&&(n.credits-=0,a.setCurrentUser(n));let c={learnerId:n.id,learnerName:n.name,mentorId:e,mentorName:t,skillName:r,date:o,time:s,type:i===`credits`?`Free Mentorship Session`:`One-to-One Exchange`,creditCost:0};await l.createSession(c),window.showToast(`Request sent to ${t}!`,`success`),m(),window.location.hash=`#dashboard`})}},x=`modulepreload`,S=function(e,t){return new URL(e,t).href},C={},w=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,import.meta.url).href}r=o(t.map(t=>{if(t=S(t,n),t=s(t),t in C)return;C[t]=!0;let r=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}let i=document.createElement(`link`);if(i.rel=r?`stylesheet`:x,r||(i.as=`script`),i.crossOrigin=``,i.href=t,a&&i.setAttribute(`nonce`,a),document.head.appendChild(i),r)return new Promise((e,n)=>{i.addEventListener(`load`,e),i.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},T={landing:{component:h,isPrivate:!1},auth:{component:g,isPrivate:!1},dashboard:{component:_,isPrivate:!0},profile:{component:v,isPrivate:!0},discovery:{component:b,isPrivate:!0},matching:{component:class{async render(){let e=a.getCurrentUser();if(!e)return``;let t=(await l.getUsers()).filter(t=>t.id!==e.id).map(t=>({user:t,...this.calculateCompatibility(e,t)})).sort((e,t)=>t.score-e.score);return`
      <div style="width: 100%;">
        <!-- Header -->
        <div class="glass-card" style="padding: 2rem; margin-bottom: 2rem; background: linear-gradient(135deg, rgba(235, 205, 183, 0.15) 0%, rgba(121, 163, 195, 0.1) 100%);">
          <h1 style="font-family: 'Outfit', sans-serif; font-size: 2.25rem; font-weight: 800; color: var(--secondary); margin-bottom: 0.5rem;">
            🤝 AI Skill Swapping Matcher
          </h1>
          <p style="color: var(--text-muted); font-size: 1.05rem; max-width: 700px; line-height: 1.5;">
            SkillVerse AI scans other professionals to locate direct reciprocal learning trades. When you teach a skill they want to learn, and they teach a skill you want to learn, compatibility scales.
          </p>
        </div>

        <!-- Matching results list -->
        <div style="display:flex; flex-direction:column; gap:1.5rem;">
          ${t.length===0?`
            <div class="glass-card text-center" style="padding:4rem 0;">
              <p style="color:var(--text-muted);">Configure your skills inside your profile to trigger AI matches.</p>
            </div>
          `:t.map(e=>`
            <div class="glass-card match-card" style="padding:1.5rem; background:rgba(255,255,255,0.5);">
              <div style="display:flex; gap:1.5rem; flex:1; align-items:center; flex-wrap:wrap;">
                
                <!-- Avatar and basic details -->
                <div style="display:flex; gap:1rem; align-items:center; min-width:220px;">
                  <img src="${e.user.avatar}" style="width:70px; height:70px; border-radius:50%; object-fit:cover; border:2px solid var(--primary);" />
                  <div>
                    <h3 style="font-family:'Outfit'; font-size:1.2rem; font-weight:700; color:var(--secondary);">${e.user.name}</h3>
                    <div style="font-size:0.8rem; color:#d4af37;">⭐ ${e.user.ratings} | Level ${e.user.level}</div>
                    <span class="badge badge-verified" style="font-size:0.65rem; margin-top:0.25rem;">${e.user.role}</span>
                  </div>
                </div>

                <!-- Match Criteria Indicators -->
                <div style="flex:2; min-width:250px; display:flex; flex-direction:column; gap:0.5rem; font-size:0.85rem;">
                  <div style="display:flex; align-items:center; gap:0.5rem;">
                    <span style="font-size:1.1rem;">🤝</span>
                    <span><strong>Mutual Swap:</strong> You teach ${e.mutualTeach.join(`, `)||`No direct overlap`}, they teach you ${e.mutualLearn.join(`, `)||`No direct overlap`}.</span>
                  </div>
                  <div style="display:flex; align-items:center; gap:0.5rem; color:var(--text-muted);">
                    <span style="font-size:1.1rem;">📅</span>
                    <span><strong>Overlapping Days:</strong> ${e.mutualDays.join(`, `)||`Contact to coordinate availability`}</span>
                  </div>
                  <div style="display:flex; align-items:center; gap:0.5rem; color:var(--text-muted);">
                    <span style="font-size:1.1rem;">🗣️</span>
                    <span><strong>Common Languages:</strong> ${e.mutualLangs.join(`, `)}</span>
                  </div>
                </div>

              </div>

              <!-- Matching Gauge and Booking Actions -->
              <div style="display:flex; align-items:center; gap:2rem; flex-wrap:wrap; justify-content:flex-end;">
                <!-- Compatibility % badge dial -->
                <div class="match-percentage" style="border-color:${e.score>=90?`var(--primary)`:`var(--neutral)`}; background:rgba(255,255,255,0.85);">
                  ${e.score}%
                </div>
                
                <div style="display:flex; flex-direction:column; gap:0.5rem;" class="no-print">
                  <button class="btn btn-primary swap-now-btn" data-id="${e.user.id}" data-name="${e.user.name}">Connect & Swap</button>
                  <a href="#profile?userId=${e.user.id}" class="btn btn-glass" style="padding:0.4rem 1rem; font-size:0.8rem; text-align:center;">View Resume</a>
                </div>
              </div>
            </div>
          `).join(``)}
        </div>
      </div>
    `}calculateCompatibility(e,t){let n=50,r=e.skillsLearn.filter(e=>t.skillsTeach.includes(e)),i=e.skillsTeach.filter(e=>t.skillsLearn.includes(e));n+=r.length*15,n+=i.length*15;let a=e.availability?.days||[],o=t.availability?.days||[],s=a.filter(e=>o.includes(e));n+=s.length*5;let c=e.languages||[],l=t.languages||[],u=c.filter(e=>l.includes(e));return n+=u.length*5,n=Math.min(n,99),r.length===0&&i.length===0&&(n=Math.max(30,n-20)),{score:n,mutualLearn:r,mutualTeach:i,mutualDays:s,mutualLangs:u}}async afterRender(){let e=a.getCurrentUser();document.querySelectorAll(`.swap-now-btn`).forEach(t=>{t.addEventListener(`click`,t=>{let n=t.target.getAttribute(`data-id`),r=t.target.getAttribute(`data-name`);w(()=>Promise.resolve().then(()=>y).then(t=>{new t.DiscoveryPage().openBookingModal(n,r,e)}),void 0,import.meta.url)})})}},isPrivate:!0},"learning-room":{component:class{constructor(e){this.params=e,this.activeTab=`whiteboard`,this.sidebarTab=`chat`,this.isMuted=!1,this.isVideoOff=!1,this.isSharingScreen=!1,this.isHandRaised=!1,this.isRecording=!1,this.isSidebarOpen=!0,this.recordingTime=0,this.recordingInterval=null,this.localStream=null;let t=a.getCurrentUser(),n=t?.name?t.name.split(` `)[0]:`Learner`;this.chatMessages=[{sender:`System`,text:`SkillVerse Encrypted Meeting Tunnel Active.`,time:`10:00 AM`},{sender:`Sanskrutii Tidke`,text:`Hi ${n}, welcome to our Zoom session! We are ready to learn.`,time:`10:01 AM`},{sender:`Ashita Wairagade`,text:`Hey everyone! Glad to join. Ready to start when you are.`,time:`10:02 AM`}]}async render(){let e=a.getCurrentUser();return e?`
      <div class="meet-workspace">
        
        <!-- Header Info Bar -->
        <div class="meet-header">
          <div class="meet-title-group">
            <span class="meet-badge">LIVE SECURE</span>
            <h2 class="meet-title">💻 Advanced Full Stack Swapping: Web Architecture</h2>
            <p class="meet-subtitle">Host: <strong>Sanskrutii Tidke</strong> | Co-Host: <strong>Ashita Wairagade</strong></p>
          </div>
          
          <div class="meet-status-group">
            <div id="meet-timer-container" class="meet-timer" style="display: none;">
              <span class="timer-dot"></span>
              REC <span id="meet-timer-val">00:00</span>
            </div>
            <button id="leave-call-btn" class="btn-leave">📞 End Swap</button>
          </div>
        </div>

        <!-- Main Workspace Area -->
        <div class="meet-main-layout ${this.isSidebarOpen?`sidebar-open`:``}">
          
          <!-- LEFT / CENTER: CALL STREAMS & PRESENTATION GRID -->
          <div class="meet-content-area">
            
            <div class="meet-viewscreen-grid ${this.isSharingScreen?`sharing-layout`:`grid-layout`}">
              
              <!-- SCREEN SHARE MAIN PREVIEW SCREEN -->
              ${this.isSharingScreen?`
                <div class="screen-share-view glass-card">
                  <div class="presentation-header">
                    <span style="display:flex; align-items:center; gap:0.5rem; color:#fff;">
                      🖥️ <strong>${e.name||`You`} is presenting</strong>
                    </span>
                    <span style="font-size:0.75rem; color:rgba(255,255,255,0.6);">Click Stop Sharing in controls to return</span>
                  </div>
                  <!-- Mock presentation slide / code -->
                  <div class="presentation-body">
                    <pre style="margin:0; font-family:monospace; font-size:0.9rem; color:#85b5e1; text-align:left;">
// SkillVerse Dynamic CSS Grid & Variable Demo
const theme = {
  primary: '#79A3C3',
  background: 'rgba(255, 255, 255, 0.45)',
  blur: '12px'
};

function renderGlassmorphismCard() {
  const card = document.createElement('div');
  card.style.backdropFilter = \`blur(\${theme.blur})\`;
  card.style.background = theme.background;
  console.log("Card mounted on viewport successfully!");
}</pre>
                  </div>
                </div>
              `:``}

              <!-- PARTICIPANT FEEDS CONTAINER -->
              <div class="meet-feeds-group">
                
                <!-- Feed 1: Sanskrutii Tidke (Mentor) -->
                <div class="meet-video-card speaker-active">
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=250" class="feed-img" />
                  <div class="speaking-indicator">
                    <div class="indicator-bar bar-1"></div>
                    <div class="indicator-bar bar-2"></div>
                    <div class="indicator-bar bar-3"></div>
                  </div>
                  <div class="feed-label">
                    <span>Sanskrutii Tidke (Mentor)</span>
                    <span class="mic-icon-feed">🎙️</span>
                  </div>
                </div>

                <!-- Feed 2: Ashita Wairagade (Participant) -->
                <div class="meet-video-card">
                  <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=250" class="feed-img" />
                  <div class="feed-label">
                    <span>Ashita Wairagade (Learner)</span>
                    <span class="mic-icon-feed">🎙️</span>
                  </div>
                </div>

                <!-- Feed 3: You (real webcam) -->
                <div class="meet-video-card your-feed">
                  <!-- Real camera feed via getUserMedia -->
                  <video id="my-video-feed" class="feed-img" autoplay muted playsinline
                    style="display:${this.isVideoOff?`none`:`block`}; object-fit:cover;"></video>

                  <!-- Fallback avatar when camera is off or unavailable -->
                  <div id="my-video-avatar" class="feed-avatar-placeholder" style="display:${this.isVideoOff?`flex`:`none`};">
                    <img src="${e.avatar||`https://ui-avatars.com/api/?name=${encodeURIComponent(e.name||`You`)}&background=6c63ff&color=fff&size=200&bold=true&rounded=true`}" 
                      style="width:64px; height:64px; border-radius:50%; object-fit:cover; border:2px solid var(--primary);" />
                    <span style="font-size:0.75rem; color:#abb1b8; margin-top:0.5rem;" id="my-avatar-label">Camera Off</span>
                  </div>

                  <!-- Hand raise badge -->
                  <div id="my-hand-badge" class="hand-raised-badge ${this.isHandRaised?`active`:``}">🙋‍♀️ Hand Raised</div>
                  
                  <div class="feed-label">
                    <span>${e.name||`You`} (You)</span>
                    <span id="my-mic-feed-icon" class="mic-icon-feed ${this.isMuted?`muted`:``}">🎙️</span>
                  </div>
                </div>

              </div>

            </div>

            <!-- COLLABORATIVE SANDBOX COLLAPSED TAB/SLIDE (Interactive Area below video feeds) -->
            <div class="sandbox-card glass-card">
              <div class="sandbox-header">
                <button class="sandbox-tab-btn ${this.activeTab===`whiteboard`?`active`:``}" data-sandbox-tab="whiteboard">🎨 Whiteboard Canvas</button>
                <button class="sandbox-tab-btn ${this.activeTab===`code`?`active`:``}" data-sandbox-tab="code">💻 Collaborative Code Editor</button>
                <button class="sandbox-tab-btn ${this.activeTab===`notes`?`active`:``}" data-sandbox-tab="notes">🤖 AI Summary Notes</button>
              </div>

              <div class="sandbox-body">
                <!-- Whiteboard -->
                <div id="sandbox-whiteboard" style="display:${this.activeTab===`whiteboard`?`block`:`none`};">
                  <div class="whiteboard-toolbar">
                    <div style="display:flex; gap:0.5rem;">
                      <button class="color-btn" style="background:#221d1b;" data-color="#221d1b"></button>
                      <button class="color-btn" style="background:#79A3C3;" data-color="#79A3C3"></button>
                      <button class="color-btn" style="background:#e06c75;" data-color="#e06c75"></button>
                    </div>
                    <button id="clear-meet-whiteboard" class="btn btn-glass" style="padding:0.25rem 0.75rem; font-size:0.75rem;">Clear Whiteboard</button>
                  </div>
                  <canvas id="meet-whiteboard-canvas" class="meet-canvas"></canvas>
                </div>

                <!-- Code Sandbox -->
                <div id="sandbox-code" style="display:${this.activeTab===`code`?`block`:`none`};">
                  <textarea id="meet-code-editor" class="meet-editor-text" spellcheck="false">// Collaborative Code Workspace
// Write JavaScript or styling tests below
function initSkillVerseExchange() {
  const mentors = ['Sanskrutii Tidke', 'Ashita Wairagade'];
  const user = '${e.name||`You`}';
  
  console.log("Setting up free swap call for " + user + " with " + mentors.join(", ") + ".");
}
                  </textarea>
                </div>

                <!-- AI Notes -->
                <div id="sandbox-notes" style="display:${this.activeTab===`notes`?`block`:`none`};">
                  <button id="generate-ai-meet-notes" class="btn btn-primary" style="width:100%; margin-bottom:1rem; font-size:0.85rem;">🤖 Compile AI Session Summaries & Checklists</button>
                  <div id="meet-notes-container" class="notes-container-box">
                    <p style="color:var(--text-muted); font-style:italic; text-align:center;">Generate a summary based on meeting transcripts and codes.</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- MEETING CONTROLS TOOLBAR -->
            <div class="meet-controls-bar">
              <button id="btn-mute" class="control-circle ${this.isMuted?`active-red`:``}" title="${this.isMuted?`Unmute microphone`:`Mute microphone`}">
                <span class="control-emoji">${this.isMuted?`🎙️❌`:`🎙️`}</span>
              </button>
              
              <button id="btn-camera" class="control-circle ${this.isVideoOff?`active-red`:``}" title="${this.isVideoOff?`Start video`:`Stop video`}">
                <span class="control-emoji">${this.isVideoOff?`📹❌`:`📹`}</span>
              </button>

              <button id="btn-screenshare" class="control-circle ${this.isSharingScreen?`active-green`:``}" title="Share screen">
                <span class="control-emoji">🖥️</span>
              </button>

              <button id="btn-handraise" class="control-circle ${this.isHandRaised?`active-yellow`:``}" title="Raise hand">
                <span class="control-emoji">🙋‍♀️</span>
              </button>

              <button id="btn-record" class="control-circle ${this.isRecording?`active-red`:``}" title="Record meeting">
                <span class="control-emoji">🔴</span>
              </button>

              <button id="btn-sidebar" class="control-circle ${this.isSidebarOpen?`active-primary`:``}" title="Toggle meeting sidebar">
                <span class="control-emoji">💬</span>
              </button>
            </div>

          </div>

          <!-- RIGHT SIDE PANEL: CHAT & PEOPLE -->
          <div class="meet-sidebar glass-card">
            <div class="sidebar-header-tabs">
              <button class="sidebar-tab-btn ${this.sidebarTab===`chat`?`active`:``}" data-side-tab="chat">💬 Chat</button>
              <button class="sidebar-tab-btn ${this.sidebarTab===`people`?`active`:``}" data-side-tab="people">👥 People (3)</button>
            </div>

            <div class="sidebar-tab-content">
              
              <!-- Tab 1: Chat Message Log -->
              <div id="side-tab-chat" style="display:${this.sidebarTab===`chat`?`flex`:`none`}; flex-direction:column; height:100%;">
                <div id="meet-chat-log" class="meet-chat-log-box">
                  ${this.chatMessages.map(t=>`
                    <div class="meet-chat-bubble ${t.sender===`System`?`system-bubble`:t.isMine||t.sender===e.name?`my-bubble`:`other-bubble`}">
                      <small class="sender-label">${t.sender}</small>
                      <p class="bubble-text">${t.text}</p>
                    </div>
                  `).join(``)}
                </div>
                
                <div class="meet-chat-input-bar">
                  <input type="text" id="meet-chat-input" placeholder="Send a message to everyone..." autocomplete="off" />
                  <button id="meet-chat-send-btn">Send</button>
                </div>
              </div>

              <!-- Tab 2: Participants List -->
              <div id="side-tab-people" style="display:${this.sidebarTab===`people`?`block`:`none`};">
                <div class="people-list-container">
                  <div class="people-row">
                    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100" class="people-avatar" />
                    <div class="people-info">
                      <span class="people-name">Sanskrutii Tidke</span>
                      <span class="people-role">Host, Mentor</span>
                    </div>
                    <span style="font-size:0.9rem;">🎙️ On</span>
                  </div>

                  <div class="people-row">
                    <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100" class="people-avatar" />
                    <div class="people-info">
                      <span class="people-name">Ashita Wairagade</span>
                      <span class="people-role">Participant</span>
                    </div>
                    <span style="font-size:0.9rem;">🎙️ On</span>
                  </div>

                  <div class="people-row">
                    <img src="${e.avatar}" class="people-avatar" />
                    <div class="people-info">
                      <span class="people-name">${e.name||`You`} (You)</span>
                      <span class="people-role">Presenter</span>
                    </div>
                    <span id="my-mic-status-label" style="font-size:0.9rem;">${this.isMuted?`🎙️ Muted`:`🎙️ On`}</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      <style>
        .meet-workspace {
          width: 100%;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          background: #110e0d;
          color: #f6f8fa;
          padding: 1.5rem;
          box-sizing: border-box;
          border-radius: var(--radius-md);
        }
        .meet-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid rgba(255,255,255,0.08);
          padding-bottom: 1rem;
          margin-bottom: 1rem;
        }
        .meet-title-group {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }
        .meet-badge {
          align-self: flex-start;
          font-size: 0.65rem;
          font-weight: 700;
          padding: 0.15rem 0.5rem;
          border-radius: 4px;
          background: #4cd964;
          color: #221d1b;
          letter-spacing: 0.05em;
        }
        .meet-title {
          font-size: 1.25rem;
          font-family: 'Outfit';
          margin: 0;
          color: #fff;
          font-weight: 700;
        }
        .meet-subtitle {
          font-size: 0.8rem;
          color: #abb1b8;
          margin: 0;
        }
        .meet-status-group {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .meet-timer {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          color: #e06c75;
          font-size: 0.85rem;
          font-weight: 700;
          background: rgba(224, 108, 117, 0.15);
          padding: 0.3rem 0.75rem;
          border-radius: var(--radius-sm);
        }
        .timer-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #e06c75;
          animation: blink-timer 1.2s infinite;
        }
        @keyframes blink-timer {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        .btn-leave {
          background: #e06c75;
          border: none;
          color: #fff;
          font-size: 0.85rem;
          font-weight: 700;
          padding: 0.5rem 1.25rem;
          border-radius: var(--radius-sm);
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .btn-leave:hover {
          background: #d05b64;
          transform: scale(1.02);
        }

        .meet-main-layout {
          display: flex;
          gap: 1.5rem;
          flex: 1;
          height: calc(100vh - 120px);
          overflow: hidden;
        }
        .meet-content-area {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          min-width: 0;
          height: 100%;
        }

        .meet-viewscreen-grid {
          flex: 1.3;
          min-height: 280px;
          display: flex;
          gap: 1rem;
        }
        .grid-layout .meet-feeds-group {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1rem;
          width: 100%;
        }
        .sharing-layout {
          display: flex;
        }
        .sharing-layout .screen-share-view {
          flex: 2.2;
          background: #1e1e1e;
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: var(--radius-sm);
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }
        .sharing-layout .meet-feeds-group {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          overflow-y: auto;
        }

        .presentation-header {
          background: #110e0d;
          padding: 0.5rem 1rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        .presentation-body {
          flex: 1;
          background: #1c2229;
          padding: 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .meet-video-card {
          position: relative;
          background: #201a18;
          border-radius: var(--radius-sm);
          border: 2px solid transparent;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          aspect-ratio: 16/10;
        }
        .meet-video-card.speaker-active {
          border-color: #4cd964;
          box-shadow: 0 0 15px rgba(76, 217, 100, 0.2);
        }
        .feed-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .feed-label {
          position: absolute;
          bottom: 0.75rem;
          left: 0.75rem;
          background: rgba(0, 0, 0, 0.6);
          padding: 0.25rem 0.6rem;
          border-radius: 6px;
          font-size: 0.75rem;
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }
        .mic-icon-feed {
          font-size: 0.7rem;
        }
        .mic-icon-feed.muted {
          filter: grayscale(1) opacity(0.5);
        }
        .speaking-indicator {
          position: absolute;
          top: 0.75rem;
          right: 0.75rem;
          background: #4cd964;
          padding: 0.35rem;
          border-radius: 50%;
          display: flex;
          align-items: flex-end;
          gap: 2px;
          width: 18px;
          height: 18px;
          box-sizing: border-box;
          justify-content: center;
        }
        .indicator-bar {
          width: 2px;
          background: #221d1b;
          border-radius: 1px;
        }
        .bar-1 { height: 6px; animation: bounce-bar 0.8s infinite alternate ease-in-out; }
        .bar-2 { height: 10px; animation: bounce-bar 0.6s infinite alternate ease-in-out 0.1s; }
        .bar-3 { height: 4px; animation: bounce-bar 0.7s infinite alternate ease-in-out 0.2s; }
        @keyframes bounce-bar {
          0% { height: 2px; }
          100% { height: 100%; }
        }

        .feed-avatar-placeholder {
          width: 100%;
          height: 100%;
          background: #221d1b;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .hand-raised-badge {
          position: absolute;
          top: 0.75rem;
          left: 0.75rem;
          background: #ffd700;
          color: #221d1b;
          font-weight: 700;
          font-size: 0.7rem;
          padding: 0.2rem 0.5rem;
          border-radius: 4px;
          display: none;
          box-shadow: 0 4px 10px rgba(0,0,0,0.15);
        }
        .hand-raised-badge.active {
          display: block;
          animation: scale-up-hand 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        @keyframes scale-up-hand {
          0% { transform: scale(0.6); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }

        .sandbox-card {
          flex: 1;
          background: rgba(255,255,255,0.05);
          display: flex;
          flex-direction: column;
          border-radius: var(--radius-sm);
          overflow: hidden;
          min-height: 220px;
        }
        .sandbox-header {
          display: flex;
          background: rgba(0,0,0,0.2);
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        .sandbox-tab-btn {
          flex: 1;
          background: none;
          border: none;
          color: #abb1b8;
          padding: 0.6rem;
          cursor: pointer;
          font-weight: 600;
          font-size: 0.8rem;
          border-bottom: 2px solid transparent;
          transition: all 0.2s ease;
          font-family: inherit;
        }
        .sandbox-tab-btn:hover {
          color: #fff;
          background: rgba(255,255,255,0.02);
        }
        .sandbox-tab-btn.active {
          color: var(--primary);
          border-bottom-color: var(--primary);
          background: rgba(255,255,255,0.05);
        }
        .sandbox-body {
          flex: 1;
          padding: 0.75rem;
          overflow: hidden;
        }
        .whiteboard-toolbar {
          display: flex;
          justify-content: space-between;
          margin-bottom: 0.4rem;
          align-items: center;
        }
        .color-btn {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.2);
          cursor: pointer;
        }
        .meet-canvas {
          width: 100%;
          height: 140px;
          background: #faf8f6;
          border-radius: var(--radius-sm);
          cursor: crosshair;
        }
        .meet-editor-text {
          width: 100%;
          height: 140px;
          background: #1c2229;
          color: #85b5e1;
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: var(--radius-sm);
          padding: 0.75rem;
          font-family: monospace;
          font-size: 0.8rem;
          outline: none;
          resize: none;
        }
        .notes-container-box {
          height: 100px;
          overflow-y: auto;
          background: #fff;
          color: var(--text-dark);
          border-radius: var(--radius-sm);
          padding: 0.75rem;
          font-size: 0.8rem;
          line-height: 1.4;
          text-align: left;
        }

        .meet-controls-bar {
          display: flex;
          justify-content: center;
          gap: 0.75rem;
          padding: 0.5rem;
          background: rgba(0,0,0,0.3);
          border-radius: var(--radius-full);
          align-self: center;
        }
        .control-circle {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: #3c4043;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
        }
        .control-circle:hover {
          background: #4e5256;
          transform: scale(1.05);
        }
        .control-emoji {
          font-size: 1.15rem;
          color: #fff;
        }
        .control-circle.active-red {
          background: #e06c75;
        }
        .control-circle.active-red:hover {
          background: #d05b64;
        }
        .control-circle.active-green {
          background: #4cd964;
        }
        .control-circle.active-yellow {
          background: #ffd700;
        }
        .control-circle.active-yellow .control-emoji {
          color: #221d1b;
        }
        .control-circle.active-primary {
          background: var(--primary);
        }

        .meet-sidebar {
          width: 320px;
          display: none;
          flex-direction: column;
          background: rgba(255,255,255,0.06);
          border-radius: var(--radius-sm);
          border: 1px solid rgba(255,255,255,0.08);
          overflow: hidden;
          height: 100%;
        }
        .meet-main-layout.sidebar-open .meet-sidebar {
          display: flex;
        }

        .sidebar-header-tabs {
          display: flex;
          background: rgba(0,0,0,0.2);
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }
        .sidebar-tab-btn {
          flex: 1;
          background: none;
          border: none;
          color: #abb1b8;
          padding: 0.85rem;
          cursor: pointer;
          font-weight: 700;
          font-size: 0.85rem;
          border-bottom: 2px solid transparent;
          font-family: inherit;
          transition: all 0.2s ease;
        }
        .sidebar-tab-btn.active {
          color: var(--primary);
          border-bottom-color: var(--primary);
          background: rgba(255,255,255,0.03);
        }
        .sidebar-tab-content {
          flex: 1;
          padding: 1rem;
          overflow: hidden;
          min-height: 0;
        }

        .meet-chat-log-box {
          flex: 1;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin-bottom: 0.75rem;
          padding-right: 0.25rem;
        }
        .meet-chat-bubble {
          padding: 0.5rem 0.75rem;
          border-radius: 8px;
          font-size: 0.8rem;
          line-height: 1.3;
          max-width: 85%;
        }
        .system-bubble {
          background: rgba(255,255,255,0.05);
          border: 1px dashed rgba(255,255,255,0.15);
          align-self: center;
          text-align: center;
          max-width: 95%;
          color: #abb1b8;
        }
        .my-bubble {
          background: var(--primary);
          color: #fff;
          align-self: flex-end;
          border-bottom-right-radius: 2px;
        }
        .other-bubble {
          background: rgba(255,255,255,0.1);
          align-self: flex-start;
          border-bottom-left-radius: 2px;
        }
        .sender-label {
          display: block;
          font-size: 0.65rem;
          font-weight: 700;
          margin-bottom: 0.15rem;
          opacity: 0.8;
        }
        .bubble-text {
          margin: 0;
        }
        .meet-chat-input-bar {
          display: flex;
          gap: 0.4rem;
        }
        #meet-chat-input {
          flex: 1;
          background: rgba(0,0,0,0.2);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: var(--radius-sm);
          color: #fff;
          padding: 0.45rem 0.75rem;
          font-size: 0.8rem;
          outline: none;
          font-family: inherit;
        }
        #meet-chat-input:focus {
          border-color: var(--primary);
        }
        #meet-chat-send-btn {
          background: var(--primary);
          border: none;
          color: #fff;
          border-radius: var(--radius-sm);
          padding: 0.45rem 0.85rem;
          font-size: 0.8rem;
          cursor: pointer;
          font-weight: 600;
        }

        .people-list-container {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }
        .people-row {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background: rgba(255,255,255,0.03);
          padding: 0.5rem;
          border-radius: 8px;
          border: 1px solid rgba(255,255,255,0.04);
        }
        .people-avatar {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          object-fit: cover;
        }
        .people-info {
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        .people-name {
          font-size: 0.8rem;
          font-weight: 700;
        }
        .people-role {
          font-size: 0.65rem;
          color: #abb1b8;
        }
      </style>
    `:``}async afterRender(){let e=a.getCurrentUser();this.startLocalMedia(),document.querySelectorAll(`.sandbox-tab-btn`).forEach(e=>{e.addEventListener(`click`,e=>{let t=e.target.getAttribute(`data-sandbox-tab`);this.activeTab=t;let n=document.getElementById(`sandbox-whiteboard`),r=document.getElementById(`sandbox-code`),i=document.getElementById(`sandbox-notes`);n&&(n.style.display=t===`whiteboard`?`block`:`none`),r&&(r.style.display=t===`code`?`block`:`none`),i&&(i.style.display=t===`notes`?`block`:`none`),document.querySelectorAll(`.sandbox-tab-btn`).forEach(e=>e.classList.remove(`active`)),e.target.classList.add(`active`),t===`whiteboard`&&this.initWhiteboard()})}),document.querySelectorAll(`.sidebar-tab-btn`).forEach(e=>{e.addEventListener(`click`,e=>{let t=e.target.getAttribute(`data-side-tab`);this.sidebarTab=t;let n=document.getElementById(`side-tab-chat`),r=document.getElementById(`side-tab-people`);n&&(n.style.display=t===`chat`?`flex`:`none`),r&&(r.style.display=t===`people`?`block`:`none`),document.querySelectorAll(`.sidebar-tab-btn`).forEach(e=>e.classList.remove(`active`)),e.target.classList.add(`active`),t===`chat`&&setTimeout(()=>this.scrollChat(),50)})});let t=document.getElementById(`btn-mute`);t&&t.addEventListener(`click`,()=>{this.isMuted=!this.isMuted,t.classList.toggle(`active-red`,this.isMuted),t.title=this.isMuted?`Unmute microphone`:`Mute microphone`;let e=t.querySelector(`.control-emoji`);e&&(e.innerText=this.isMuted?`🎙️❌`:`🎙️`),this.localStream&&this.localStream.getAudioTracks().forEach(e=>{e.enabled=!this.isMuted});let n=document.getElementById(`my-mic-feed-icon`);n&&n.classList.toggle(`muted`,this.isMuted);let r=document.getElementById(`my-mic-status-label`);r&&(r.innerText=this.isMuted?`🎙️ Muted`:`🎙️ On`),window.showToast(this.isMuted?`Microphone muted`:`Microphone unmuted`,`info`)});let n=document.getElementById(`btn-camera`);n&&n.addEventListener(`click`,()=>{this.isVideoOff=!this.isVideoOff,n.classList.toggle(`active-red`,this.isVideoOff),n.title=this.isVideoOff?`Start video`:`Stop video`;let e=n.querySelector(`.control-emoji`);e&&(e.innerText=this.isVideoOff?`📹❌`:`📹`),this.localStream&&this.localStream.getVideoTracks().forEach(e=>{e.enabled=!this.isVideoOff});let t=document.getElementById(`my-video-feed`),r=document.getElementById(`my-video-avatar`);t&&(t.style.display=this.isVideoOff?`none`:`block`),r&&(r.style.display=this.isVideoOff?`flex`:`none`);let i=document.getElementById(`my-avatar-label`);i&&(i.textContent=this.isVideoOff?`Camera Off`:`Camera On`),window.showToast(this.isVideoOff?`Camera stopped`:`Camera started`,`info`)});let r=document.getElementById(`btn-screenshare`);r.addEventListener(`click`,()=>{this.isSharingScreen=!this.isSharingScreen,r.classList.toggle(`active-green`,this.isSharingScreen),window.showToast(this.isSharingScreen?`Screen sharing initialized`:`Screen sharing stopped`,`success`),this.reRenderUI()});let i=document.getElementById(`btn-handraise`);i.addEventListener(`click`,()=>{this.isHandRaised=!this.isHandRaised,i.classList.toggle(`active-yellow`,this.isHandRaised);let e=document.getElementById(`my-hand-badge`);e&&e.classList.toggle(`active`,this.isHandRaised),this.isHandRaised?(window.showToast(`You raised your hand`,`success`),this.playHandRaiseChime(),setTimeout(()=>{let e=a.getCurrentUser()?.name,t=e?e.split(` `)[0]:`there`;this.chatMessages.push({sender:`Sanskrutii Tidke`,text:`Yes, ${t}? I see your hand raised, go ahead and ask!`,time:new Date().toLocaleTimeString([],{hour:`2-digit`,minute:`2-digit`})}),this.renderChatLogsOnly(),this.scrollChat()},1500)):window.showToast(`You lowered your hand`,`info`)});let o=document.getElementById(`btn-record`);o.addEventListener(`click`,()=>{this.isRecording=!this.isRecording,o.classList.toggle(`active-red`,this.isRecording);let e=document.getElementById(`meet-timer-container`);this.isRecording?(e.style.display=`flex`,this.recordingTime=0,this.recordingInterval=setInterval(()=>{this.recordingTime++;let e=Math.floor(this.recordingTime/60).toString().padStart(2,`0`),t=(this.recordingTime%60).toString().padStart(2,`0`);document.getElementById(`meet-timer-val`).innerText=`${e}:${t}`},1e3),window.showToast(`Recording initialized...`,`info`)):(clearInterval(this.recordingInterval),e.style.display=`none`,window.showToast(`Recording saved to your local cloud space.`,`success`))});let s=document.getElementById(`btn-sidebar`);s.addEventListener(`click`,()=>{this.isSidebarOpen=!this.isSidebarOpen,s.classList.toggle(`active-primary`,this.isSidebarOpen),document.querySelector(`.meet-main-layout`).classList.toggle(`sidebar-open`,this.isSidebarOpen),this.isSidebarOpen&&setTimeout(()=>this.scrollChat(),50)});let c=document.getElementById(`meet-chat-input`),l=document.getElementById(`meet-chat-send-btn`),u=()=>{let e=c.value.trim();if(!e)return;c.value=``;let t=a.getCurrentUser()?.name||`You`;this.chatMessages.push({sender:t,isMine:!0,text:e,time:new Date().toLocaleTimeString([],{hour:`2-digit`,minute:`2-digit`})}),this.renderChatLogsOnly(),this.scrollChat(),setTimeout(()=>{let t=``,n=``;if(e.toLowerCase().includes(`code`)||e.toLowerCase().includes(`error`)||e.toLowerCase().includes(`bug`))n=`Sanskrutii Tidke`,t=`Let me look at that in the Collaborative Code Editor. Open the tab below so we can fix it!`;else if(e.toLowerCase().includes(`ai`)||e.toLowerCase().includes(`model`)||e.toLowerCase().includes(`python`))n=`Ashita Wairagade`,t=`I've loaded a simple training loop algorithm in the sandbox too. Take a look.`;else{let e=a.getCurrentUser()?.name,r=[`Excellent point, ${e?e.split(` `)[0]:`friend`}. Let's sketch that design component on our whiteboard.`,`That completely makes sense. Let's analyze it together.`,`I'm keeping track of these key takeaways for our summary review!`];n=Math.random()>.5?`Sanskrutii Tidke`:`Ashita Wairagade`,t=r[Math.floor(Math.random()*r.length)]}this.chatMessages.push({sender:n,text:t,time:new Date().toLocaleTimeString([],{hour:`2-digit`,minute:`2-digit`})}),this.renderChatLogsOnly(),this.scrollChat()},1400)};l&&l.addEventListener(`click`,u),c&&c.addEventListener(`keydown`,e=>{e.key===`Enter`&&u()});let d=document.getElementById(`generate-ai-meet-notes`);d&&d.addEventListener(`click`,async()=>{let e=document.getElementById(`meet-notes-container`);e.innerHTML=`
          <div style="text-align:center; padding:1.5rem 0;">
            <p style="color:var(--text-muted); font-size:0.8rem;">Synthesizing meeting logs and files...</p>
          </div>
        `;try{let t=await p.generateRoadmap(`Review notes for CSS layout design and full stack connections.`);e.innerHTML=`<div style="text-align:left; font-size:0.75rem;">${this.parseMarkdown(t)}</div>`,window.showToast(`AI meeting notes successfully compiled!`,`success`)}catch{e.innerHTML=`<p style="color:#e06c75; font-size:0.8rem;">AI notes generation failed.</p>`}});let f=document.getElementById(`leave-call-btn`);f&&f.addEventListener(`click`,()=>{this.localStream&&=(this.localStream.getTracks().forEach(e=>e.stop()),null),this.openCompletionModal(e)}),this.initWhiteboard(),this.scrollChat()}async startLocalMedia(){let e=document.getElementById(`my-video-feed`),t=document.getElementById(`my-video-avatar`),n=document.getElementById(`my-avatar-label`);if(!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia){e&&(e.style.display=`none`),t&&(t.style.display=`flex`),n&&(n.textContent=`Camera unavailable`);return}try{let n=await navigator.mediaDevices.getUserMedia({video:!0,audio:!0});this.localStream=n,e&&(e.srcObject=n,e.style.display=`block`),t&&(t.style.display=`none`),window.showToast(`Camera & microphone connected`,`success`)}catch(r){console.warn(`getUserMedia denied or unavailable:`,r.message),e&&(e.style.display=`none`),t&&(t.style.display=`flex`),n&&(n.textContent=`Camera Blocked`),window.showToast(`Camera/mic access denied — using avatar`,`info`)}}playHandRaiseChime(){try{let e=window.AudioContext||window.webkitAudioContext;if(!e)return;let t=new e,n=t.createOscillator(),r=t.createGain();n.type=`sine`,n.frequency.setValueAtTime(587.33,t.currentTime),n.frequency.exponentialRampToValueAtTime(880,t.currentTime+.15),r.gain.setValueAtTime(.1,t.currentTime),r.gain.exponentialRampToValueAtTime(.001,t.currentTime+.35),n.connect(r),r.connect(t.destination),n.start(),n.stop(t.currentTime+.4)}catch(e){console.warn(`Audio Context blocked or unsupported in browser.`,e)}}initWhiteboard(){let e=document.getElementById(`meet-whiteboard-canvas`);if(!e)return;let t=e.getContext(`2d`);e.width=e.parentElement.clientWidth,e.height=140,t.lineWidth=3,t.lineCap=`round`;let n=!1,r=`#221d1b`;t.strokeStyle=r;let i=r=>{n=!0,t.beginPath();let i=e.getBoundingClientRect();t.moveTo(r.clientX-i.left,r.clientY-i.top)},a=r=>{if(!n)return;let i=e.getBoundingClientRect();t.lineTo(r.clientX-i.left,r.clientY-i.top),t.stroke()},o=()=>{n=!1};e.addEventListener(`mousedown`,i),e.addEventListener(`mousemove`,a),e.addEventListener(`mouseup`,o),e.addEventListener(`mouseleave`,o),document.querySelectorAll(`.color-btn`).forEach(e=>{e.addEventListener(`click`,e=>{r=e.target.getAttribute(`data-color`),t.strokeStyle=r})});let s=document.getElementById(`clear-meet-whiteboard`);s&&s.addEventListener(`click`,()=>{t.clearRect(0,0,e.width,e.height)})}renderChatLogsOnly(){let e=document.getElementById(`meet-chat-log`);if(!e)return;let t=a.getCurrentUser()?.name||`You`;e.innerHTML=this.chatMessages.map(e=>`
      <div class="meet-chat-bubble ${e.sender===`System`?`system-bubble`:e.isMine||e.sender===t?`my-bubble`:`other-bubble`}">
        <small class="sender-label">${e.sender}</small>
        <p class="bubble-text">${e.text}</p>
      </div>
    `).join(``)}scrollChat(){let e=document.getElementById(`meet-chat-log`);e&&(e.scrollTop=e.scrollHeight)}openCompletionModal(e){let t=document.getElementById(`completion-modal-backdrop`);t||(t=document.createElement(`div`),t.id=`completion-modal-backdrop`,t.className=`modal-backdrop`,document.body.appendChild(t)),t.innerHTML=`
      <div class="modal-container glass-card" style="max-width:440px; text-align:center;">
        <span style="font-size:3.5rem; display:block; margin-bottom:1rem;">🏆</span>
        <h3 style="color:var(--secondary); font-family:'Outfit'; font-size:1.45rem; margin-bottom:0.75rem;">Swapping Session Concluded!</h3>
        <p style="color:var(--text-muted); font-size:0.85rem; margin-bottom:1.5rem; line-height:1.4;">
          Your attendance with mentor <strong>Sanskrutii Tidke</strong> and learner <strong>Ashita Wairagade</strong> has rewarded you with:
        </p>
        
        <div style="display:flex; justify-content:center; gap:2rem; margin-bottom:1.5rem;">
          <div style="background:rgba(121,163,195,0.1); padding:0.5rem 1.25rem; border-radius:12px;">
            <span style="display:block; font-size:1.5rem; font-weight:800; color:var(--primary);">+150</span>
            <span style="font-size:0.7rem; color:var(--text-muted); font-weight:700;">XP POINTS</span>
          </div>
          <div style="background:rgba(235,205,183,0.15); padding:0.5rem 1.25rem; border-radius:12px;">
            <span style="display:block; font-size:1.5rem; font-weight:800; color:var(--secondary);">+10</span>
            <span style="font-size:0.7rem; color:var(--text-muted); font-weight:700;">CREDITS</span>
          </div>
        </div>

        <div style="display:flex; flex-direction:column; gap:0.5rem;">
          <button id="meet-modal-cert-btn" class="btn btn-primary">Take Skills Assessment</button>
          <button id="meet-modal-dash-btn" class="btn btn-glass">Return to Dashboard</button>
        </div>
      </div>
    `,t.classList.add(`active`),e.xp=(e.xp||100)+150,e.credits=(e.credits||0)+10,a.setCurrentUser(e),document.getElementById(`meet-modal-cert-btn`).addEventListener(`click`,()=>{t.classList.remove(`active`),window.location.hash=`#assessments`}),document.getElementById(`meet-modal-dash-btn`).addEventListener(`click`,()=>{t.classList.remove(`active`),window.location.hash=`#dashboard`})}async reRenderUI(){let e=document.getElementById(`main-content`),t=window.scrollY;e.innerHTML=await this.render(),await this.afterRender(),window.scrollTo(0,t)}parseMarkdown(e){return e?e.replace(/^# (.*$)/gim,`<strong>$1</strong>`).replace(/^## (.*$)/gim,`<strong style="color:var(--secondary); display:block; margin-top:0.4rem;">$1</strong>`).replace(/^\* (.*$)/gim,`• $1<br>`).replace(/\*\*([^*]+)\*\*/g,`<strong>$1</strong>`).replace(/\n/g,`<br>`):``}},isPrivate:!0},"ai-assistant":{component:class{constructor(){this.activeSubTab=`roadmap`,this.roadmapSkill=`Web Development`,this.interviewRole=`Frontend Engineer`,this.interviewSkill=`JavaScript`,this.interviewIndex=1,this.currentOutput=``,this.isLoading=!1}async render(){return a.getCurrentUser()?`
      <div style="width: 100%;">
        <!-- Header -->
        <div class="glass-card" style="padding: 2rem; margin-bottom: 2rem; background: linear-gradient(135deg, rgba(121, 163, 195, 0.12) 0%, rgba(235, 205, 183, 0.1) 100%);">
          <h1 style="font-family: 'Outfit', sans-serif; font-size: 2.25rem; font-weight: 800; color: var(--secondary); margin-bottom: 0.5rem;">
            🤖 AI Career Coach & Assistant
          </h1>
          <p style="color: var(--text-muted); font-size: 1.05rem; max-width: 700px; line-height: 1.5;">
            Unlock personalized study blueprints, code critiques, CV analyses, and automated technical mock interview sessions powered by Gemini Core models.
          </p>
        </div>

        <!-- Assistant Workspace layout -->
        <div class="dashboard-grid">
          
          <!-- LEFT SIDEBAR CONTROL PANEL -->
          <div class="dashboard-widget-sm">
            <div class="glass-card" style="display:flex; flex-direction:column; gap:0.5rem; background:rgba(255,255,255,0.5);">
              
              <button class="assistant-tab ${this.activeSubTab===`roadmap`?`active`:``}" data-tab="roadmap" style="display:flex; align-items:center; gap:0.75rem; width:100%; border:none; background:none; padding:0.85rem; text-align:left; cursor:pointer; font-weight:600; border-radius:var(--radius-md);">
                <span>🗺️</span>
                <span>Generate Skill Roadmap</span>
              </button>
              
              <button class="assistant-tab ${this.activeSubTab===`portfolio`?`active`:``}" data-tab="portfolio" style="display:flex; align-items:center; gap:0.75rem; width:100%; border:none; background:none; padding:0.85rem; text-align:left; cursor:pointer; font-weight:600; border-radius:var(--radius-md);">
                <span>📊</span>
                <span>Review Portfolio Strength</span>
              </button>

              <button class="assistant-tab ${this.activeSubTab===`interview`?`active`:``}" data-tab="interview" style="display:flex; align-items:center; gap:0.75rem; width:100%; border:none; background:none; padding:0.85rem; text-align:left; cursor:pointer; font-weight:600; border-radius:var(--radius-md);">
                <span>🎙️</span>
                <span>AI Mock Interview</span>
              </button>

            </div>
          </div>

          <!-- RIGHT DETAIL PANEL -->
          <div class="dashboard-widget-lg">
            <div class="glass-card" style="min-height:420px; display:flex; flex-direction:column; justify-content:space-between; background:#fff;">
              
              <!-- Tab 1: Roadmap Configuration -->
              <div id="panel-roadmap" style="display:${this.activeSubTab===`roadmap`?`block`:`none`};">
                <h3 style="color:var(--secondary); font-family:'Outfit'; font-size:1.35rem; margin-bottom:1rem;">🗺️ Custom Skill Roadmap Creator</h3>
                <p style="color:var(--text-muted); font-size:0.85rem; margin-bottom:1.5rem; line-height:1.4;">
                  Enter any skill (e.g. Next.js, Sketching, Quantum Computing, Chess Strategy). The AI will compose a detailed syllabus, milestone projects, and recommended swap resources.
                </p>
                <div style="display:flex; gap:0.75rem;" class="no-print">
                  <input type="text" id="roadmap-topic-input" class="glass-input" placeholder="e.g. Docker & Kubernetes" value="${this.roadmapSkill}" />
                  <button id="generate-roadmap-btn" class="btn btn-primary" style="flex-shrink:0;">Compose Roadmap</button>
                </div>
              </div>

              <!-- Tab 2: Portfolio Critique -->
              <div id="panel-portfolio" style="display:${this.activeSubTab===`portfolio`?`block`:`none`};">
                <h3 style="color:var(--secondary); font-family:'Outfit'; font-size:1.35rem; margin-bottom:1rem;">📊 Automated Resume & Portfolio Review</h3>
                <p style="color:var(--text-muted); font-size:0.85rem; margin-bottom:1.5rem; line-height:1.4;">
                  SkillVerse AI scans your qualifications, courses, and credentials to calculate a portfolio strength metric and provides recommendations to attract exchange bookings.
                </p>
                <button id="run-portfolio-review-btn" class="btn btn-primary" class="no-print">Analyze My Resume Profile</button>
              </div>

              <!-- Tab 3: Mock Interview -->
              <div id="panel-interview" style="display:${this.activeSubTab===`interview`?`block`:`none`};">
                <h3 style="color:var(--secondary); font-family:'Outfit'; font-size:1.35rem; margin-bottom:1rem;">🎙️ Technical Interview Simulator</h3>
                <p style="color:var(--text-muted); font-size:0.85rem; margin-bottom:1.5rem; line-height:1.4;">
                  Practice real-world scenario interview questions. Provide your text or coding response below and click Evaluate for scoring critique!
                </p>
                <div style="display:flex; gap:0.5rem; margin-bottom:1.5rem;" class="no-print">
                  <input type="text" id="interview-role-input" class="glass-input" placeholder="Role (e.g. Python Developer)" value="${this.interviewRole}" style="flex:1;" />
                  <input type="text" id="interview-skill-input" class="glass-input" placeholder="Skill Focus (e.g. Django)" value="${this.interviewSkill}" style="flex:1;" />
                  <button id="trigger-interview-btn" class="btn btn-primary">Start Interview</button>
                </div>
                
                <!-- Interview Answer Box (Conditional display) -->
                <div id="interview-eval-box" style="display:none; flex-direction:column; gap:1rem; margin-top:1.5rem;" class="no-print">
                  <label style="display:block; font-size:0.8rem; font-weight:700;">Submit Your Practice Answer</label>
                  <textarea id="interview-answer-input" class="glass-textarea" rows="4" placeholder="Type your detailed explanation or paste code block here..."></textarea>
                  <button id="submit-interview-answer-btn" class="btn btn-accent" style="width:100%;">Evaluate Answer</button>
                </div>
              </div>

              <!-- AI Output Viewer Area -->
              <div id="ai-response-container" style="margin-top:2rem; border-top:1px solid rgba(0,0,0,0.06); padding-top:1.5rem; flex:1;">
                ${this.isLoading?`
                  <div style="padding:3rem 0; text-align:center;">
                    <div class="skeleton skeleton-title" style="margin:0 auto 1.25rem;"></div>
                    <div class="skeleton skeleton-text"></div>
                    <div class="skeleton skeleton-text"></div>
                    <p style="color:var(--text-muted); font-size:0.85rem; margin-top:0.75rem;">AI Coach is compiling details...</p>
                  </div>
                `:this.currentOutput?`
                  <div class="glass-card" style="padding:1.5rem; background:rgba(121,163,195,0.04); text-align:left; max-height:400px; overflow-y:auto; font-size:0.9rem; line-height:1.6;">
                    ${this.parseMarkdown(this.currentOutput)}
                  </div>
                `:`
                  <div style="text-align:center; padding:4rem 0; color:var(--text-muted); font-style:italic;">
                    Select an activity in the panel to receive AI insights.
                  </div>
                `}
              </div>

            </div>
          </div>

        </div>
      </div>

      <style>
        .assistant-tab {
          transition: all var(--transition-fast);
          color: var(--text-muted);
        }
        .assistant-tab:hover {
          background: rgba(121, 163, 195, 0.15);
          color: var(--secondary);
        }
        .assistant-tab.active {
          background: var(--primary);
          color: #fff;
        }
      </style>
    `:``}async afterRender(){let e=a.getCurrentUser();if(!e)return;document.querySelectorAll(`.assistant-tab`).forEach(e=>{e.addEventListener(`click`,e=>{let t=e.target.closest(`.assistant-tab`).getAttribute(`data-tab`);this.activeSubTab=t,this.currentOutput=``,this.reRenderUI()})});let t=document.getElementById(`generate-roadmap-btn`);t&&t.addEventListener(`click`,async()=>{let e=document.getElementById(`roadmap-topic-input`).value.trim();if(e){this.roadmapSkill=e,this.isLoading=!0,this.reRenderUI();try{this.currentOutput=await p.generateRoadmap(e)}catch{this.currentOutput=`### Error
Failed to generate roadmap.`}this.isLoading=!1,this.reRenderUI()}});let n=document.getElementById(`run-portfolio-review-btn`);n&&n.addEventListener(`click`,async()=>{this.isLoading=!0,this.reRenderUI();try{this.currentOutput=await p.reviewPortfolio(e)}catch{this.currentOutput=`### Error
Failed to evaluate portfolio.`}this.isLoading=!1,this.reRenderUI()});let r=document.getElementById(`trigger-interview-btn`);r&&r.addEventListener(`click`,async()=>{let e=document.getElementById(`interview-role-input`).value.trim(),t=document.getElementById(`interview-skill-input`).value.trim();if(!e||!t){window.showToast(`Please provide both Role and Skill Focus.`,`error`);return}this.interviewRole=e,this.interviewSkill=t,this.isLoading=!0,this.reRenderUI();try{this.currentOutput=await p.generateInterviewQuestion(e,t,this.interviewIndex),setTimeout(()=>{let e=document.getElementById(`interview-eval-box`);e&&(e.style.display=`flex`)},100)}catch{this.currentOutput=`### Error
Failed to generate question.`}this.isLoading=!1,this.reRenderUI()});let i=document.getElementById(`submit-interview-answer-btn`);i&&i.addEventListener(`click`,async()=>{let t=document.getElementById(`interview-answer-input`).value.trim();if(!t){window.showToast(`Please write an answer to evaluate.`,`error`);return}this.isLoading=!0,this.reRenderUI();try{this.currentOutput=await p.evaluateChallenge(t,`Technical Interview Q: for ${this.interviewRole} - ${this.interviewSkill}`),e.xp=(e.xp||100)+150,e.credits=(e.credits||0)+2,a.setCurrentUser(e),window.showToast(`Evaluation complete! Earned +150 XP, +2 Credits.`,`success`)}catch{this.currentOutput=`### Error
Failed to evaluate answer.`}this.isLoading=!1,this.reRenderUI()})}async reRenderUI(){let e=document.getElementById(`main-content`),t=window.scrollY;e.innerHTML=await this.render(),await this.afterRender(),window.scrollTo(0,t)}parseMarkdown(e){return e?e.replace(/^# (.*$)/gim,`<h3>$1</h3>`).replace(/^## (.*$)/gim,`<h4 style="margin-top:1rem; color:var(--secondary);">$1</h4>`).replace(/^### (.*$)/gim,`<h5 style="margin-top:0.75rem; color:var(--secondary);">$1</h5>`).replace(/^\* (.*$)/gim,`<li>$1</li>`).replace(/> \[(.*)\]\n> (.*)/gim,`<blockquote style="border-left:3px solid var(--primary); padding-left:0.5rem; font-style:italic;">$2</blockquote>`).replace(/\`\`\`([a-zA-Z]*)\n([\s\S]*?)\`\`\`/gm,`<pre style="background:#221d1b; color:#fff; padding:1rem; border-radius:8px; font-family:monospace; overflow-x:auto;"><code>$2</code></pre>`).replace(/\*\*([^*]+)\*\*/g,`<strong>$1</strong>`).replace(/\*([^*]+)\*/g,`<em>$1</em>`).replace(/\n/g,`<br>`):``}},isPrivate:!0},assessments:{component:class{constructor(){this.activeQuiz=null,this.quizAnswers={},this.quizCompleted=!1,this.quizScore=0}async render(){let e=a.getCurrentUser();if(!e)return``;let t=await l.getAssessments(),n=await l.getCertificates(e.id);return`
      <div style="width: 100%;">
        <!-- Header -->
        <div class="glass-card" style="padding: 2rem; margin-bottom: 2rem; background: linear-gradient(135deg, rgba(121, 163, 195, 0.12) 0%, rgba(235, 205, 183, 0.1) 100%);">
          <h1 style="font-family: 'Outfit', sans-serif; font-size: 2.25rem; font-weight: 800; color: var(--secondary); margin-bottom: 0.5rem;">
            📝 Skill Assessments & Credentials
          </h1>
          <p style="color: var(--text-muted); font-size: 1.05rem; max-width: 700px; line-height: 1.5;">
            Validate your expertise. Completing assessments with a score of <strong>85% or higher</strong> awards you a verified SkillVerse certificate badge added to your resume.
          </p>
        </div>

        <!-- If taking active quiz -->
        ${this.activeQuiz?this.renderActiveQuiz():`
          <!-- MAIN LAYOUT: ASSESSMENTS LIST & CERTIFICATE GALLERY -->
          <div class="dashboard-grid">
            
            <!-- List of Available Assessments -->
            <div class="dashboard-widget-lg" style="display:flex; flex-direction:column; gap:1.5rem;">
              <div class="glass-card">
                <h3 style="color:var(--secondary); font-family:'Outfit'; margin-bottom:1.25rem;">Available Skill Tests</h3>
                <div style="display:flex; flex-direction:column; gap:1rem;">
                  ${t.map(e=>`
                    <div class="glass-card" style="padding:1.25rem; display:flex; justify-content:space-between; align-items:center; background:rgba(255,255,255,0.45); border-color:rgba(121,163,195,0.15);">
                      <div>
                        <div style="display:flex; align-items:center; gap:0.5rem;">
                          <h4 style="font-weight:700; color:var(--secondary); font-size:1.1rem;">${e.title}</h4>
                          <span class="badge" style="font-size:0.65rem;">${e.difficulty}</span>
                        </div>
                        <p style="font-size:0.8rem; color:var(--text-muted); margin-top:0.25rem;">
                          Subject: ${e.skill} | Reward: +${e.xpReward} XP & Certificate Badge
                        </p>
                      </div>
                      <button class="btn btn-primary start-quiz-btn" data-id="${e.id}">Start Test</button>
                    </div>
                  `).join(``)}
                </div>
              </div>
            </div>

            <!-- Certificate Diplomas Gallery -->
            <div class="dashboard-widget-sm">
              <div class="glass-card">
                <h3 style="color:var(--secondary); font-family:'Outfit'; margin-bottom:1.25rem;">📜 Verified Diplomas</h3>
                <div style="display:flex; flex-direction:column; gap:1.25rem;">
                  ${n.length===0?`
                    <p style="font-size:0.85rem; color:var(--text-muted); text-align:center; padding:2rem 0;">No diplomas earned yet. Pass a test to unlock.</p>
                  `:n.map(e=>`
                    <!-- Diploma card glass design -->
                    <div class="glass-card" style="padding:1.5rem; text-align:center; border:2px solid rgba(235, 205, 183, 0.4); background:rgba(255,255,255,0.9); box-shadow:0 10px 30px rgba(149,118,98,0.1);">
                      <div style="font-size:2rem; margin-bottom:0.5rem;">🎓</div>
                      <h4 style="font-family:'Outfit'; color:var(--secondary); font-size:1rem; font-weight:700; margin-bottom:0.25rem;">
                        ${e.skill}
                      </h4>
                      <div style="font-size:0.75rem; color:var(--primary); font-weight:600; text-transform:uppercase; letter-spacing:0.05em; margin-bottom:0.75rem;">
                        Expert Certificate
                      </div>
                      
                      <!-- Diploma parameters details -->
                      <div style="font-size:0.7rem; color:var(--text-muted); border-top:1px dashed rgba(0,0,0,0.08); padding-top:0.75rem; display:flex; flex-direction:column; gap:0.25rem;">
                        <div>Recipient: <strong>${e.userName}</strong></div>
                        <div>Graduation score: <strong>${e.score}%</strong></div>
                        <div>Credential: <strong>${e.credentialId}</strong></div>
                        <div>Verified Date: ${e.date}</div>
                      </div>
                    </div>
                  `).join(``)}
                </div>
              </div>
            </div>

          </div>
        `}
      </div>
    `}renderActiveQuiz(){return`
      <div class="glass-card" style="max-width:700px; margin: 0 auto; background:#fff; padding:2.5rem;">
        <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid rgba(0,0,0,0.08); padding-bottom:1rem; margin-bottom:1.5rem;">
          <h2 style="font-family:'Outfit'; color:var(--secondary); font-size:1.35rem; font-weight:700;">
            📝 Test: ${this.activeQuiz.title}
          </h2>
          <button id="cancel-quiz-btn" class="btn btn-glass" style="padding:4px 10px; font-size:0.8rem;">Quit Exam</button>
        </div>

        <form id="quiz-form" style="display:flex; flex-direction:column; gap:2rem;">
          ${this.activeQuiz.questions.map((e,t)=>`
            <div>
              <h4 style="font-weight:700; color:var(--text-dark); margin-bottom:0.75rem; font-size:1.05rem;">
                Question ${t+1}: ${e.question}
              </h4>
              <div style="display:flex; flex-direction:column; gap:0.75rem;">
                ${e.options.map((t,n)=>`
                  <label class="quiz-option-label" style="display:flex; align-items:center; gap:0.75rem; padding:0.75rem 1rem; border:1px solid rgba(121,163,195,0.25); border-radius:var(--radius-md); cursor:pointer; transition:all var(--transition-fast);">
                    <input type="radio" name="question_${e.id}" value="${n}" required style="accent-color:var(--primary);" />
                    <span style="font-size:0.9rem; color:var(--text-dark);">${t}</span>
                  </label>
                `).join(``)}
              </div>
            </div>
          `).join(``)}

          <button type="submit" class="btn btn-primary" style="width:100%; padding:0.9rem; margin-top:1rem;">
            Submit Answers for AI Evaluation
          </button>
        </form>
      </div>

      <style>
        .quiz-option-label:hover {
          background: rgba(121,163,195,0.08);
          border-color: var(--primary);
        }
        /* Highlight option if child input is checked */
        .quiz-option-label:has(input:checked) {
          background: rgba(121,163,195,0.15);
          border-color: var(--primary);
          box-shadow: 0 0 0 1px var(--primary);
        }
      </style>
    `}async afterRender(){document.querySelectorAll(`.start-quiz-btn`).forEach(e=>{e.addEventListener(`click`,async e=>{let t=e.target.getAttribute(`data-id`),n=await l.getAssessments();this.activeQuiz=n.find(e=>e.id===t),this.reRenderUI()})});let e=document.getElementById(`cancel-quiz-btn`);e&&e.addEventListener(`click`,()=>{this.activeQuiz=null,this.reRenderUI()});let t=document.getElementById(`quiz-form`);t&&t.addEventListener(`submit`,async e=>{e.preventDefault();let n=a.getCurrentUser(),r=0;this.activeQuiz.questions.forEach(e=>{let n=t.querySelector(`input[name="question_${e.id}"]:checked`).value;parseInt(n)===e.correct&&r++});let i=Math.round(r/this.activeQuiz.questions.length*100);this.activeQuiz=null,i>=85?(n.xp=(n.xp||100)+300,n.credits=(n.credits||0)+10,await l.createCertificate({userId:n.id,userName:n.name,skill:this.activeQuiz?.skill||`Technology`,score:i}),a.setCurrentUser(n),this.openAchievementModal(i)):(window.showToast(`Score: ${i}%. Minimum 85% required to earn credential. Try again!`,`error`),this.reRenderUI())})}openAchievementModal(e){let t=document.getElementById(`achievement-modal-backdrop`);t||(t=document.createElement(`div`),t.id=`achievement-modal-backdrop`,t.className=`modal-backdrop`,document.body.appendChild(t)),t.innerHTML=`
      <div class="modal-container glass-card" style="max-width:450px; text-align:center; padding:2.5rem;">
        <span style="font-size:3.5rem; display:block; margin-bottom:1rem;">🏆</span>
        <h3 style="color:var(--secondary); font-family:'Outfit'; font-size:1.6rem; margin-bottom:0.75rem;">AI Evaluation Passed!</h3>
        <h4 style="color:var(--primary); font-family:'Outfit'; font-size:1.25rem; font-weight:700; margin-bottom:1rem;">Score: ${e}%</h4>
        <p style="color:var(--text-muted); font-size:0.9rem; margin-bottom:1.5rem; line-height:1.5;">
          Congratulations! You completed the assessment exam. A digital diploma has been registered to your profile resume, and you have been rewarded with <strong>+300 XP</strong> and <strong>+10 Skill Credits</strong>!
        </p>
        <button id="close-achievement-modal" class="btn btn-primary" style="width:100%;">View Credentials</button>
      </div>
    `,t.classList.add(`active`),document.getElementById(`close-achievement-modal`).addEventListener(`click`,()=>{t.classList.remove(`active`),this.reRenderUI()})}async reRenderUI(){let e=document.getElementById(`main-content`);e.innerHTML=await this.render(),await this.afterRender()}},isPrivate:!0},community:{component:class{constructor(){this.selectedFilter=`All`,this.replyToId=null}async render(){if(!a.getCurrentUser())return``;let e=await l.getPosts(),t=this.selectedFilter===`All`?e:e.filter(e=>e.category===this.selectedFilter);return`
      <div style="width: 100%;">
        <!-- Header -->
        <div class="glass-card" style="padding: 2rem; margin-bottom: 2rem; background: linear-gradient(135deg, rgba(121, 163, 195, 0.12) 0%, rgba(235, 205, 183, 0.1) 100%);">
          <h1 style="font-family: 'Outfit', sans-serif; font-size: 2.25rem; font-weight: 800; color: var(--secondary); margin-bottom: 0.5rem;">
            💬 Community Space & Study Hub
          </h1>
          <p style="color: var(--text-muted); font-size: 1.05rem; max-width: 700px; line-height: 1.5;">
            Join coding rooms, organize study slots, sign up for hackathons, and exchange knowledge logs with other members.
          </p>
        </div>

        <!-- Create Post & Forums Split -->
        <div class="dashboard-grid">
          
          <!-- LEFT FEED PANEL -->
          <div class="dashboard-widget-lg" style="display:flex; flex-direction:column; gap:1.5rem;">
            
            <!-- Filters bar -->
            <div style="display:flex; gap:0.5rem; flex-wrap:wrap;" class="no-print">
              ${[`All`,`Study Groups`,`Coding Rooms`,`Creative Clubs`,`Hackathons`].map(e=>`
                <button class="filter-tab btn ${this.selectedFilter===e?`btn-primary`:`btn-glass`}" data-cat="${e}" style="padding:0.4rem 1rem; font-size:0.85rem; border-radius:var(--radius-md);">
                  ${e}
                </button>
              `).join(``)}
            </div>

            <!-- Posts List Feed -->
            <div style="display:flex; flex-direction:column; gap:1.5rem;">
              ${t.length===0?`
                <div class="glass-card text-center" style="padding:4rem 0;">
                  <p style="color:var(--text-muted);">No threads published in this category yet.</p>
                </div>
              `:t.map(e=>`
                <div class="glass-card" style="background:#fff; border-color:rgba(121,163,195,0.15); padding:1.75rem;">
                  
                  <!-- Post Author details -->
                  <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:1rem;">
                    <div style="display:flex; gap:0.75rem; align-items:center;">
                      <img src="${e.authorAvatar||`data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2379a3c3' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' style='background:%23f5ebe7;padding:4px;border-radius:50%;'><path d='M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2'/><circle cx='12' cy='7' r='4'/></svg>`}" style="width:40px; height:40px; border-radius:50%; object-fit:cover; border:2px solid var(--primary);" />
                      <div>
                        <strong style="color:var(--secondary); font-size:0.9rem;">${e.authorName}</strong>
                        <div style="font-size:0.75rem; color:var(--text-muted);">${new Date(e.date).toLocaleString()}</div>
                      </div>
                    </div>
                    <span class="badge" style="font-size:0.65rem; background:rgba(121,163,195,0.12); color:var(--primary); border-color:rgba(121,163,195,0.25);">${e.category}</span>
                  </div>

                  <!-- Post Content -->
                  <h3 style="font-family:'Outfit'; color:var(--secondary); font-size:1.25rem; font-weight:700; margin-bottom:0.5rem;">${e.title}</h3>
                  <p style="font-size:0.9rem; color:var(--text-dark); line-height:1.6; margin-bottom:1.25rem; white-space:pre-wrap;">${e.content}</p>
                  
                  <!-- Actions Bar -->
                  <div style="display:flex; gap:1.5rem; align-items:center; border-top:1px solid rgba(0,0,0,0.04); padding-top:1rem;" class="no-print">
                    <button class="like-post-btn" data-id="${e.id}" style="background:none; border:none; color:var(--text-muted); cursor:pointer; display:flex; align-items:center; gap:0.4rem; font-size:0.85rem; font-weight:600;">
                      <span>👍</span>
                      <span>${e.likes} Likes</span>
                    </button>
                    <button class="reply-post-btn" data-id="${e.id}" style="background:none; border:none; color:var(--text-muted); cursor:pointer; display:flex; align-items:center; gap:0.4rem; font-size:0.85rem; font-weight:600;">
                      <span>💬</span>
                      <span>${e.replies.length} Replies</span>
                    </button>
                  </div>

                  <!-- Replies drawer -->
                  <div id="reply-drawer-${e.id}" style="margin-top:1.25rem; background:rgba(0,0,0,0.02); padding:1rem; border-radius:var(--radius-md); display:flex; flex-direction:column; gap:0.75rem; border:1px solid rgba(0,0,0,0.03);">
                    <div style="display:flex; flex-direction:column; gap:0.50rem;">
                      ${e.replies.length===0?`
                        <small style="color:var(--text-muted); font-style:italic;">No replies yet. Be the first to comment!</small>
                      `:e.replies.map(e=>`
                        <div style="font-size:0.8rem; border-bottom:1px solid rgba(0,0,0,0.02); padding-bottom:0.5rem;">
                          <strong style="color:var(--secondary);">${e.authorName}:</strong>
                          <span style="color:var(--text-dark);">${e.text}</span>
                          <div style="font-size:0.7rem; color:var(--text-muted); margin-top:2px;">${e.date}</div>
                        </div>
                      `).join(``)}
                    </div>

                    <!-- Quick write reply -->
                    <div style="display:flex; gap:0.5rem; margin-top:0.5rem;" class="no-print">
                      <input type="text" id="reply-input-${e.id}" class="glass-input" style="padding:0.4rem; font-size:0.8rem;" placeholder="Write a reply..." />
                      <button class="btn btn-primary submit-reply-btn" data-id="${e.id}" style="padding:0.4rem 1rem; font-size:0.8rem;">Reply</button>
                    </div>
                  </div>

                </div>
              `).join(``)}
            </div>

          </div>

          <!-- RIGHT CREATE PANEL -->
          <div class="dashboard-widget-sm" class="no-print">
            <div class="glass-card" style="background:#fff; position:sticky; top:90px;">
              <h3 style="color:var(--secondary); font-family:'Outfit'; font-size:1.2rem; margin-bottom:1.25rem;">📝 Start Discussion</h3>
              
              <form id="create-post-form" style="display:flex; flex-direction:column; gap:1rem;">
                <div>
                  <label style="display:block; font-size:0.75rem; font-weight:600; margin-bottom:0.4rem;">Select Space</label>
                  <select id="new-post-category" class="glass-select">
                    <option value="Study Groups">Study Groups</option>
                    <option value="Coding Rooms">Coding Rooms</option>
                    <option value="Creative Clubs">Creative Clubs</option>
                    <option value="Hackathons">Hackathons</option>
                  </select>
                </div>

                <div>
                  <label style="display:block; font-size:0.75rem; font-weight:600; margin-bottom:0.4rem;">Headline Title</label>
                  <input type="text" id="new-post-title" class="glass-input" required placeholder="e.g. Seeking Python Study Swap" />
                </div>

                <div>
                  <label style="display:block; font-size:0.75rem; font-weight:600; margin-bottom:0.4rem;">Description Content</label>
                  <textarea id="new-post-content" class="glass-textarea" required rows="5" placeholder="Explain details about study schedule or swap needs..."></textarea>
                </div>

                <button type="submit" class="btn btn-primary" style="width:100%; padding:0.75rem;">Publish Post (+50 XP)</button>
              </form>
            </div>
          </div>

        </div>
      </div>
    `}async afterRender(){let e=a.getCurrentUser();if(!e)return;document.querySelectorAll(`.filter-tab`).forEach(e=>{e.addEventListener(`click`,e=>{this.selectedFilter=e.target.getAttribute(`data-cat`),this.reRenderUI()})});let t=document.getElementById(`create-post-form`);t&&t.addEventListener(`submit`,async t=>{t.preventDefault();let n=document.getElementById(`new-post-category`).value,r=document.getElementById(`new-post-title`).value.trim(),i=document.getElementById(`new-post-content`).value.trim();if(!r||!i)return;let o={authorId:e.id,authorName:e.name,authorAvatar:e.avatar,category:n,title:r,content:i};await l.createPost(o),e.xp=(e.xp||100)+50,a.setCurrentUser(e),window.showToast(`Thread published! Gain +50 XP.`,`success`),this.reRenderUI()}),document.querySelectorAll(`.like-post-btn`).forEach(e=>{e.addEventListener(`click`,async e=>{let t=e.target.closest(`.like-post-btn`).getAttribute(`data-id`);await l.likePost(t),e.target.style.transform=`scale(1.3)`,setTimeout(()=>e.target.style.transform=`scale(1)`,150),this.reRenderUI()})}),document.querySelectorAll(`.submit-reply-btn`).forEach(t=>{t.addEventListener(`click`,async t=>{let n=t.target.getAttribute(`data-id`),r=document.getElementById(`reply-input-${n}`).value.trim();r&&(await l.replyToPost(n,{authorName:e.name,text:r}),window.showToast(`Reply posted!`,`success`),this.reRenderUI())})})}async reRenderUI(){let e=document.getElementById(`main-content`),t=window.scrollY;e.innerHTML=await this.render(),await this.afterRender(),window.scrollTo(0,t)}},isPrivate:!0},admin:{component:class{async render(){let e=a.getCurrentUser();if(!e)return``;let t=await l.getUsers();await l.getSessions(e.id);let n=t.filter(e=>!e.isVerified),r=t.reduce((e,t)=>e+(t.credits||t.creditsBalance||0),0),i=t.length?Math.round(t.reduce((e,t)=>e+(t.xp||0),0)/t.length):0;return`
      <div style="width: 100%;">
        <!-- Header -->
        <div class="glass-card" style="padding: 2rem; margin-bottom: 2rem; background: linear-gradient(135deg, rgba(121, 163, 195, 0.12) 0%, rgba(235, 205, 183, 0.1) 100%);">
          <h1 style="font-family: 'Outfit', sans-serif; font-size: 2.25rem; font-weight: 800; color: var(--secondary); margin-bottom: 0.5rem;">
            🔑 SkillVerse Admin Portal
          </h1>
          <p style="color: var(--text-muted); font-size: 1.05rem; max-width: 700px; line-height: 1.5;">
            Manage mentor certifications, verify credentials, track overall platform metrics, and oversee community moderation logs.
          </p>
        </div>

        <!-- Metrics widgets -->
        <div class="metrics-row" style="margin-bottom:2rem;">
          <div class="glass-card metric-card">
            <div class="metric-icon">👥</div>
            <div class="metric-details">
              <h3>Registered Users</h3>
              <div class="metric-value">${t.length} Users</div>
            </div>
          </div>
          <div class="glass-card metric-card">
            <div class="metric-icon">🪙</div>
            <div class="metric-details">
              <h3>Circulating Credits</h3>
              <div class="metric-value">🪙 ${r}</div>
            </div>
          </div>
          <div class="glass-card metric-card">
            <div class="metric-icon">⚡</div>
            <div class="metric-details">
              <h3>Average User XP</h3>
              <div class="metric-value">${i} XP</div>
            </div>
          </div>
        </div>

        <div class="dashboard-grid">
          
          <!-- LEFT PANEL: VERIFICATION QUEUE -->
          <div class="dashboard-widget-lg">
            <div class="glass-card" style="background:#fff;">
              <h3 style="color:var(--secondary); font-family:'Outfit'; margin-bottom:1.25rem; display:flex; justify-content:space-between; align-items:center;">
                <span>🛡️ Profile Verification Queue</span>
                <span class="badge" style="font-size:0.7rem;">${n.length} Pending</span>
              </h3>

              <div style="display:flex; flex-direction:column; gap:1rem;">
                ${n.length===0?`
                  <p style="color:var(--text-muted); text-align:center; padding:3rem 0;">All mentors verified. Queue is empty!</p>
                `:n.map(e=>`
                  <div class="glass-card" style="padding:1rem; display:flex; justify-content:space-between; align-items:center; background:rgba(0,0,0,0.02); border-color:rgba(0,0,0,0.04);">
                    <div style="display:flex; gap:1rem; align-items:center;">
                      <img src="${e.avatar||`https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200`}" style="width:48px; height:48px; border-radius:50%; object-fit:cover;" />
                      <div>
                        <strong style="color:var(--secondary);">${e.name}</strong>
                        <div style="font-size:0.75rem; color:var(--text-muted);">${e.email} | Target: ${Array.isArray(e.skillsTeach)?e.skillsTeach.join(`, `):e.skillsTeach||`General`}</div>
                      </div>
                    </div>
                    <button class="btn btn-primary verify-user-btn" data-id="${e.id}" style="padding:0.4rem 1rem; font-size:0.8rem;">
                      Grant Verified Badge
                    </button>
                  </div>
                `).join(``)}
              </div>
            </div>
          </div>

          <!-- RIGHT PANEL: PLATFORM CATEGORIES -->
          <div class="dashboard-widget-sm">
            <div class="glass-card">
              <h3 style="color:var(--secondary); font-family:'Outfit'; margin-bottom:1.25rem;">🔧 Platform Configuration</h3>
              <div style="display:flex; flex-direction:column; gap:1rem; font-size:0.85rem;">
                <div class="glass-card" style="padding:1rem; background:rgba(0,0,0,0.02); border:none;">
                  <span style="font-weight:600; display:block; margin-bottom:0.25rem;">Active DB Mode</span>
                  <span class="badge badge-verified">Local Fallback Activated</span>
                </div>
                
                <div class="glass-card" style="padding:1rem; background:rgba(0,0,0,0.02); border:none;">
                  <span style="font-weight:600; display:block; margin-bottom:0.25rem;">AI Evaluations Core</span>
                  <span class="badge badge-credits">Gemini Core 1.5 Flash</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    `}async afterRender(){document.querySelectorAll(`.verify-user-btn`).forEach(e=>{e.addEventListener(`click`,async e=>{let t=e.target.getAttribute(`data-id`);await l.updateUser(t,{isVerified:!0}),window.showToast(`User verified and badge granted!`,`success`);let n=document.getElementById(`main-content`);n.innerHTML=await this.render(),await this.afterRender()})})}},isPrivate:!0}};async function E(){let e=document.getElementById(`app`);e.innerHTML=`
    <!-- Top Nav Header (Rendered on private pages) -->
    <div id="header-container"></div>
    
    <div class="app-wrapper">
      <!-- Sidebar Navigation (Rendered on private pages) -->
      <div id="sidebar-container"></div>
      
      <!-- Main Content Container where SPA pages render -->
      <main id="main-content" class="main-content"></main>
    </div>
  `,f();let t=new u,n=new d,r=new m,i=new o(T,`main-content`);a.onAuthChanged(async e=>{let a=document.getElementById(`header-container`),o=document.getElementById(`sidebar-container`);e?(a&&(a.innerHTML=await t.render(),await t.afterRender()),o&&(o.innerHTML=await n.render(),await n.afterRender()),r.render(),i.handleRouteChange()):(a&&(a.innerHTML=``),o&&(o.innerHTML=``),r.destroy(),i.handleRouteChange())}),D()}function D(){let e=document.createElement(`canvas`);e.id=`bg-canvas`,document.body.appendChild(e);let t=e.getContext(`2d`),n=e.width=window.innerWidth,r=e.height=window.innerHeight;window.addEventListener(`resize`,()=>{n=e.width=window.innerWidth,r=e.height=window.innerHeight});let i=[];for(let e=0;e<35;e++)i.push({x:Math.random()*n,y:Math.random()*r,r:Math.random()*4+1,vx:(Math.random()-.5)*.4,vy:(Math.random()-.5)*.4,color:Math.random()>.5?`rgba(121, 163, 195, 0.15)`:`rgba(235, 205, 183, 0.15)`});function a(){t.clearRect(0,0,n,r),i.forEach(e=>{e.x+=e.vx,e.y+=e.vy,(e.x<0||e.x>n)&&(e.vx*=-1),(e.y<0||e.y>r)&&(e.vy*=-1),t.beginPath(),t.arc(e.x,e.y,e.r,0,Math.PI*2),t.fillStyle=e.color,t.fill()}),requestAnimationFrame(a)}a()}E();