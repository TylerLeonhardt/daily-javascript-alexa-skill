# Daily Javascript Alexa Skill

A fork of my [example Alexa Skill](https://github.com/tylerl0706/Is-The-Mountain-Out-Example-Alexa-Skill) that pulls the latest tweet from a Twitter user and responds with that.

In this case, I used [@JavaScriptDaily](https://twitter.com/JavaScriptDaily) to give us the latest and greatest of the JavaScript world.

![](https://pbs.twimg.com/profile_images/877477206418653184/W63ZlNa1_400x400.jpg)

## Prereqs

You'll need to [make a Twitter app](https://apps.twitter.com) so you can use their API. If you don't know how to get the 4 keys needed to interact with the API, I recommend following my workshop [here](http://techknights.org/workshops/nodejs-twitterbot/)

You'll also need an Amazon & AWS account since you're creating an Alexa Skill and this uses an AWS Lambda Function (It's the easiest way to make an Alexa skill).

Take a look at the docs for getting an Alexa Skill [here](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/registering-and-managing-alexa-skills-in-the-developer-portal).

Take a look at the docs for getting a Lambda function [here](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/developing-an-alexa-skill-as-a-lambda-function).

(optional) I used [Claudia.js](https://www.claudiajs.com) to deploy to the Alexa Skill since it makes it so easy to get going, but you don't have to. Look at the [Getting Started](https://www.claudiajs.com/tutorials/index.html) page if you'd like to give it a go!

## Getting Started

Now that you have your 4 Twitter keys and are able to easily deploy the code, first we need to create a `secrets.json` file to store those keys that is mentioned in the .gitignore.

Create a `secrets.json` file in the root directory with the contents:
```json
{
    "twitter": {
        "consumer_key":         "your",
        "consumer_secret":      "keys",
        "access_token":         "go",
        "access_token_secret":  "here",
    }
}
```

Save that and deploy it.

If you configured your Alexa Skill correctly, you should be able to ask your Echo: 

>You: Alexa, ask [your skill name] what's the latest news.

>Alexa: I hear React is good.

Check the card in your Alexa app for the link to the article.

NOTE: The Alexa app doesn't support opening links in cards... Tweet at them asking for it! We need this feature!

Open an issue if you have problems and I'll help :)