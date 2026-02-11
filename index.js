import express from 'express';
import bodyParser from 'body-parser';

const app = express();

// Building Our Own API... 

const jokes = [
  { id: 1, type: "agriculture", setup: "Why did the scarecrow win an award?", description: "Because he was outstanding in his field." },
  { id: 2, type: "programming", setup: "Why don’t programmers like nature?", description: "Because it has too many bugs." },
  { id: 3, type: "school", setup: "Why did the math book look sad?", description: "Because it had too many problems." },
  { id: 4, type: "general", setup: "Why don’t skeletons fight each other?", description: "They don’t have the guts." },
  { id: 5, type: "programming", setup: "Why was the computer cold?", description: "Because it forgot to close its Windows." },
  { id: 6, type: "general", setup: "Why did the bicycle fall over?", description: "Because it was two-tired." },
  { id: 7, type: "general", setup: "Why did the coffee file a police report?", description: "It got mugged." },
  { id: 8, type: "school", setup: "Why did the student eat his homework?", description: "Because the teacher said it was a piece of cake." },
  { id: 9, type: "food", setup: "Why don’t eggs tell jokes?", description: "They might crack up." },
  { id: 10, type: "general", setup: "Why was six afraid of seven?", description: "Because seven eight nine." },

  { id: 11, type: "sports", setup: "Why did the golfer bring two pairs of pants?", description: "In case he got a hole in one." },
  { id: 12, type: "food", setup: "Why did the tomato turn red?", description: "Because it saw the salad dressing." },
  { id: 13, type: "general", setup: "Why can’t your nose be 12 inches long?", description: "Because then it would be a foot." },
  { id: 14, type: "programming", setup: "Why did the computer go to the doctor?", description: "Because it caught a virus." },
  { id: 15, type: "music", setup: "Why did the music teacher go to jail?", description: "Because she got caught with sharp notes." },
  { id: 16, type: "science", setup: "Why don’t scientists trust atoms?", description: "Because they make up everything." },
  { id: 17, type: "school", setup: "Why was the math lecture so long?", description: "The professor kept going off on a tangent." },
  { id: 18, type: "food", setup: "Why did the cookie go to the hospital?", description: "Because it felt crummy." },
  { id: 19, type: "general", setup: "Why did the picture go to jail?", description: "Because it was framed." },
  { id: 20, type: "programming", setup: "Why did the computer show up at work late?", description: "It had a hard drive." },

  { id: 21, type: "programming", setup: "Why don’t programmers like to go outside?", description: "The sunlight causes too many reflections." },
  { id: 22, type: "sports", setup: "Why was the stadium so cool?", description: "Because it was full of fans." },
  { id: 23, type: "music", setup: "Why did the chicken join a band?", description: "Because it had the drumsticks." },
  { id: 24, type: "general", setup: "Why was the calendar scared?", description: "Because its days were numbered." },
  { id: 25, type: "programming", setup: "Why did the developer go broke?", description: "Because he used up all his cache." },
  { id: 26, type: "general", setup: "Why did the man put his money in the freezer?", description: "He wanted cold hard cash." },
  { id: 27, type: "technology", setup: "Why did the phone need glasses?", description: "Because it lost its contacts." },
  { id: 28, type: "general", setup: "Why don’t some couples go to the gym?", description: "Because some relationships don’t work out." },
  { id: 29, type: "school", setup: "Why did the light bulb fail school?", description: "Because it wasn’t too bright." },
  { id: 30, type: "programming", setup: "Why did the programmer quit his job?", description: "Because he didn’t get arrays." },

  { id: 31, type: "agriculture", setup: "Why did the cow win an award?", description: "Because it was outstanding in its field." },
  { id: 32, type: "finance", setup: "Why did the banker switch careers?", description: "He lost interest." },
  { id: 33, type: "programming", setup: "Why was the JavaScript developer sad?", description: "Because he didn’t know how to ‘null’ his feelings." },
  { id: 34, type: "general", setup: "Why did the book join the police?", description: "Because it wanted to go undercover." },
  { id: 35, type: "general", setup: "Why did the man run around his bed?", description: "Because he was trying to catch up on sleep." },
  { id: 36, type: "general", setup: "Why did the fish blush?", description: "Because it saw the ocean’s bottom." },
  { id: 37, type: "programming", setup: "Why did the computer keep sneezing?", description: "It caught a bad case of the bugs." },
  { id: 38, type: "general", setup: "Why was the broom late?", description: "It swept in." },
  { id: 39, type: "school", setup: "Why did the clock get kicked out of class?", description: "Because it was ticking too much." },
  { id: 40, type: "school", setup: "Why did the student bring a ladder to school?", description: "Because he wanted to go to high school." },

  { id: 41, type: "programming", setup: "Why did the developer bring a ladder to work?", description: "Because the bugs were on another level." },
  { id: 42, type: "general", setup: "Why did the pencil break up with the eraser?", description: "It felt like all its mistakes were being erased." },
  { id: 43, type: "technology", setup: "Why did the computer sit on the floor?", description: "Because it wanted to keep a low profile." },
  { id: 44, type: "food", setup: "Why did the sandwich go to therapy?", description: "Because it was feeling grilled." },
  { id: 45, type: "technology", setup: "Why did the keyboard break up with the mouse?", description: "There was too much clicking." },
  { id: 46, type: "programming", setup: "Why did the programmer wear glasses?", description: "Because he couldn’t C sharp." },
  { id: 47, type: "food", setup: "Why did the banana go to the doctor?", description: "Because it wasn’t peeling well." },
  { id: 48, type: "programming", setup: "Why did the computer cross the road?", description: "To get to the other site." },
  { id: 49, type: "programming", setup: "Why did the developer hate nature?", description: "Too many bugs and no documentation." },
  { id: 50, type: "technology", setup: "Why did the server go to sleep?", description: "Because it was handling too many requests." }
];

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/random', (req, res)=>{
    let index = Math.floor(Math.random() * jokes.length);
    res.json(jokes[index]);
});

app.get('/random/:id', (req, res)=>{
    let flag = false;
    let id = parseInt(req.params.id);
    if(isNaN(id)) return res.sendStatus(400);
    for(let element of jokes){
        if(id === element.id){
            res.json(element);
            flag = true;
            break;
        }
    }
    if(!flag) res.sendStatus(404);
});

app.get('/filter', (req, res)=>{
    const type = req.query.type;
    if(!type) return res.sendStatus(400); 
    const filter = jokes.filter((element)=>{
        if(type === element['type']) return true;
    });
    if(filter.length === 0) res.sendStatus(404);
    else res.json(filter);
});

app.post('/set',(req,res)=>{
    if(req.body.type !== undefined && req.body.setup !== undefined && req.body.description !== undefined){
        const size = jokes.length + 1;
        jokes.push({id: size, type: req.body.type, setup: req.body.setup, description: req.body.description});
        res.json(jokes[jokes.length -1]);
    }
    else{
        res.sendStatus(400);
    }
});

app.put('/update/:id',(req, res)=>{
    const id = parseInt(req.params.id);
    if(isNaN(id)) return res.sendStatus(400);
    if(req.body.type !== undefined && req.body.setup !== undefined && req.body.description !== undefined){
        for(let i = 0; i < jokes.length; i++){
            let element = jokes[i];
            if(id == element['id']){
                jokes[i] = {
                    id: element.id,
                    type: req.body.type,
                    setup: req.body.setup,
                    description: req.body.description
                };
                return res.json(jokes[i]);
            }
        }
        return res.sendStatus(404);
    }
    else{
        res.sendStatus(400);
    }
});

app.patch('/upgrade/:id',(req, res)=>{
    const id = parseInt(req.params.id);
    if(isNaN(id)) return res.sendStatus(400);
    for(let i = 0; i < jokes.length; i++){
        let element = jokes[i];
        if(id == element['id']){
            jokes[i] = {
                id: element.id,
                type: req.body.type || element.type,
                setup: req.body.setup || element.setup,
                description: req.body.description || element.description
            };
            return res.json(jokes[i]);
        }
    }
    res.sendStatus(404);
});

app.delete('/delete/:id',(req, res)=>{
    const id = parseInt(req.params.id);
    if(isNaN(id)) return res.sendStatus(400);
    let flag = false;
    let send;
    for(let i = 0; i < jokes.length; i++){
        let element = jokes[i];
        if(id == element['id']){
            flag = true;
            send = {
                id: element.id,
                type: element.type,
                setup: element.setup,
                description: element.description
            };
            jokes.splice(i,1);
            break;
        }
    }
    if(flag) res.json(send);
    else res.sendStatus(404);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});