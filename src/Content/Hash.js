import SHA256 from '../Secure/SHA-256';
import SHA384 from '../Secure/SHA-384';
import SHA512 from '../Secure/SHA-512';

const Hash = (e) => {
    SHA256(e);
    SHA384(e);
    SHA512(e);
};
export default Hash;