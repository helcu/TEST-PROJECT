import axios from 'axios';
import httpAdapter from 'axios/lib/adapters/http';
import 'config/init';

axios.defaults.adapter = httpAdapter;
