package org.example.springweb02.exceptionhandling;

import org.example.springweb02.exceptionhandling.exception.ObjectNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
//@ControllerAdvice
public class GlobalExceptionHandler {

    @ResponseStatus(HttpStatus.NOT_FOUND)
//    @ExceptionHandler(value = {IllegalArgumentException.class, ObjectNotFoundException.class})
    @ExceptionHandler(ObjectNotFoundException.class)
    public ResponseEntity<?> handleValidationExceptions(ObjectNotFoundException ex) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(ex.getMessage());
    }


//    @ResponseStatus(HttpStatus.NOT_FOUND)
//    @ExceptionHandler(ObjectNotFoundException.class)
//    public String handleValidationExceptions(ObjectNotFoundException ex, Model model) {
//        model.addAttribute("errorMess", ex.getMessage());
//        return "/404";
////        Map<String, String> errors = new HashMap<>();
////        ex.getBindingResult().getAllErrors().forEach((error) -> {
////            String fieldName = ((FieldError) error).getField();
////            String errorMessage = error.getDefaultMessage();
////            errors.put(fieldName, errorMessage);
////        });
////        return errors;
//    }

}
