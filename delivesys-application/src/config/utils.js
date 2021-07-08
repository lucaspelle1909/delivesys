export function errorMessage(error) {
    if (typeof error.response !== 'undefined') {
        if(process.env.NODE_ENV !== 'production')
            console.log(error.response.data)

        switch (error.response.status) {
            case 202:
                return "Ocorreu algum erro. Código de erro: " + error.response.status
            case 204:
                return "Ocorreu algum erro. Código de erro: " + error.response.status
            case 400:
                return "Solicitacão inválida. Código de erro: " + error.response.status
            case 403:
                return "Comunicação com o servidor bloqueada. Código de erro: " + error.response.status
            case 404:
                return "Ocorreu algum erro. Código de erro: " + error.response.status
            case 500:
                return "Operação não concluída, Algum campo está incorreto!"
            default:
                return "Opss, ocorreu um erro inesperado. Código de erro: " + error.response.status
        }
    }
    else {
        return getMessageError().ERROR_AUTHENTICATION
    }
}

export function getMessageError() {
    return {
        'ERROR_AUTHENTICATION': 'Falha na autenticação com o servidor. Recarregue a página e tente novamente.',
        'ERROR_LOGIN_AUTHENTICATION': 'Você não conseguiu se autenticar. Realize o login novamente.',
        'ERROR_ONLY_NUMBERS_USER': 'Digite apenas números no usuário',
        'ERROR_ONLY_NUMBERS': 'Digite apenas números!',
        'ERROR_CEP_INVALID': "Cep inválido",
    };
}

export function copyToClipboard(txt) {
    navigator.clipboard.writeText(txt).then(() => {
        this.message = "Texto copiado";
        this.snackbar = true;
    })
        .catch(() => {
            this.message = "Não foi possível copiar";
            this.snackbar = true;
        });
}

export function ValidateAxiosResponse(jsonResponse) {
    if (jsonResponse instanceof Object) {
        if (jsonResponse.isError) {
            throw new Error(JSON.stringify({ errorType: jsonResponse.errorType, messageError: jsonResponse.messageError }));
        }
        return jsonResponse.objectModel;
    }

    return new Error('Retorno não é um JSON válido.');
}