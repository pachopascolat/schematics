
import { Injectable } from '@nestjs/common';<% if (crud && type !== 'graphql-code-first' && type !== 'graphql-schema-first') { %>
  import { Create<%= singular(classify(name)) %>Dto } from './dto/create-<%= singular(name) %>.dto';
  import { Update<%= singular(classify(name)) %>Dto } from './dto/update-<%= singular(name) %>.dto';
  import {<%= singular(classify(name)) %>} from './entities/<%= singular(name) %>.entity';
  <% } else if (crud) { %>
  import { Create<%= singular(classify(name)) %>Input } from './dto/create-<%= singular(name) %>.input';
  import { Update<%= singular(classify(name)) %>Input } from './dto/update-<%= singular(name) %>.input';
  import {<%= singular(classify(name)) %>} from './entities/<%= singular(name) %>.entity';

  <% } %>
import {Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";



@Injectable()
export class <%= classify(name) %>Service {<% if (crud) { %>


  constructor(
    @InjectRepository(<%= singular(classify(name)) %>)
private readonly <%= lowercased(singular(classify(name))) %>Repository: Repository<<%= singular(classify(name)) %>>,
) {}


  async create(<% if (type !== 'graphql-code-first' && type !== 'graphql-schema-first') { %>create<%= singular(classify(name)) %>Dto: Create<%= singular(classify(name)) %>Dto<% } else { %>create<%= singular(classify(name)) %>Input: Create<%= singular(classify(name)) %>Input<% } %>) {
    return await this.<%= lowercased(singular(classify(name))) %>Repository.save(create<%= singular(classify(name)) %>Dto);
  }

  async findAll() {
    return await this.<%= lowercased(singular(classify(name))) %>Repository.find();
  }

  async findOne(id: number) {
    return await this.<%= lowercased(singular(classify(name))) %>Repository.findOneBy({id:id});
  }

  async update(id: number, <% if (type !== 'graphql-code-first' && type !== 'graphql-schema-first') { %>update<%= singular(classify(name)) %>Dto: Update<%= singular(classify(name)) %>Dto<% } else { %>update<%= singular(classify(name)) %>Input: Update<%= singular(classify(name)) %>Input<% } %>) {
    return await this.<%= lowercased(singular(classify(name))) %>Repository.update(id,update<%= singular(classify(name)) %>Dto);
  }

  async remove(id: number) {
    return await this.<%= lowercased(singular(classify(name))) %>Repository.delete(id);
  }
  <% } %>}
