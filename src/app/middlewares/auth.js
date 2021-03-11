import jwt from 'jsonwebtoken';
import { promisify } from 'util';

import authConfig from '../../config/auth';

// verificar se o usuário está logado(por meio do token)
export default async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: 'Token not provided' });
  }

  const [, token] = authHeader.split(' '); // Isso retornará um array com 'bearer' no primeiro espaço, e o token no segundo. Com a vírgula, eu descarto a primeira opçao, mostrando apenas a segunda, que seria o Token.

  try {
    const decoded = await promisify(jwt.verify)(token, authConfig.secret);

    req.userId = decoded.id;

    return next();
  } catch (err) {
    return res.status(401).json({ error: 'Invalid token' });
  }
};
