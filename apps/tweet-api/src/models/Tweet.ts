import { Directive, Field, ID, ObjectType } from 'type-graphql';

import { User } from './User';

@Directive('@key(fields: "id")')
@ObjectType()
export class Tweet {
  userId: string;

  @Field(_type => ID)
  id: string;

  @Field(_type => String)
  text: string;

  @Field(_type => User)
  creator(): User {
    return { id: this.userId };
  }
}
