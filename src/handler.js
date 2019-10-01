import { Subscriber } from 'database/models';
import db from './database/db';

export const handler = async (event, context, callback) => {
  db.connect();
  const email = JSON.parse(event.Records[0].Sns.Message).bounce.bouncedRecipients[0].emailAddress;
  await Subscriber.findOneAndUpdate(
    { email },
    { isCertify: false }
  )
}