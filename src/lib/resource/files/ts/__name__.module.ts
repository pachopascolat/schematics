import { Module } from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import  {<%= classify(name) %>Service } from './<%= name %>.service';
import  {<%= classify(name) %> } from './entities/<%= name %>.entity';
<% if (type === 'rest' || type === 'microservice') { %>import { <%= classify(name) %>Controller } from './<%= name %>.controller';<% } %><% if (type === 'graphql-code-first' || type === 'graphql-schema-first') { %>import { <%= classify(name) %>Resolver } from './<%= name %>.resolver';<% } %><% if (type === 'ws') { %>import { <%= classify(name) %>Gateway } from './<%= name %>.gateway';<% } %>

@Module({
  <% if (type === 'rest' || type === 'microservice') { %>
  imports: [TypeOrmModule.forFeature([<%= classify(name) %>])],
    controllers: [<%= classify(name) %>Controller],
    providers: [<%= classify(name) %>Service]<% } else if (type === 'graphql-code-first' || type === 'graphql-schema-first') { %>providers: [<%= classify(name) %>Resolver, <%= classify(name) %>Service]<% } else { %> providers: [<%= classify(name) %>Gateway, <%= classify(name) %>Service]<% } %>
})
export class <%= classify(name) %>Module {}
