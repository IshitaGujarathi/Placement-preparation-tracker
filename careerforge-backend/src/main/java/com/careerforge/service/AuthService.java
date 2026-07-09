package com.careerforge.service;

import com.careerforge.dto.AuthResponse;
import com.careerforge.dto.LoginRequest;

public interface AuthService {

    AuthResponse login(LoginRequest request);

}