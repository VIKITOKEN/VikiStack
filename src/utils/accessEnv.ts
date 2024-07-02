const cacheEnv:any = {},
envKeySrc = import.meta.env;

const accessEnv = (key: string) => {
   if (cacheEnv[key]) return cacheEnv[key];
	const envKey =`VITE_${key.split(/(?=[A-Z])/).join('_').toUpperCase()}`;

  	if (!(envKey in envKeySrc))
  	throw new Error(`${envKey} not found in process.env!`);
	  
	cacheEnv[key] = envKeySrc[envKey];
  	return envKeySrc[envKey];
};

export default accessEnv;
