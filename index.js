const alexaSkillKit = require('alexa-skill-kit');
const AlexaMessageBuilder = require('alexa-message-builder');
const Twit = require('twit');

//const secrets = require('./secrets');

var T = new Twit({
  consumer_key:         process.env.TWITTER_CONSUMER_KEY ,//|| secrets.twitter.consumer_key,
  consumer_secret:      process.env.TWITTER_CONSUMER_SECRET ,//|| secrets.twitter.consumer_secret,
  access_token:         process.env.TWITTER_ACCESS_TOKEN ,//|| secrets.twitter.access_token,
  access_token_secret:  process.env.TWITTER_ACCESS_TOKEN_SECRET ,//|| secrets.twitter.access_token_secret,
})

exports.handler = function(event, context) {
  alexaSkillKit(event, context, parsedMessage => {
    return T.get('statuses/user_timeline', { screen_name: 'JavaScriptDaily', count: 1 })
      .catch(function (err) {
        console.log('caught error', err.stack)
      })
      .then(result => {
        console.log(JSON.stringify(result));
        let text = result.data[0].text;
        let textWithoutUrl = text.split(' https://')[0];
        let userMediaUrl = result.data[0].user.profile_image_url_https;
        let createdAt = result.data[0].created_at;



        return new AlexaMessageBuilder()
          .addText(textWithoutUrl)
          .addStandardCard(`From ${createdAt.substr(0,10)}`, text, {
            smallImageUrl: 'https://i.imgur.com/k7mzVOM.png',
            largeImageUrl: 'https://i.imgur.com/k7mzVOM.png'
          })
          .get()
      });
  })
}