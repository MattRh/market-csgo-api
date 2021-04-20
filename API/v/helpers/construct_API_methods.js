module.exports = (version) => {
  const METHODS_TO_EXPORT = {};
  const METHODS_DEFAULTS = require(`./../${version}/enums/methods_defaults`);
  const REQUEST_PARAMS_VALIDATION_SCHEMA = require(`./../${version}enums/request_params_validation_schema`);
  const RESPONSE_VALIDATION_SCHEMA = require(`./../${version}enums/resp_validation_schema`);

  Object.keys(METHODS_DEFAULTS).map((methodPrivacyType) => {
    Object.keys(methodPrivacyType).map((methodNameAsKey) => {
      METHODS_TO_EXPORT[methodNameAsKey] = {
        ...methodPrivacyType[methodNameAsKey],
        isPrivate: methodPrivacyType === "private",
        paramsValidationSchema: REQUEST_PARAMS_VALIDATION_SCHEMA(
          methodNameAsKey
        ),
        responseValidationSchema: RESPONSE_VALIDATION_SCHEMA(methodNameAsKey),
        version,
        name: methodPrivacyType[methodNameAsKey].name || methodNameAsKey,
      };
    });
  });
  return Object.freeze(METHODS_TO_EXPORT);
};