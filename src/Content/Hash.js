import SHA256 from '../Secure/SHA-256';
import SHA384 from '../Secure/SHA-384';
import SHA512 from '../Secure/SHA-512';
import SHA3256 from '../Secure/SHA3-256';
import SHA3384 from '../Secure/SHA3-384';
import SHA3512 from '../Secure/SHA3-512';

const Hash = (e) => {
    SHA256(e);
    SHA384(e);
    SHA512(e);
    SHA3256(e);
    SHA3384(e);
    SHA3512(e);
    return;
};
export default Hash;