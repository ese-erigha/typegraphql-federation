import { Directive, Field, ID, ObjectType } from 'type-graphql';

@Directive('@key(fields: "id")')
@ObjectType()
export class User {
  @Field(_type => ID)
  id: string;

  @Field(_type => String)
  username: string;

  @Field(_type => String)
  name: string;

  @Field(_type => String)
  birthDate: string;
}
