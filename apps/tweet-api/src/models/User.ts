import { ObjectType, Directive, Field } from 'type-graphql';

@Directive('@extends')
@Directive('@key(fields: "id")')
@ObjectType()
export class User {
  @Directive('@external')
  @Field()
  id: string;
}
